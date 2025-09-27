import { auth } from "./firebase-config.js";
import { RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// Setup reCAPTCHA
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});

// Function to send OTP
export function sendOTP(phoneNumber) {
  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("OTP sent successfully!");
    })
    .catch((error) => {
      console.error(error);
      alert("Error sending OTP: " + error.message);
    });
}

// Function to verify OTP
export function verifyOTP(code) {
  window.confirmationResult
    .confirm(code)
    .then((result) => {
      const user = result.user;
      alert("Phone verified! User ID: " + user.uid);
    })
    .catch((error) => {
      console.error(error);
      alert("Invalid OTP!");
    });
}
