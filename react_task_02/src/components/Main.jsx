import picTop from "../assets/picLandingPage/landingTop.png";
import about1 from "../assets/picLandingPage/midSectionRectangle 8.png";
import about2 from "../assets/picLandingPage/midSectionRectangle10.png";
import about3 from "../assets/picLandingPage/Rectangle9.png";
import image12 from "../assets/picLandingPage/Rectangle12.png";
import image15 from "../assets/picLandingPage/image15.png";
import image16 from "../assets/picLandingPage/image16.png";
import image17 from "../assets/picLandingPage/image17.png";
import image18 from "../assets/picLandingPage/image18.png";
import Button, { ButtonDark } from "./Button";
import ContactUs from "./ContactUs";

export function About() {
  return (
    <>
      <section className="w-4/5 bg-gray-100 m-auto p-2 lg:p-8 flex">
        <div className="gap-2 space-x-6 grid grid-cols-2 grid-flow-row items-center align-middle p-2 lg:p-8">
          <img src={about1} alt="About 1" className="" />
          <img src={about3} alt="About 3" className="" />
          <img src={about2} alt="About 2" className="" />
        </div>
        <div className="w-3/5 m-auto p-2 lg:p-8">
          <h2 className="text-gray-500 text-4xl mb-4">About</h2>
          <p className="text-gray-700">
            We are a team dedicated to making a difference in our community
            through innovative projects and initiatives.
          </p>
          <Button label="Read More" onClick={() => {}} />
        </div>
      </section>
    </>
  );
}
export function MissionStatement() {
  return (
    <>
      <section className="w-4/5 m-auto p-6 lg:p-8">
        <h2 className="text-gray-500 text-4xl mb-4">Mission Statement</h2>
        <div className="flex justify-around">
          <div className="">
            <div></div>
            <p className="text-gray-700">
              We are a team dedicated to making a difference in our community
              through innovative projects and initiatives.
            </p>
          </div>
          <div className="">
            <div></div>
            <p className="text-gray-700">
              We are a team dedicated to making a difference in our community
              through innovative projects and initiatives.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export function TheProjects() {
  return (
    <>
      <section className="w-4/5 m-auto  lg:p-8">
        <h2 className="text-gray-500 text-4xl mb-4">Our Project</h2>
        <div className="gap-2 grid grid-rows-2 grid-flow-row-dense grid-cols-4  justify-center p-2 lg:p-8">
          <div
            className={`col-span-2 bg-[url(${image12})] bg-cover bg-center bg-gray-900/50 bg-blend-multiply `}
          >
            <div className="flex items-center p-4 h-full">
              <h3 className="text-white text-2xl font-bold">
                Sample <br /> Project
              </h3>
            </div>
            <div className="absolute">
              <h3 className="">Project Description</h3>
              <Button label="View More" onClick={() => {}} />
            </div>
          </div>
          <div
            className={`col-span-2 bg-[url(${image15})] bg-cover bg-center`}
          ></div>
          <div className={`bg-[url(${image16})] bg-cover bg-center`}></div>
          <div className="col-span-2">
            <img src={image17} alt="About 2" className="w-full" />
          </div>
          <div>
            <img src={image18} alt="About 2" className="w-fit h-full" />
          </div>
        </div>
      </section>
      <div className="flex justify-end w-4/5">
        <ButtonDark label="All Projects" onClick={() => {}} />
      </div>
    </>
  );
}

// export function ContactUs() {
//   return <></>;
// }

export default function Main() {
  return (
    <>
      <main className="w-4/5 p-6 lg:p-8 flex items-center content-center flex-wrap justify-between m-auto">
        <div className="mb-6 w-auto ">
          <h1 className="text-gray-500 text-2xl  ">
            PROJECT <br />
            <span className="font-bold text-4xl text-black">Project</span>
          </h1>
        </div>
        <div className="w-auto ">
          <img src={picTop} alt="Landing Page Top" className="m-auto" />
        </div>
      </main>
      <About />
      <br />
      <MissionStatement />
      <TheProjects />
      <ContactUs />
    </>
  );
}
