import { useState } from "react";
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import iconList from "../assets/images/icon-list.svg";
import iconSuccess from "../assets/images/icon-success.svg";

function LandingPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState(""); // New state for storing submitted email

  const validateEmail = (email: string) => {
    // Basic email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent form submission
    if (!validateEmail(email)) {
      setEmailError("Valid email required");
    } else {
      setEmailError("");
      setIsModalOpen(true);
      setSubmittedEmail(email); // Store the email to show in the modal
      setEmail(""); // Optionally, reset the email field
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-white sm:outline-neutral-DarkSlateGrey rounded-3xl">
      <div className="font-Roboto sm:p-8">
        <div className="sm:flex sm:gap-3">
          <picture className="order-2 sm:order-1 sm:max-h-fit md:flex">
            <source media="(min-width:465px)" srcSet={illustrationDesktop} />
            <img src={illustrationMobile} alt="" />
          </picture>

          <div className="p-5">
            <h1 className="text-4xl font-Roboto font-bold mt-3 sm:mt-10 sm:text-6xl">
              Stay updated!
            </h1>
            <p className="text-base font-RobotoRegular text-neutral-DarkSlateGrey mt-4 font-semibold sm:text-xl sm:mt-5 sm:mb-3">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="list">
              <div className="flex gap-5">
                <img src={iconList} alt="" />
                <li className="mt-3 text-sm font-semibold sm:text-base sm:mb-3">
                  Product discovery and building what matters And much more!
                </li>
              </div>
              <div className="flex gap-5">
                <img src={iconList} alt="" />
                <li className="mt-3 text-sm font-semibold sm:text-base sm:mb-3">
                  Measuring to ensure updates are a success
                </li>
              </div>
              <div className="flex gap-5">
                <img src={iconList} alt="" />
                <li className="mt-3 text-sm font-semibold sm:text-base sm:mb-3">
                  And much more!
                </li>
              </div>
            </ul>
            <form className="mt-7" onSubmit={handleSubmit}>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xs font-semibold">Email address</h2>
                {emailError && (
                  <p className="text-red-500 text-xs" id="email-error">
                    {emailError}
                  </p>
                )}
              </div>
              <label htmlFor="email"></label>
              <input
                className={`outline p-2 w-full rounded-lg ${
                  emailError
                    ? "outline-red-500 bg-red-100"
                    : "outline-neutral-Grey"
                }`}
                type="email"
                name="email"
                placeholder="email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="submitButton w-full outline p-3 rounded-lg mt-5 bg-neutral-DarkSlateGrey text-neutral-White font-Roboto font-bold text-sm hover:bg-gradient-to-r from-pink-500 to-red-500 "
                type="submit"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal for Thank You message */}
      {isModalOpen && (
        <div className="fixed inset-0 flex bg-neutral-DarkSlateGrey sm:justify-center  bg-opacity-100">
          <div className="bg-white p-9 rounded-lg shadow-lg sm:my-72 sm:p-10 max-w-sm w-full sm:max-w-xs">
            <div className="flex mt-24 sm:mt-1  mb-4 sm:mb-2">
              <div className="">
                <img className="h-14 sm:h-10 sm:mb-3 mb-5" src={iconSuccess} alt="" />
              </div>
            </div>
            <h2 className="text-4xl font-bold ">Thanks for subscribing!</h2>
            <p className="text-sm mb-4 mt-5">
              A confirmation email has been sent to{" "}
              <span className="font-bold">{submittedEmail}</span>. Please open
              it and click the button inside to confirm your subscription.
            </p>
            <button
              onClick={closeModal}
              className="  bg-neutral-DarkSlateGrey text-neutral-White  text-sm hover:bg-gradient-to-r from-pink-500 to-red-500 w-full py-3 mt-40 sm:mt-1 rounded-lg font-Roboto font-bold hover:shadow-lg transition-shadow"
            >
              Dismiss message
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default LandingPage;
