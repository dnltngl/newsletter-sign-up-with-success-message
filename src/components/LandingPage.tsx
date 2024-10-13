import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg"
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg"
import iconList from "../assets/images/icon-list.svg"
import iconSuccess from "../assets/images/icon-success.svg"

function LandingPage(){
    return (
      <section className=" font-Roboto">
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
            <p className="text-base font-RobotoRegular text-neutral-DarkSlateGrey mt-4">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="list">
              <div className="flex gap-5">
                <img className="  " src={iconList} alt="" />
                <li className="mt-4">
                  Product discovery and building what matters And much more!
                </li>
              </div>
              <div className="flex gap-5">
                <img className="  " src={iconList} alt="" />
                <li className="mt-4">
                  Measuring to ensure updates are a success
                </li>
              </div>
              <div className="flex gap-5">
                <img className="  " src={iconList} alt="" />
                <li className="mt-4">
                  Measuring to ensure updates are a success
                </li>
              </div>
            </ul>
            <form className="mt-7" action="">
                <h2 className="text-sm mb-2 font-semibold ">Email address</h2>
              <label htmlFor="Email address"></label>
              <input
                className="outline p-2 w-full rounded-lg outline-neutral-Grey"
                type="email"
                name="email"
                placeholder="email@company.com"
              />
              <button className="submitButton w-full outline p-3 rounded-lg mt-5 bg-neutral-DarkSlateGrey text-neutral-White font-Roboto font-bold text-sm" type="submit">Subscribe to monthly newsletter</button>
            </form>
          </div>
        </div>
      </section>
    );
}

export default LandingPage;