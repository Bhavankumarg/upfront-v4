"use client";
import React, { useState } from "react";
import axios from "axios";

const JoinUsForm = ({ subject }) => {
  const [yourState, setYourState] = useState(null);
  const [yourCity, setYourCity] = useState(null);
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [errors, setErrors] = useState({});
  const [fileErrors, setFileErrors] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [selectCountry, setSelectCountry] = useState("IN");
  const [selectState, setSelectState] = useState("KA");
  const [hideSubmitButton, setHideSubmitButton] = useState(true);
  const [selectedVessel, setSelectedVessel] = useState("");
  const [positions, setPositions] = useState([]);
  const [newPosition, setNewPosition] = useState("");

  const jobType = [
    { id: "1", name: "Part Time" },
    { id: "2", name: "Full Time" },
  ];
  const applying = [
    { id: "1", position: "Marketing & Communication Specialist" },
    { id: "2", position: "Monitoring, Learning & Evaluation Specialist " },
    { id: "3", position: "Implementation Specialist" },
  ];

  const [formData, setFormData] = useState({
    firstname: "",
    contactNo: "",
    email: "",
    resume: "",
  });

  const handleVesselChange = (e) => {
    const vesselId = e.target.value;
    const selectedOption = e.target.options[e.target.selectedIndex];
    setSelectedVessel(selectedOption.text);
  };

  const handlePositionChange = (e) => {
    setNewPosition(e.target.value);
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const notAllowedDomains = [
    "test.com",
    "sample.com",
    "example.com",
    "testing.com",
  ];

  const customErrors = {
    email: "Please enter a valid email address.",
    emailDomain: "This email domain is not allowed.",
    contactNo: "Please enter only numbers.",
    firstname: "Please enter your name",
    contactNoEmpty: "Please enter your mobile number",
    emailEmpty: "Please enter your email",
  };

  function isValidEmail(email) {
    const [, domain] = email.split("@");
    return notAllowedDomains.includes(domain);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (name === "contactNo" && !/^\d+$/.test(value)) {
      newErrors.contactNo = customErrors.contactNo;
    } else if (name === "email") {
      if (!emailRegex.test(value)) {
        newErrors.email = customErrors.email;
      } else if (isValidEmail(value)) {
        newErrors.email = customErrors.emailDomain;
      } else {
        delete newErrors.email;
      }
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const allowedExtensions = ["pdf", "doc", "docx", "rtf", "txt"];
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();

      if (allowedExtensions.includes(fileExtension)) {
        setFile(selectedFile);
        setHideSubmitButton(false);
        setFileErrors(false);
        setErrors("");
      } else {
        setFileErrors(true);
        setHideSubmitButton(true);
        setErrors({
          resume:
            "Invalid file type. Allowed types are PDF, DOC, DOCX, RTF, and TXT.",
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstname.trim()) {
      newErrors.firstname = customErrors.firstname;
    }
    if (!formData.contactNo.trim()) {
      newErrors.contactNo = customErrors.contactNoEmpty;
    }
    if (!formData.email.trim()) {
      newErrors.email = customErrors.emailEmpty;
    }

    // Check if there are any errors
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
      if (file) {
        formDataToSend.append("resume", file);
      }

      const response = await axios.post(
        `https://beta.upfront.global/wp-json/contact-form-7/v1/contact-forms/102/feedback`,
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

    setIsSubmitting(true);
  };

  return (
    <>
      <div className="py-1 form-width container mx-auto text-left">
        {formVisible ? (
          <>
            <div className="mt-5">
              <form
                className="container mx-auto"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <div className="my-5">
                  <input
                    name="firstname"
                    className={`form-select border  px-3 w-full py-2 rounded-md border-gray-300${
                      errors.firstname ? " is-invalid" : ""
                    }`}
                    placeholder="Enter Name"
                    value={formData.firstname}
                    onChange={handleChange}
                    maxLength={20}
                  />
                  {errors.firstname && (
                    <div className="invalid-feedback text-red-500">
                      {errors.firstname}
                    </div>
                  )}
                </div>
                <div className="my-5 col-span-2">
                  <input
                    name="contactNo"
                    maxLength="10"
                    className={`form-select border  border-gray-300 px-3 w-full py-2 rounded-md${
                      errors.contactNo ? "is-invalid" : ""
                    }`}
                    placeholder="Contact No."
                    value={formData.contactNo}
                    onChange={handleChange}
                  />
                  {errors.contactNo && (
                    <div className="invalid-feedback text-red-500">
                      {errors.contactNo}
                    </div>
                  )}
                </div>
                <div className="my-5">
                  <input
                    type="email"
                    name="email"
                    className={`form-select border   border-gray-300 w-full  px-3 py-2 rounded-md${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback text-red-500">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="my-5 ">
                  <select
                    className={`form-select border  border-gray-300 w-full text-gray-500 px-3 py-2 rounded-md${
                      errors.jobType ? "is-invalid" : ""
                    }`}
                    id="jobType"
                    name="jobType"
                    onChange={handleVesselChange}
                  >
                    <option value="">Job Type</option>
                    {jobType.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  {errors.jobType && (
                    <div className="invalid-feedback text-red-500">
                      {errors.jobType}
                    </div>
                  )}
                </div>
                <div className="my-5">
                  <select
                    id="position"
                    name="position"
                    className={`form-select border  border-gray-300 text-gray-500 px-3 w-full py-2 rounded-md${
                      errors.position ? "is-invalid" : ""
                    }`}
                    disabled={!selectedVessel}
                    onChange={handlePositionChange}
                  >
                    <option value="">Select Position</option>
                    {applying.map((items) => (
                      <option key={items.id} value={items.position}>
                        {items.position}
                      </option>
                    ))}
                  </select>
                  {errors.position && (
                    <div className="invalid-feedback text-red-500">
                      {errors.position}
                    </div>
                  )}
                </div>
                <div className="my-5">
                  <div className="relative mt-2">
                    <input
                      type="file"
                      name="resume"
                      id="resume"
                      accept=".doc, .docx, .pdf, .rtf, .txt"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                    />
                    <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
                      <button
                        type="button"
                        className="bg-black text-white py-2 px-4 rounded-l-md"
                      >
                        Choose file
                      </button>
                      <span className="px-3 py-2 text-gray-500 flex-1 truncate">
                        No file chosen
                      </span>
                    </div>
                  </div>
                  <p
                    className="mt-2 text-sm ext-left text-gray-500"
                    id="resumeHelp"
                  >
                    Complete your job application by uploading your resume or
                    CV. Accepted file types: DOC, DOCX, PDF, RTF, TXT (max 4MB).
                  </p>
                  {errors.resume && (
                    <p className="mt-1 text-sm text-red-500">{errors.resume}</p>
                  )}
                  {fileErrors && (
                    <p className="mt-1 text-sm text-red-500">
                      Please upload a valid file (DOC, DOCX, PDF, RTF, TXT).
                    </p>
                  )}
                </div>

                <div className="col-span-1 md:col-span-3">
                  <button
                    type="submit"
                    className="focus:outline-none w-full md:w-44 rounded-sm text-white bg-[#2F2F2F]  font-normal text-md px-2 py-2 mb-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="mt-5 text-center mb-5 ">
            <h3 className="fs-4 text-black">
              Your application has been received.
            </h3>
            <h3 className="fs-4 text-white">We will contact you shortly.</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default JoinUsForm;
