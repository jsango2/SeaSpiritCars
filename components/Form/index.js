import React from "react";

import {
  FormInput,
  FormTextarea,
  FormTitle,
  FormWrap,
  SubmitButton,
  WrapText,
  WrapError,
} from "./style.js";
import Image from "next/image";

import useWindowSize from "../helper/usewindowsize.js";

import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useEffect } from "react";

function Form({ inView }) {
  const size = useWindowSize();
  const [formData, setFormData] = useState({
    imePrezime: "",
    email: "",
    poruka: "",
  });
  const [errors, setErrors] = useState({});

  // Stanje za status slanja (npr. loading, success, error)
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Funkcija za ažuriranje stanja forme kada korisnik unosi podatke
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Očisti grešku čim korisnik počne ponovno unositi u polje
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
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
      newErrors.message = "Poruka je obavezna.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Vraća true ako nema grešaka
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Spriječi defaultno ponašanje forme (osvježavanje stranice)

    setSubmissionStatus("loading");
    setErrors({}); // Očisti prethodne greške

    if (!validateForm()) {
      return; // Zaustavi slanje ako validacija ne prođe
    } else setIsSending(true);
    sendFormToNetlify();
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
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => setFormSent(true))
      .then(
        () => setSubmissionStatus("Poslano"),
        setTimeout(() => {
          setSubmissionStatus("idle"); // Or whatever your initial status is for "Pošaljite upit"
        }, 3000) // 3000 milliseconds = 3 seconds
      )
      .then(() => setFormData({ email: "", poruka: "", imePrezime: "" }))
      .catch((error) => alert(error), setSubmissionStatus("error"));
  };
  // --- NEW: useEffect for error message timeout ---
  useEffect(() => {
    let timer;
    // Check if there are any errors to display
    if (Object.keys(errors).length > 0) {
      timer = setTimeout(() => {
        setErrors({}); // Clear all errors after 3 seconds
      }, 3000); // 3000 milliseconds = 3 seconds
    }

    // Cleanup function: Clear the timeout if the component unmounts
    // or if errors change before the timeout finishes
    return () => {
      clearTimeout(timer);
    };
  }, [errors]); // Re-run this effect whenever the 'errors' state changes

  return (
    <>
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
        <WrapError>
          {errors.message && <p>{errors.message}</p>}
          {errors.email && <p>{errors.email}</p>}
          {errors.imePrezime && <p>{errors.imePrezime}</p>}
        </WrapError>
        <SubmitButton
          onClick={(e) => handleSubmit(e)}
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
