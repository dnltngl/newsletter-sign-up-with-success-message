import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg"
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg"
function LandingPage(){
    return (
      <section>
        <div className="sm:flex">
          <picture className="order-2 sm:order-1 sm:max-h-fit  md:flex ">
            <source
              className=""
              media="(min-width:465px),"
              srcSet={illustrationDesktop}
            />
            <img src={illustrationMobile} alt="" />
          </picture>

          <div className="p-5">
            <h1 className="text-4xl font-Roboto font-bold mt-3">
              Stay updated!
            </h1>
            <p className="text-base font-RobotoRegular text-neutral-DarkSlateGrey">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul>
              <li>
                Product discovery and building what matters And much more!
              </li>
              <li>Measuring to ensure updates are a success </li>
              <li>Measuring to ensure updates are a success</li>
            </ul>
            <form action="">
              <label htmlFor="Email address"></label>
              <input
                className="outline"
                type="email"
                name="email"
                placeholder="email@company.com"
              />
              <button type="submit">Subscribe to monthly newsletter</button>
            </form>
          </div>
        </div>
      </section>
    );
}

export default LandingPage;