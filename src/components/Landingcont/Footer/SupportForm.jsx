import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import submitIcon from "../../../assets/submitIcon.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  ticketId: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  issueCategory: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  message: Yup.string().min(2, "Too Short!").max(500, "Too Long!").required("Required"),
  upload: Yup.string(),
});

const SupportForm = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFieldValue("upload", file.name);
    } else {
      setFileName("No file chosen");
      setFieldValue("upload", "");
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div className="flex flex-col md:flex-row pt-[0px] bg-white shadow-md w-[1000px] h-full text-[#000000] mr-[140px]">
        <div className="py-[0px] px-[50px]">
          <div onClick={handleBackClick} className="flex justify-end">
            <button className="bg-[#2D6CCF] text-[#ffffff] py-[0px] px-[10px] rounded-[5px]">
              ←Back
            </button>
          </div>
          <h3 className="text-[24px] font-semibold mb-[2px]">Report an Issue</h3>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phoneNumber: "",
              ticketId: "",
              issueCategory: "",
              message: "",
              upload: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { setSubmitting, validateForm, resetForm }) => {
              const errors = await validateForm();
              if (Object.keys(errors).length > 0) {
                toast.error("Please fill all required fields.");
                setSubmitting(false);
                return;
              }

              const payload = {
                userName: values.fullName,
                userEmail: values.email,
                phone: values.phoneNumber,
                ticketID: values.ticketId,
                issueCategory: values.issueCategory,
                message: values.message,
                imgUrl: values.upload,
              };

              try {
                const res = await axios.post(
                  "https://alphaeventappdevmode.onrender.com/api/create-support",
                  payload
                );

                toast.success("Report submitted successfully!");
                resetForm(); // ✅ resets all fields including select
                setFileName("No file chosen");
                if (fileInputRef.current) fileInputRef.current.value = "";
              } catch (error) {
                console.error("Error submitting report:", error.response?.data || error.message);
                toast.error("Submission failed. Please try again.");
              }

              setSubmitting(false);
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                {[
                  {
                    name: "fullName",
                    label: "Full Name",
                    type: "text",
                    placeholder: "Enter your full name",
                  },
                  {
                    name: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "Enter your email",
                  },
                  {
                    name: "phoneNumber",
                    label: "Phone Number (Optional)",
                    type: "text",
                    placeholder: "Enter your phone number",
                  },
                  {
                    name: "ticketId",
                    label: "Ticket ID (Optional)",
                    type: "text",
                    placeholder: "Enter ticket ID",
                  },
                  {
                    name: "issueCategory",
                    label: "Issue Category",
                    type: "select",
                  },
                  {
                    name: "message",
                    label: "Message",
                    type: "textarea",
                    placeholder: "Explain issue in the box",
                  },
                ].map((field, index) => (
                  <div key={index} className="mb-[10px]">
                    <label htmlFor={field.name} className="block text-sm font-medium">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <Field
                        name={field.name}
                        as="textarea"
                        rows="4"
                        placeholder={field.placeholder}
                        className="mt-[5px] w-[420px] h-[96px] border border-gray-300 rounded-md p-2"
                      />
                    ) : field.type === "select" ? (
                      <Field
                        name={field.name}
                        as="select"
                        className="mt-[2px] text-[12px] w-[420px] h-[32px] border border-gray-300 rounded-md p-1"
                      >
                        <option value="">Select category</option>
                        <option value="Failed Payment">Failed Payment</option>
                        <option value="Didn't Receive a Ticket">Didn't Receive a Ticket</option>
                        <option value="Debited Twice">Debited Twice</option>
                        <option value="Others">Others</option>
                      </Field>
                    ) : (
                      <Field
                        name={field.name}
                        type={field.type}
                        className="mt-[5px] w-[420px] h-5 border border-gray-300 rounded-md p-2"
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}

                {/* File Upload Field */}
                <Field name="upload">
                  {() => (
                    <div className="mt-2">
                      <label className="block text-sm font-medium">Upload Screenshot (optional)</label>
                      <div className="flex items-center gap-4">
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={(e) => handleFileChange(e, setFieldValue)}
                          className="block text-sm text-gray-600"
                        />
                      </div>
                    </div>
                  )}
                </Field>

                <div className="flex mt-2">
                  <button
                    type="submit"
                    className="flex items-center gap-2 text-[16px] bg-[#2D6CCF] text-white px-4 py-4 rounded-md transition-all w-[149px] h-[45px]"
                  >
                    <img src={submitIcon} alt="Submit" className="w-5 h-5" />
                    <span>Send Report</span>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SupportForm;
