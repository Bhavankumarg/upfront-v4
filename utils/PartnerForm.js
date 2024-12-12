import React, { useState } from "react";
import axios from "axios";

const PartnerForm = ({ subject }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    contactNo: "",
    email: "",
    organisation: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [selectedVessel, setSelectedVessel] = useState("");
  const [newPosition, setNewPosition] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jobType = [
    { id: "1", name: "Part Time" },
    { id: "2", name: "Full Time" },
  ];

  const applying = [
    { id: "1", position: "Project A" },
    { id: "2", position: "Project B" },
    { id: "3", position: "Project C" },
  ];

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const notAllowedDomains = [
    "test.com",
    "sample.com",
    "example.com",
    "testing.com",
  ];

  const customErrors = {
    email: "Please enter a valid email address",
    emailDomain: "This email domain is not allowed",
    contactNo: "Please enter only numbers.",
    firstname: "Please enter your name",
    contactNoEmpty: "Please enter your mobile number",
    emailEmpty: "Please enter your email",
  };

  const isValidEmail = (email) => {
    const [, domain] = email.split("@");
    return notAllowedDomains.includes(domain);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (name === "contactNo") {
      if (!/^\d+$/.test(value)) {
        newErrors.contactNo = customErrors.contactNo;
      } else {
        delete newErrors.contactNo;
      }
      if (!value) {
        newErrors.contactNo = customErrors.contactNoEmpty;
      } else {
        delete newErrors.contactNo;
      }
    } else if (name === "email") {
      if (!emailRegex.test(value)) {
        newErrors.email = customErrors.email;
      } else if (isValidEmail(value)) {
        newErrors.email = customErrors.emailDomain;
      } else {
        delete newErrors.email;
      }
      if (!value) {
        newErrors.email = customErrors.emailEmpty;
      } else {
        delete newErrors.email;
      }
    } else if (name === "firstname") {
      if (value.length < 10 || value.length > 15) {
        newErrors.firstname = customErrors.firstname;
      } else {
        delete newErrors.firstname;
      }
      if (!value) {
        newErrors.firstname = customErrors.firstname;
      } else {
        delete newErrors.firstname;
      }
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check for empty fields before submission
    const newErrors = { ...errors };
    if (!formData.firstname) {
      newErrors.firstname = customErrors.firstname;
    }
    if (!formData.contactNo) {
      newErrors.contactNo = customErrors.contactNoEmpty;
    }
    if (!formData.email) {
      newErrors.email = customErrors.emailEmpty;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      formDataToSend.append("jobtype", selectedVessel);
      formDataToSend.append("applyingfor", newPosition);

      const response = await axios.post(
        "https://beta.upfront.global/wp-json/contact-form-7/v1/contact-forms/157/feedback",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.status === "mail_sent") {
        setFormVisible(false);
        setSuccessMessage(true);
      } else if (response.data.status === "validation_failed") {
        const fieldErrors = {};
        response.data.invalid_fields.forEach((field) => {
          fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        setError("An error occurred. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <div className="py-1 mt- form-width w-full  container mx-auto text-left">
        {formVisible ? (
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="px-5 py-4 gap-6"
          >
            <p className="text-[#2F2F2F] text-sm mb-4">
              All fields are mandatory<span className="text-red-600">*</span>
            </p>
            <div className="mb-4">
              <input
                name="firstname"
                className={`form-control border border-gray-300 rounded-md w-full p-2 ${
                  errors.firstname ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter Name"
                value={formData.firstname}
                onChange={handleChange}
                maxLength={20}
              />
              {errors.firstname && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.firstname}
                </div>
              )}
            </div>

            <div className="mb-4">
              <input
                name="contactNo"
                maxLength="10"
                className={`form-control border border-gray-300 rounded-md w-full p-2 ${
                  errors.contactNo ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Contact No."
                value={formData.contactNo}
                onChange={handleChange}
              />
              {errors.contactNo && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.contactNo}
                </div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                className={`form-control border border-gray-300 rounded-md w-full p-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="organisation"
                className={`form-control border border-gray-300 rounded-md w-full p-2 ${
                  errors.jobType ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Organisation"
                value={formData.organisation}
                onChange={handleChange}
              />
              {errors.jobType && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.jobType}
                </div>
              )}
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                className={`form-control border border-gray-300 rounded-md w-full p-2 ${
                  errors.position ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.position && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.position}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="focus:outline-none w-full rounded-none text-white bg-[#2F2F2F] font-normal text-md px-4 py-2"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="mt-5 text-center mb-5 p-5">
            <h3 className="text-lg text-black ">
              Thank you for your interest.
            </h3>
            <p className="text-black ">
              We will get in touch with you as soon as possible.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default PartnerForm;
