// import React from "react";

// import {
//   FormInput,
//   FormTextarea,
//   FormTitle,
//   FormWrap,
//   SubmitButton,
//   WrapText,
//   WrapError,
// } from "./style.js";
// import Image from "next/image";

// import useWindowSize from "../helper/usewindowsize.js";

// import { useInView } from "react-intersection-observer";
// import { useState } from "react";
// import { useEffect } from "react";

// function Form({ inView }) {
//   const size = useWindowSize();
//   const [formData, setFormData] = useState({
//     imePrezime: "",
//     email: "",
//     poruka: "",
//   });
//   const [errors, setErrors] = useState({});

//   // Stanje za status slanja (npr. loading, success, error)
//   const [submissionStatus, setSubmissionStatus] = useState(null);
//   const [formSent, setFormSent] = useState(false);
//   const [isSending, setIsSending] = useState(false);

//   // Funkcija za ažuriranje stanja forme kada korisnik unosi podatke
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     // Očisti grešku čim korisnik počne ponovno unositi u polje
//     if (errors[name]) {
//       setErrors((prevErrors) => {
//         const newErrors = { ...prevErrors };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (!formData.imePrezime.trim()) {
//       newErrors.imePrezime = "Ime i prezime su obavezni.";
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "Email je obavezan.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Unesite ispravnu email adresu.";
//     }
//     if (!formData.poruka.trim()) {
//       newErrors.message = "Poruka je obavezna.";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Vraća true ako nema grešaka
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Spriječi defaultno ponašanje forme (osvježavanje stranice)

//     setSubmissionStatus("loading");
//     setErrors({}); // Očisti prethodne greške

//     if (!validateForm()) {
//       return; // Zaustavi slanje ako validacija ne prođe
//     } else setIsSending(true);
//     sendFormToNetlify();
//   };

//   const sendFormToNetlify = () => {
//     const encode = (data) => {
//       return Object.keys(data)
//         .map(
//           (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
//         )
//         .join("&");
//     };
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({ "form-name": "contact", ...formData }),
//     })
//       .then(() => setFormSent(true))
//       .then(
//         () => setSubmissionStatus("Poslano"),
//         setTimeout(() => {
//           setSubmissionStatus("idle"); // Or whatever your initial status is for "Pošaljite upit"
//         }, 3000) // 3000 milliseconds = 3 seconds
//       )
//       .then(() => setFormData({ email: "", poruka: "", imePrezime: "" }))
//       .catch((error) => alert(error), setSubmissionStatus("error"));
//   };
//   // --- NEW: useEffect for error message timeout ---
//   useEffect(() => {
//     let timer;
//     // Check if there are any errors to display
//     if (Object.keys(errors).length > 0) {
//       timer = setTimeout(() => {
//         setErrors({}); // Clear all errors after 3 seconds
//       }, 3000); // 3000 milliseconds = 3 seconds
//     }

//     // Cleanup function: Clear the timeout if the component unmounts
//     // or if errors change before the timeout finishes
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [errors]); // Re-run this effect whenever the 'errors' state changes

//   return (
//     <>
//       <form
//         name="contact"
//         data-netlify="true"
//         data-netlify-honeypot="bot-field"
//         hidden
//         className="formHidden"
//       >
//         <input type="hidden" name="form-name" value="contact" />
//         <input type="text" name="bot-field" />
//         <input type="email" name="email" />
//         <input type="text" name="imePrezime" />
//         <input type="text" name="poruka" />
//       </form>
//       <FormWrap inView={inView}>
//         <WrapText>
//           Odvjetnik s više od 15 godina iskustva u pružanju pravnih usluga.
//           Individualan pristup i sveobuhvatna pravna podrška s ciljem
//           učinkovitih i pravno održivih rješenja.
//         </WrapText>
//         <FormTitle>Zatražite konzultacije</FormTitle>
//         <FormInput
//           type="text"
//           name="imePrezime"
//           placeholder="Ime i prezime"
//           value={formData.imePrezime}
//           onChange={handleChange}
//         ></FormInput>
//         <FormInput
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         ></FormInput>
//         <FormTextarea
//           name="poruka"
//           placeholder="Poruka"
//           value={formData.poruka}
//           onChange={handleChange}
//           rows="5"
//         ></FormTextarea>
//         <WrapError>
//           {errors.message && <p>{errors.message}</p>}
//           {errors.email && <p>{errors.email}</p>}
//           {errors.imePrezime && <p>{errors.imePrezime}</p>}
//         </WrapError>
//         <SubmitButton
//           onClick={(e) => handleSubmit(e)}
//           disabled={submissionStatus === "loading"}
//         >
//           {submissionStatus === "loading"
//             ? "Šaljem..."
//             : submissionStatus === "Poslano"
//             ? "Poslano"
//             : submissionStatus === "error"
//             ? "Greška u slanju"
//             : "Pošaljite upit"}
//         </SubmitButton>
//       </FormWrap>
//     </>
//   );
// }

// export default Form;

import React from "react";

import {
  FormInput,
  FormTextarea,
  FormTitle,
  FormWrap,
  SubmitButton,
  WrapText,
  WrapError,
  CheckboxContainer, // Import the new styled component for checkbox
  HiddenCheckboxInput, // Import the new styled component for the hidden checkbox
  CustomCheckbox, // Import the new styled component for the custom checkbox
} from "./style.js";
import Image from "next/image"; // Note: Image is imported but not used in the component
import useWindowSize from "../helper/usewindowsize.js"; // Note: useWindowSize is imported but not used in the component

