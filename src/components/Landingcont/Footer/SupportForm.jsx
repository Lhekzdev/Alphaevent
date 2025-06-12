import React, { useState, useRef  } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import submitIcon from '../../../assets/submitIcon.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  ticketId: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  isuueCategory: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  message: Yup.string().min(2, 'Too Short!').max(500, 'Too Long!').required('Required'),
  upload: Yup.string(),
});

const SupportForm = () => {
  const [fileName, setFileName] = useState('No file chosen');
  const fileInputRef = useRef(null);


  const handleFileChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFieldValue('upload', file.name);
    } else {
      setFileName('No file chosen');
      setFieldValue('upload', '');
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div className="flex flex-col md:flex-row pt-[5px] bg-white shadow-md w-[1000px] h-full text-[#000000] mr-[140px]">
        <div className="py-[18px] px-[50px]">
          <h3 className="text-[24px] font-semibold mb-[2px]">Report an Issue</h3>

          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
              ticketId: '',
              isuueCategory: '',
              message: '',
              upload: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, validateForm, resetForm  }) => {
                validateForm().then((errors) => {
                  if (Object.keys(errors).length > 0) {
                    toast.error('Please fill all required fields.');
                  } else {
                    toast.success('Report submitted successfully!');
                    console.log(values);
                    resetForm();            
      setFileName('No file chosen');
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; 
      }
                  }
                  setSubmitting(false);
                });
              }}
          >
            {({ setFieldValue }) => (
              <Form>
                {[
                  { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
                  { name: 'phoneNumber', label: 'Phone Number (Optional)', type: 'text', placeholder: 'Enter your phone number' },
                  { name: 'ticketId', label: 'Ticket ID (Optional)', type: 'text', placeholder: 'Enter ticket ID' },
                  {
                    name: 'isuueCategory',
                    label: 'Issue Category',
                    type: 'select',
                    options: ['', 'Payment Issue', 'Ticket Not Received', 'Other'],
                  },
                  {
                    name: 'message',
                    label: 'Message',
                    type: 'textarea',
                    placeholder: 'Explain issue in the box',
                  },
                ].map((field, index) => (
                  <div key={index} className="mb-[10px]">
                    <label htmlFor={field.name} className="block text-sm font-medium">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <Field
                        name={field.name}
                        as="textarea"
                        rows="4"
                        placeholder={field.placeholder}
                        className="mt-[5px] w-[420px] h-[96px] border border-gray-300 rounded-md p-2"
                      />
                    ) : field.type === 'select' ? (
                      <Field
                        name={field.name}
                        as="select"
                        className="mt-[2px] text-[12px] w-[420px] h-[32px] border border-gray-300 rounded-md p-1"
                      >
                        <option value="">Select category</option>
                        <option value="payment">Failed Payment</option>
                        <option value="ticket">Didn’t Receive a Ticket</option>
                        <option value="ticket">Debited Twice</option>
                        <option value="other">Other</option>
                      </Field>
                    ) : (
                      <Field
                        name={field.name}
                        type={field.type}
                        className="mt-[5px] w-[420px] h-[32px] border border-gray-300 rounded-md p-2"
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
                        {/* <span className="text-sm text-gray-500">{fileName}</span> */}
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
