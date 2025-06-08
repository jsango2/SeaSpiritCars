import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

// Overall container for the two columns
const AccordionColumnsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Default to single column stack on small screens */
  gap: 20px; /* Gap between columns */
  width: 100%;
  max-width: 1200px; /* Maximum width for the entire layout */
  margin: 40px auto; /* Center the layout with vertical margins */
  padding: 0 20px; /* Horizontal padding for responsiveness */
  box-sizing: border-box;
  height: 600px;
  /* NOTE: Removed background-color from here. It should be applied to the body or a higher-level wrapper */
  /* color: #e2e8f0; // Keep text color here, as it's for the content */
  @media (max-width: 1050px) {
    height: auto;
    padding: 0 0px; /* Horizontal padding for responsiveness */
  }

  @media (min-width: 1050px) {
    flex-direction: row; /* Two columns on larger screens */
    justify-content: center; /* Center columns if less than max-width */
    align-items: flex-start; /* Align columns to the top */
  }
`;

// Container for each individual column
const AccordionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Gap between items within a column */
  flex: 1; /* Each column takes equal available space */
  min-width: 0; /* Allow columns to shrink on smaller screens if needed */

  @media (min-width: 768px) {
    max-width: calc(50% - 10px); /* Limit column width to half minus half gap */
  }
`;

// Wrapper for each individual accordion item/card
const AccordionItemWrapper = styled.div`
  background-color: #2d3748; /* Slightly lighter dark background for each card */
  border-radius: 8px; /* Rounded corners for the card */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
  overflow: hidden; /* Ensures content respects border-radius during expansion */
  display: flex; /* Use flexbox to stack header and content vertically */
  flex-direction: column;
`;

// Clickable header for each accordion item
const AccordionHeader = styled.div`
  background-color: ${(props) =>
    props.$isOpen
      ? "#232C43"
      : "#232C43"}; /* Darker when open, matches image */
  padding: 20px 25px; /* Generous padding */
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth background and text color transition */
  flex-shrink: 0; /* Prevents the header from shrinking */

  &:hover {
    background-color: #3a4457; /* Slightly lighter hover effect */
  }
`;

// Title text within the accordion header
const AccordionTitle = styled.h3`
  margin: 0;
  font-size: 1.25em; /* Larger font size */
  font-weight: 600; /* Bolder text */
  color: #e2e8f0; /* Light text color */
  @media only screen and (max-width: 850px) {
    padding-top: 14px;
    font-size: 1em; /* Larger font size */
  }
  @media only screen and (max-width: 450px) {
    padding-top: 0px;
    font-size: 1em; /* Larger font size */
  }
`;

// Icon for expanding/collapsing the accordion
const AccordionIcon = styled.span`
  font-size: 1em; /* Larger icon size */
  transform: rotate(
    ${(props) => (props.$isOpen ? "0deg" : "90deg")}
  ); /* Rotates icon based on open state */
  transition: transform 0.3s ease; /* Smooth rotation animation */
  color: #d4cc6c; /* Light blue color for the icon */
  font-weight: normal;
  line-height: 1; /* Helps with vertical alignment of the icon */
`;

// Wrapper for the collapsible content area
const AccordionContentWrapper = styled.div`
  max-height: ${(props) =>
    props.$isOpen ? props.$contentHeight : "0"}px; /* Animates height */
  overflow: hidden; /* Hides content when max-height is 0 */
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1); /* Smoother, slightly longer animation */
  background-color: #232c43; /* Matches the item background */
  flex-grow: 1; /* Allows content to take available vertical space if flexed */
  flex-shrink: 0; /* Important: Prevents content from shrinking in flex container */
`;

// Actual content of the accordion item
const AccordionContent = styled.div`
  padding: 15px 25px 25px; /* Padding for the content text */
  color: #cbd5e0; /* Slightly darker light text color for content */
  line-height: 1.7; /* Increased line height for better readability */
  font-size: 1em;
`;

/**
 * AccordionItem Component
 * Represents a single collapsible section within the Accordion.
 * @param {string} header - The title of the accordion item.
 * @param {React.ReactNode} children - The content to be displayed when the item is expanded.
 * @param {boolean} isActive - True if this item should be open, controlled by the parent.
 * @param {function} onClick - Callback to inform the parent when this item is clicked.
 * @param {string | number} itemKey - Unique identifier for this item, used by the parent.
 */
const AccordionItem = ({ header, children, isActive, onClick, itemKey }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isActive ? contentRef.current.scrollHeight : 0);
    }
  }, [isActive]);

  useEffect(() => {
    const handleResize = () => {
      if (isActive && contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isActive]);

  const handleClick = () => {
    onClick(itemKey);
  };

  return (
    <div ref={ref}>
      <AccordionItemWrapper
        className={`contentFade ${inView ? "contentFadeIn" : "contentFadeOut"}`}
      >
        <AccordionHeader onClick={handleClick} $isOpen={isActive}>
          <AccordionTitle>{header}</AccordionTitle>
          <AccordionIcon $isOpen={isActive}>&#x2303;</AccordionIcon>
        </AccordionHeader>
        <AccordionContentWrapper
          $isOpen={isActive}
          $contentHeight={contentHeight}
        >
          <AccordionContent ref={contentRef}>{children}</AccordionContent>
        </AccordionContentWrapper>
      </AccordionItemWrapper>
    </div>
  );
};

/**
 * Accordion Component
 * A wrapper component to contain multiple AccordionItems and ensure only one is open at a time.
 * It now distributes items into two virtual columns for independent height behavior.
 * @param {React.ReactNode} children - Should be a collection of AccordionItem components.
 */
const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (clickedKey) => {
    setActiveIndex(clickedKey === activeIndex ? null : clickedKey);
  };

  // Divide children into two columns
  const column1Children = [];
  const column2Children = [];

  React.Children.forEach(children, (child, index) => {
    if (React.isValidElement(child) && child.type === AccordionItem) {
      const itemKey = child.props.itemKey || `accordion-item-${index}`;
      const controlledChild = React.cloneElement(child, {
        isActive: itemKey === activeIndex,
        onClick: handleItemClick,
        itemKey: itemKey,
      });

      // Distribute children alternately to columns
      if (index % 2 === 0) {
        // Even index to column 1
        column1Children.push(controlledChild);
      } else {
        // Odd index to column 2
        column2Children.push(controlledChild);
      }
    }
  });

  return (
    <AccordionColumnsContainer>
      <AccordionColumn>{column1Children}</AccordionColumn>
      <AccordionColumn>{column2Children}</AccordionColumn>
    </AccordionColumnsContainer>
  );
};

export { Accordion, AccordionItem };
