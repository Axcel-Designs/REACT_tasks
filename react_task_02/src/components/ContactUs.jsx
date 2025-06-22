import Form from "./Form";
import img from "../assets/picLandingPage/bottomImage12.png";
import { ButtonDark } from "./Button";

export default function ContactUs() {
  return (
    <>
      <div className="w-4/5 m-auto p-6 lg:p-8">
        <section className="grid grid-cols-1 md:grid-cols-2 justify-around items-center gap-4">
          <div className="w-full md:w-4/5">
            <Form />
            <div className=" m-auto p-2">
              <ButtonDark label={"Send Email"} onClick={() => {}} />
            </div>
          </div>
          <div className="w-full">
            <img src={img} alt="" srcSet={img} />
          </div>
        </section>
      </div>
    </>
  );
}
