import React, { useState,useEffect } from "react";
import verifyLogo from "../../assets/verifyLogo.svg";
import strongPassword from "../../assets/strongPassword.svg";
import createPasswordIcon from "../../assets/createPasswordIcon.svg";
import passwordEye from "../../assets/passwordEye.svg";
import passwordEyeOpen from "../../assets/passwordEyeOpen.svg";
import { useNavigate,useLocation } from "react-router-dom";
import { toast } from "react-toastify"; // ✅ Import toast notifications

const CreateAcc = () => {







  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordCriteria, setPasswordCriteria] = useState([false, false, false]);



  const navigate = useNavigate();
  const location = useLocation(); // ✅ Initialize useLocation


  const [userEmail, setUserEmail] = useState(location.state?.userEmail || "");
const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const validatePassword = (input) => {
    const lengthCriteria1 = input.length >= 2; // At least 2 characters
    const lengthCriteria2 = input.length >= 4; // At least 5 characters
    const lengthCriteria3 = input.length >= 6; // At least 5 characters
    const strongCriteria = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(input); // 8 characters with letters, numbers, symbols

    setPasswordCriteria([lengthCriteria1, lengthCriteria2,lengthCriteria3, strongCriteria]);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };




  
  
  // console.log("Received email in SetAcc:", userEmail);


  // ✅ Retrieve userEmail from localStorage if missing
useEffect(() => {
  if (!userEmail) {
    const storedEmail = localStorage.getItem("resetEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }
}, []);

// ✅ Save userEmail to localStorage when it's set
useEffect(() => {
  if (userEmail) {
    localStorage.setItem("resetEmail", userEmail);
  }
}, [userEmail]);




 const handleResetPassword = async () => {
  if (!userEmail) {
    toast.error("Email is missing. Try again.");
    return;
  }

  if (!password || password.length < 6) {
    toast.error("Password must be at least 6 characters long!");
    return;
  }

  if (
    !passwordCriteria.every((criterion) => criterion) ||
    password !== confirmPassword
  ) {
    toast.error(
      "Ensure your password meets all criteria and matches the confirmation password."
    );
    return;
  }

  try {
    setLoading(true);

    const response = await fetch(
      `https://alphaeventappdevmode.onrender.com/api/resetPasswd/${userEmail}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPassword: password }),
      }
    );

    const data = await response.json();

    if (response.ok && data.msg === "Password successfully reset") {
      toast.success("Password reset successfully!");

      setTimeout(() => {
        navigate("/SuccessAcc");
      }, 1000);
    } else {
      toast.error(data.message || "Password reset failed");
    }
  } catch (error) {
    toast.error("Password reset failed. Try again!");
  } finally {
    setLoading(false);
  }
};

  return (
    <section>
      <div className="background w-full h-full bg-[#444444] pt-[25px] pb-[25px]">
        <form className="container w-[850px] mx-auto bg-white rounded-[12px] p-8 relative">
          <div className="logoContainer absolute top-15 left-15">
            <img src={verifyLogo} alt="verifyLogo" />
          </div>

          <div className="mt-[30px]">
            <img src={createPasswordIcon} alt="createPasswordIcon" className="mx-auto mb-4" />
          </div>

          <div className="contentContainer text-center mt-[10px]">
            <div>
              <p className="text-[32px] font-bold w-[416px] mx-auto">Create Your New Password</p>
              <p className="text-[16px] font-light text-[#333333] w-[416px] mx-auto">
                Create a strong password—at least 8 characters with a mix of letters, numbers, and symbols for added security.
              </p>
            </div>

            <div className="inputContainer flex justify-center gap-[11px] my-6">
              <fieldset>
                <div className="relative mb-[10px]">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="border border-[#BEBEBE] w-[414px] rounded-[12px] py-[16.5px] px-[20px]"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <img
                    src={showPassword ? passwordEyeOpen : passwordEye}
                    alt="Toggle Password"
                    onClick={togglePasswordVisibility}
                    className="absolute top-5 right-6 w-5 cursor-pointer"
                  />
                </div>

                <div className="flex gap-[16px] mb-[18px]">
                  <img
                    src={strongPassword}
                    alt="strongPassword"
                    className={`w-[80px] ${passwordCriteria[0] ? "border-[#2D6CCF]" : "opacity-30"}`}
                  />
                  <img
                    src={strongPassword}
                    alt="strongPassword"
                    className={`w-[80px] ${passwordCriteria[1] ? "border-[#2D6CCF]" : "opacity-30"}`}
                  />
                  <img
                    src={strongPassword}
                    alt="strongPassword"
                    className={`w-[80px] ${passwordCriteria[2] ? "border-[#2D6CCF]" : "opacity-30"}`}
                  />
                  <img
                    src={strongPassword}
                    alt="strongPassword"
                    className={`w-[80px] ${passwordCriteria[3] ? "border-[#2D6CCF]" : "opacity-30"}`}
                  />
                </div>

                <div className="relative mb-[10px]">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="border border-[#BEBEBE] w-[414px] rounded-[12px] py-[16.5px] px-[20px]"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <img
                    src={showConfirmPassword ? passwordEyeOpen : passwordEye}
                    alt="Toggle Confirm Password"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute top-5 right-6 w-5 cursor-pointer"
                  />
                </div>

                <div className="flex gap-[16px] mb-[5px]">
                  <img
                    src={strongPassword}
                    alt="confirmPasswordStrength"
                    className={`w-[80px] ${confirmPassword.length >= 2 ? "border-[#2D6CCF]" : "opacity-30"}`}
                  />
                  <img
                    src={strongPassword}
                    alt="confirmPasswordStrength"
                    className={`w-[80px] ${confirmPassword.length >= 4 ? "border-[#2D6CCF]" : "opacity-30"}`}
                  />
                  <img
                    src={strongPassword}
                    alt="confirmPasswordStrength"
                    className={`w-[80px] ${confirmPassword.length >= 6 ? "border-[#2D6CCF]" : "opacity-30"}`}
                  />
                    <img
                    src={strongPassword}
                    alt="confirmPasswordStrength"
                    className={`w-[80px] ${confirmPassword.length >= 8 ? "border-[#2D6CCF]" : "opacity-30"}`}
                  />
                </div>
              </fieldset>
            </div>

            <div className="text-[12px] text-[#333333] font-extralight mb-[10px] ">
                <p>By continuing, you agree to Alvent’s <a href="" className="text-[#333333]  font-bold underline">Terms of Service</a> and <a href="" className="text-[#333333]  font-bold underline">Privacy Policy</a></p>
            </div>

            <div className="w-[416px] mx-auto hover:bg-[#3A7BD5] bg-[#D8E5F7] rounded-[12px] mb-[55px] z-10">
    <button
  type="button"
  onClick={handleResetPassword}
  disabled={loading}
  className="flex items-center justify-center gap-2 py-[16px] px-[167.5px] text-[#7CA7E3] hover:text-white text-[16px] font-normal disabled:opacity-50"
>
  {loading ? (
    <>
      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      <span>Processing...</span>
    </>
  ) : (
    "Proceed"
  )}
</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateAcc;
