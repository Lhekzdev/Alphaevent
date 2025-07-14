import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PasswordSuccessPopup from "./PasswordSuccessPopup";
import { useParams } from "react-router-dom";

// ✅ Validation Schema
const schema = yup.object().shape({
  oldPasswd: yup.string().required("Old password is required"),
  newPasswd: yup
    .string()
    .min(6, "New password must be at least 6 characters")
    .required("New password is required"),
  confirmPasswd: yup
    .string()
    .oneOf([yup.ref("newPasswd")], "Passwords must match")
    .required("Please confirm your new password"),
});

const ChangePassword = ({ setClose }) => {
  const { userID } = useParams();
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `https://alphaeventappdevmode.onrender.com/api/changePasswd/${userID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            oldPassword: data.oldPasswd,
            newPassword: data.newPasswd,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to change password");
      }

      reset();
      setShowSuccess(true);
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="font-Lato shadow-lg mx-auto w-[685px] h-[532px] rounded-[12px]">
          <div className="bg-[#2D6CCF] px-[28px] py-[20px]">
            <h4 className="text-bold text-[white] text-[14px]">Create New Password</h4>
          </div>

          <div className="bg-[#FFFFFF] flex flex-col gap-y-[20px] px-[40px] py-[32px]">
            <h4 className="text-[16px] font-normal">
              To continue, please enter your password.
            </h4>

            {/* Old Password */}
            <label className="font-bold">
              Existing password
              <input
                type="password"
                placeholder="Enter old password"
                {...register("oldPasswd")}
                className="h-[52px] w-[605px] rounded-[12px] border border-[#BEBEBE] px-[20px] font-normal"
              />
              <p className="text-red-500 text-sm mt-1">{errors.oldPasswd?.message}</p>
            </label>

            {/* New Password */}
            <label>
              New password
              <input
                type="password"
                placeholder="Enter new password"
                {...register("newPasswd")}
                className="h-[52px] w-[605px] rounded-[12px] border border-[#BEBEBE] px-[20px] font-normal"
              />
              <p className="text-red-500 text-sm mt-1">{errors.newPasswd?.message}</p>
            </label>

            {/* Confirm Password */}
            <label className="font-bold">
              Confirm new password
              <input
                type="password"
                placeholder="Confirm new password"
                {...register("confirmPasswd")}
                className="h-[52px] w-[605px] rounded-[12px] border border-[#BEBEBE] px-[20px] font-normal"
              />
              <p className="text-red-500 text-sm mt-1">{errors.confirmPasswd?.message}</p>
            </label>
          </div>

          <div className="bg-[#F8F9FC] w-[685px] flex justify-end h-auto gap-[20px] px-[28px] py-[20px]">
            <button
              onClick={() => setClose(false)}
              type="button"
              className="rounded-[8px]  w-[128px] border-[1px] h-[48px] text-center"
            >
              <h4>Cancel</h4>
            </button>
            <button
              type="submit"
              className="bg-[#4F86DC] text-white rounded-[8px] w-[128px] border-[1px] h-[48px] text-center"
            >
              <h4>Continue</h4>
            </button>
          </div>
        </div>
      </form>

      {/* ✅ Success Popup */}
      {showSuccess && (
        <PasswordSuccessPopup
          onClose={() => {
            setShowSuccess(false);
            setClose(false);
          }}
        />
      )}
    </>
  );
};

export default ChangePassword;
