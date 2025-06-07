import styled from "styled-components";

// import heroPhoto from "../../images/hero.png"

// import { HeroWrap } from "./style.js"

export const FormWrap = styled.form`
  position: relative;
  z-index: 1;
  width: 467px;
  height: 406px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #273149;
  background: #171e2e;
  padding: 28px;
  transition: opacity 1s ease-out;
  opacity: ${(props) => (props.inView === true ? "1" : "0")};
  @media only screen and (max-width: 500px) {
    padding: 20px;

    width: 100%;
  }
`;
export const WrapText = styled.div`
  position: absolute;
  z-index: 1;
  width: 97%;
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  top: -150px;
  left: 5px;
  @media only screen and (max-width: 1050px) {
    display: none;
  }
`;
export const WrapError = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 630px) {
  }
`;

// Main container for the entire form
export const FormContainer = styled.div`
  background-color: #2b2e3a; /* Dark background color from the image */
  padding: 40px; /* Padding around the form content */
  border-radius: 8px; /* Slightly rounded corners */
  max-width: 500px; /* Max width to center the form */
  margin: 50px auto; /* Center the form horizontally with some top/bottom margin */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
`;

// Title for the form
export const FormTitle = styled.h2`
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

// Common style for input fields (Ime i prezime, Email, Poruka)
export const FormInput = styled.input`
  width: 100%;
  padding: 15px 20px; /* Padding inside the input */
  margin-bottom: 5px; /* Space between inputs */
  background: #1e2639; /* Slightly lighter dark background for input */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners for inputs */
  color: #ffffff; /* White text for input content */
  font-size: 1em; /* Standard font size */
  outline: none; /* Remove outline on focus */
  /* IMPORTANT: Autocomplete prevention CSS */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px #1e2639 inset !important; /* This creates an inner shadow that matches your background color */
    box-shadow: 0 0 0px 1000px #1e2639 inset !important;
    -webkit-text-fill-color: #ffffff !important; /* Ensure text color remains white */
    caret-color: #ffffff !important; /* Ensure cursor color remains white */
    transition: background-color 5000s ease-in-out 0s; /* A long transition to delay the browser override */
  }

  /* Original box-shadow for depth - combine with autofill-prevention */
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);

  &:focus {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2), 0 0 0 2px #007bff; /* Blue ring on focus */
    /* Ensure autofill styles don't conflict on focus */
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #1e2639 inset !important;
      box-shadow: 0 0 0px 1000px #1e2639 inset !important;
      -webkit-text-fill-color: #ffffff !important;
    }
  }
`;

// Textarea specific styles
export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 15px 20px; /* Padding inside the input */
  margin-bottom: 5px; /* Space between inputs */
  background: #1e2639; /* Slightly lighter dark background for input */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners for inputs */
  color: #ffffff; /* White text for input content */
  font-size: 1em; /* Standard font size */
  outline: none; /* Remove outline on focus */
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2); /* Inner shadow for depth */
  display: flex;
  min-height: 130px;
  &::placeholder {
    color: #a0a4b3; /* Lighter placeholder text color */
    opacity: 0.8; /* Slightly transparent placeholder */
  }

  &:focus {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2), 0 0 0 2px #007bff; /* Blue ring on focus */
  }
`;

// Submit button styles
export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px 20px;
  background-color: #ffffff; /* White background for the button */
  color: #161b29;
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition on hover */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  margin-top: 12px;
  &:hover {
    background-color: #e0e0e0; /* Slightly darker white on hover */
    color: #1a1c25;
  }

  &:active {
    background-color: #d0d0d0; /* Even darker on active */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;
