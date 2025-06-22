import Form from "./Form";
import img from "../assets/picLandingPage/bottomImage12.png";
import { ButtonDark } from "./Button";

export default function ContactUs() {
  return (
    <>
      <div className="w-4/5 m-auto p-6 lg:p-8">
          <section className="flex  justify-around items-center gap-4">
            <Form/>
            <div className="w-3/5">
              <img src={img} alt="" srcSet={img} />
            </div>
          </section>
          <ButtonDark label={"Send Email"} onClick={() => {}} />
      </div>
    </>
  );
}
