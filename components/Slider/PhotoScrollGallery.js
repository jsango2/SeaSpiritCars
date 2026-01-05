// PhotoScrollGallery.jsx (Next.js 12.4) — desktop: 2 rows, mobile (<750px): 1 row + arrows
import React, {
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";
import Image from "next/image";
import styled from "styled-components";

const COPIES = 5; // higher = less frequent "recenter" jumps
const MOBILE_BP = 750;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function PhotoScrollGallery({ photos = [] }) {
  const viewportRef = useRef(null);
  const row1Ref = useRef(null);

  const singleWidthRef = useRef(0);
  const isJumpingRef = useRef(false);

  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const middleIndex = Math.floor(COPIES / 2); // e.g. 2 when COPIES=5

  // detect mobile
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < MOBILE_BP);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const base = useMemo(() => {
    return (photos || []).map((p, i) =>
      typeof p === "string"
        ? { src: p, alt: `Photo ${i + 1}` }
        : { src: p.src, alt: p.alt || `Photo ${i + 1}` }
    );
  }, [photos]);

  const repeated = useMemo(() => {
    let out = [];
    for (let c = 0; c < COPIES; c++) out = out.concat(base);
    return out;
  }, [base]);

  const repeatedReversed = useMemo(() => {
    // IMPORTANT: don't mutate `repeated` with .reverse()
    return [...repeated].reverse();
  }, [repeated]);

  const measureSingleWidth = useCallback(() => {
    const row = row1Ref.current;
    if (!row) return 0;

    const total = row.scrollWidth; // total width of all COPIES
    const single = total / COPIES;

    singleWidthRef.current = single;
    return single;
  }, []);

  // set initial scroll BEFORE paint (no visible "start animation")
  useIsomorphicLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const single = measureSingleWidth();
    if (!single) return;

    isJumpingRef.current = true;
    el.scrollLeft = single * middleIndex; // start on middle copy
    isJumpingRef.current = false;

    setReady(true);
  }, [measureSingleWidth, middleIndex, repeated.length, isMobile]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const onScroll = () => {
      if (isJumpingRef.current) return;

      const single = singleWidthRef.current;
      if (!single) return;

      const left = el.scrollLeft;

      // keep around the "middle" copy band to fake infinity
      const min = single * (middleIndex - 0.5);
      const max = single * (middleIndex + 0.5);

      if (left < min) {
        isJumpingRef.current = true;
        el.scrollLeft = left + single;
        isJumpingRef.current = false;
      } else if (left > max) {
        isJumpingRef.current = true;
        el.scrollLeft = left - single;
        isJumpingRef.current = false;
      }
    };

    // desktop only: block wheel/trackpad (arrows only)
    const onWheel = (e) => {
      if (!isMobile) e.preventDefault();
    };

    // el.addEventListener("scroll", onScroll, { passive: true });
    // el.addEventListener("wheel", onWheel, { passive: false });

    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        const single = measureSingleWidth();
        if (!single) return;

        isJumpingRef.current = true;
        el.scrollLeft = single * middleIndex;
        isJumpingRef.current = false;
      });
      ro.observe(el);
      if (row1Ref.current) ro.observe(row1Ref.current);
    } else {
      window.addEventListener("resize", measureSingleWidth);
    }

    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", measureSingleWidth);
    };
  }, [measureSingleWidth, middleIndex, isMobile]);

  const scrollByOneTile = (dir) => {
    const el = viewportRef.current;
    if (!el) return;

    const row = row1Ref.current;
    const first = row ? row.querySelector("[data-tile='1']") : null;

    let step = 600;
    if (first) {
      const rect = first.getBoundingClientRect();
      const gap = row ? parseFloat(getComputedStyle(row).gap || "0") : 0;
      step = rect.width + gap;
    }

    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  if (!base.length) return null;

  return (
    <Wrap>
      <Viewport ref={viewportRef} $ready={ready} $isMobile={isMobile}>
        <Rows $single={isMobile}>
          <RowTop ref={row1Ref}>
            {repeated.map((p, i) => (
              <Tile key={`top-${p.src}-${i}`} data-tile="1">
                <Image
                  src={p.src}
                  alt={p.alt}
                  layout="fill"
                  objectFit="cover"
                  priority={i < 2}
                />
              </Tile>
            ))}
          </RowTop>

          {!isMobile && (
            <RowBottom>
              {repeatedReversed.map((p, i) => (
                <Tile key={`bot-${p.src}-${i}`}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </Tile>
              ))}
            </RowBottom>
          )}
        </Rows>
      </Viewport>

      <NavLeft
        type="button"
        aria-label="Scroll left"
        onClick={() => scrollByOneTile(-1)}
      >
        ‹
      </NavLeft>

      <NavRight
        type="button"
        aria-label="Scroll right"
        onClick={() => scrollByOneTile(1)}
      >
        ›
      </NavRight>
    </Wrap>
  );
}

/* styled-components */

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 620px;
  overflow: hidden;
  @media (max-width: 750px) {
    min-height: 300px;
  }
`;

const Viewport = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  /* no "initial smooth" on mount */
  scroll-behavior: ${(p) => (p.$ready ? "smooth" : "auto")};

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  /* nice feel on mobile */
  -webkit-overflow-scrolling: touch;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => (p.$single ? "0px" : "10px")};
  padding: 10px;
`;

const RowBase = styled.div`
  --gap: 10px;
  --tileW: clamp(500px, 45vw, 660px);
  --tileH: clamp(240px, 22vw, 320px);

  display: flex;
  gap: var(--gap);
  width: max-content;

  @media (max-width: ${MOBILE_BP}px) {
    --tileW: calc(100vw - 20px); /* one image per view */
    --tileH: 260px;

    /* optional snap feel for arrow/touch */
    scroll-snap-align: start;
  }
`;

const RowTop = styled(RowBase)``;

const RowBottom = styled(RowBase)`
  padding-left: calc(var(--tileW) / 2); /* shift by 50% tile width */
`;

const Tile = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: var(--tileW);
  height: var(--tileH);
  border-radius: 10px;
  overflow: hidden;
  background: #111;

  @media (max-width: ${MOBILE_BP}px) {
    scroll-snap-align: start;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 62px;
  height: 62px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 36px;
  line-height: 1;
  cursor: pointer;
  z-index: 5;

  @media (max-width: 600px) {
    width: 52px;
    height: 52px;
    font-size: 32px;
  }
`;

const NavLeft = styled(NavButton)`
  left: 14px;
`;

const NavRight = styled(NavButton)`
  right: 14px;
`;