import { useInView } from "react-intersection-observer"; // Note: useInView is imported but not used in the component
import { useState } from "react";
import { useEffect } from "react";

function Form({ inView }) {
  // Removed unused imports if they're not explicitly used in the final render or logic
  // const size = useWindowSize();
  // const { ref, inView } = useInView({ threshold: 0.2 }); // If inView prop is passed from parent, this hook might not be needed here.

  const [formData, setFormData] = useState({
    imePrezime: "",
    email: "",
    poruka: "",
  });
  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false); // New state for checkbox

  // State for submission status (e.g., loading, success, error)
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [formSent, setFormSent] = useState(false); // Unused, can be removed if not needed elsewhere
  const [isSending, setIsSending] = useState(false); // Unused, can be removed if not needed elsewhere

  // Function to update form state when user inputs data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error as soon as user starts re-entering in the field
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    // Clear checkbox error if it was previously set
    if (errors.checkbox) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors.checkbox;
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.imePrezime.trim()) {
      newErrors.imePrezime = "Ime i prezime su obavezni.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email je obavezan.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Unesite ispravnu email adresu.";
    }
    if (!formData.poruka.trim()) {
      newErrors.poruka = "Poruka je obavezna."; // Corrected from 'message' to 'poruka' to match state key
    }
    if (!isChecked) {
      newErrors.checkbox = "Morate pristati na uvjete.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior (page refresh)

    setSubmissionStatus("loading");
    setErrors({}); // Clear previous errors

    if (!validateForm()) {
      setSubmissionStatus(null); // Reset status if validation fails
      return; // Stop submission if validation fails
    } else {
      setIsSending(true); // You can keep this if you have other logic relying on it
      sendFormToNetlify();
    }
  };

  const sendFormToNetlify = () => {
    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    };
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formData,
        consent: isChecked ? "yes" : "no",
      }), // Include consent data
    })
      .then(() => {
        setFormSent(true); // Can be removed if not used
        setSubmissionStatus("Poslano");
        setFormData({ email: "", poruka: "", imePrezime: "" }); // Clear form fields on success
        setIsChecked(false); // Reset checkbox
        setTimeout(() => {
          setSubmissionStatus(null); // Reset status after 3 seconds
        }, 3000);
      })
      .catch((error) => {
        alert("Došlo je do greške prilikom slanja poruke: " + error); // More user-friendly error
        setSubmissionStatus("error");
        setTimeout(() => {
          setSubmissionStatus(null); // Reset error status after a delay
        }, 3000);
      });
  };

  // useEffect for error message timeout
  useEffect(() => {
    let timer;
    if (Object.keys(errors).length > 0) {
      timer = setTimeout(() => {
        setErrors({}); // Clear all errors after 3 seconds
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [errors]);
  console.log(errors.checkbox);
  return (
    <>
      {/* Hidden Netlify form for bot detection and proper submission */}
      <form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
        className="formHidden"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="bot-field" />
        <input type="email" name="email" />
        <input type="text" name="imePrezime" />
        <input type="text" name="poruka" />
        <input type="checkbox" name="consent" />{" "}
        {/* Add hidden checkbox for Netlify */}
      </form>

      <FormWrap inView={inView}>
        <WrapText>
          Odvjetnik s više od 15 godina iskustva u pružanju pravnih usluga.
          Individualan pristup i sveobuhvatna pravna podrška s ciljem
          učinkovitih i pravno održivih rješenja.
        </WrapText>
        <FormTitle>Zatražite konzultacije</FormTitle>
        <FormInput
          type="text"
          name="imePrezime"
          placeholder="Ime i prezime"
          value={formData.imePrezime}
          onChange={handleChange}
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        ></FormInput>
        <FormTextarea
          name="poruka"
          placeholder="Poruka"
          value={formData.poruka}
          onChange={handleChange}
          rows="5"
        ></FormTextarea>

        {/* NEW: Checkbox for consent */}
        <CheckboxContainer
          onClick={handleCheckboxChange}
          error={errors.checkbox != undefined}
        >
          <HiddenCheckboxInput
            type="checkbox"
            id="consent-checkbox"
            checked={isChecked}
            name="consent" // Important for Netlify
          />
          <CustomCheckbox isChecked={isChecked}>
            {isChecked && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </CustomCheckbox>
          <label htmlFor="consent-checkbox">
            Klikom na “Pošaljte upit” pristajete na pohranu i obradu
            dostavljenih osobnih podataka isključivo u svrhu odgovora na Vaš
            upit. Podaci će biti pohranjeni samo za vrijeme trajanja
            komunikacije, osim ako zakonita potreba nalaže daljnju obradu
            podataka.
          </label>
        </CheckboxContainer>

        <WrapError>
          {errors.imePrezime && <p>{errors.imePrezime}</p>}
          {errors.email && <p>{errors.email}</p>}
          {errors.poruka && <p>{errors.poruka}</p>} {/* Corrected key */}
          {/* {errors.checkbox && <p>{errors.checkbox}</p>}{" "} */}
          {/* Error message for checkbox */}
        </WrapError>

        <SubmitButton
          onClick={handleSubmit} // Simplified onClick
          disabled={submissionStatus === "loading"}
        >
          {submissionStatus === "loading"
            ? "Šaljem..."
            : submissionStatus === "Poslano"
            ? "Poslano"
            : submissionStatus === "error"
            ? "Greška u slanju"
            : "Pošaljite upit"}
        </SubmitButton>
      </FormWrap>
    </>
  );
}

export default Form;
