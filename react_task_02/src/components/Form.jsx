import Button, { ButtonDark } from "./Button";

export function Input({ name, type, title }) {
  return (
    <>
      <div>
        <label htmlFor={name}>
          <input
            type={type}
            id={name}
            placeholder={title}
            className=" bg-gray-50 p-2 rounded w-full"
          />
        </label>
      </div>
    </>
  );
}
export function TextArea({ name, title }) {
  return (
    <>
      <textarea
        name={name}
        id={name}
        placeholder={title}
        className="bg-gray-50 p-2 rounded w-full h-32 resize-none"
      ></textarea>
    </>
  );
}

export default function Form() {
  return (
    <>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4 w-full m-auto p-2 lg:p-8"
      >
        <h2 className="text-gray-500 text-4xl mb-4">Contact Us</h2>

        <Input name="name" title="Name" type={"text"} />
        <Input name="phone" title="Phone Number" type="tel" />
        <Input name="email" title="Email" type="email" />
        <Input name="interest" title="Interested In" type={"text"} />
        <TextArea name="message" title="Message" />
        {/* <ButtonDark label={"Send Email"} /> */}
      </form>
    </>
  );
}
