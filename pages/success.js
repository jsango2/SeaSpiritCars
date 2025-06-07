import Link from "next/link";
import React from "react";

function success() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>Hvala Vam na prijavi!</h2>
        <p>
          Na vašu e-mail adresu će te uskoro dobiti sve potrebne informacije
        </p>
        <div className="linkBack">
          <Link href="/">
            <div className="linkBack">Povratak na početnu stranicu</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default success;
