import { useState } from "react";
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import iconList from "../assets/images/icon-list.svg";

function LandingPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    // Basic email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    if (!validateEmail(email)) {
      setEmailError("Valid email required");
    } else {
      setEmailError("");
      // Perform the form submission or other actions here
      console.log("Form submitted with email:", email);
      // Optionally, reset the email field
      setEmail("");
    }
  };

  return (
    <section className="font-Roboto">
      <div className="sm:flex">
        <picture className="order-2 sm:order-1 sm:max-h-fit md:flex">
          <source media="(min-width:465px)" srcSet={illustrationDesktop} />
          <img src={illustrationMobile} alt="" />
        </picture>

        <div className="p-5">
          <h1 className="text-4xl font-Roboto font-bold mt-3">Stay updated!</h1>
          <p className="text-base font-RobotoRegular text-neutral-DarkSlateGrey mt-4 font-semibold">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="list">
            <div className="flex gap-5">
              <img src={iconList} alt="" />
              <li className="mt-3 text-sm font-semibold">
                Product discovery and building what matters And much more!
              </li>
            </div>
            <div className="flex gap-5">
              <img src={iconList} alt="" />
              <li className="mt-3 text-sm font-semibold">
                Measuring to ensure updates are a success
              </li>
            </div>
            <div className="flex gap-5">
              <img src={iconList} alt="" />
              <li className="mt-3 text-sm font-semibold">And much more!</li>
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
                emailError ? "outline-red-500" : "outline-neutral-Grey"
              }`}
              type="email"
              name="email"
              placeholder="email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="submitButton w-full outline p-3 rounded-lg mt-5 bg-neutral-DarkSlateGrey text-neutral-White font-Roboto font-bold text-sm hover:bg-primary-Tomato"
              type="submit"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
