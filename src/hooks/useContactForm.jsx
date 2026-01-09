// import { useState } from "react";

// export const useGoogleForm = ({
//   formId,
//   entries,
//   timeout = 3000,
//   initialValues = {},
// }) => {
//   const [values, setValues] = useState(initialValues);
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [emailError, setEmailError] = useState("");

//   const validateEmail = (email) => {
//     const hasAt = email.includes("@");
//     const hasDot = email.includes(".");
//     const dotAfterAt = email.indexOf(".") > email.indexOf("@");
//     return hasAt && hasDot && dotAfterAt;
//   };

//   const setField = (name, value) => {
//     setValues((prev) => ({ ...prev, [name]: value }));
//   };

//   const resetForm = () => {
//     setValues(initialValues);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!values.email?.trim()) {
//       setEmailError("Email is required");
//       return;
//     }

//     if (!validateEmail(values.email)) {
//       setEmailError("Please enter a valid email");
//       return;
//     }

//     setEmailError("");
//     setLoading(true);

//     const formData = new URLSearchParams();

//     Object.entries(entries).forEach(([field, entryId]) => {
//       const value = values[field];
//       if (value !== undefined) {
//         formData.append(entryId, value.toString());
//       }
//     });

//     try {
//       await fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`, {
//         method: "POST",
//         body: formData,
//         mode: "no-cors",
//       });

//       setSubmitted(true);
//       setTimeout(() => {
//         setSubmitted(false);
//         resetForm();
//       }, timeout);
//     } catch (err) {
//       console.error("Send error:", err);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     values,
//     setField,
//     submitted,
//     loading,
//     emailError,
//     handleSubmit,
//   };
// };
