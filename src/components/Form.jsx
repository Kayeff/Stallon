import { twMerge } from "tailwind-merge";
import Button from "./Button";

function Input({ type, id, placeholder, txtarea, colspan2, ...props }) {
  return (
    <div
      className={twMerge(
        "w-full flex flex-col gap-1",
        colspan2 && "col-span-2"
      )}
    >
      {txtarea ? (
        <textarea
          className="border border-strong-green/20 w-full p-4 outline-none resize-none h-40 rounded-md"
          placeholder={placeholder}
          maxLength={10}
          id={id}
          name={id}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          required
          className="border border-strong-green/20 w-full p-4 outline-none rounded-md"
          placeholder={placeholder}
          {...props}
        />
      )}
    </div>
  );
}

export default function Form() {
  return (
    <form className="w-full tracking-tight grid grid-cols-2 gap-4">
      <Input colspan2 placeholder="Full name" type="text" id="user-full-name" />
      <Input placeholder="Email" type="email" id="email" />
      <Input placeholder="Phone" type="tel" id="phone" maxLength={10} />
      <Input colspan2 txtarea placeholder="What's your query?" id="message" />
      <div className="w-full flex items-center justify-start col-span-2">
        <Button
          text="Send it"
          className="border border-strong-green cursor-pointer bg-strong-green text-black font-medium hover:bg-strong-green/10 hover:text-strong-green w-1/2 flex items-center justify-center rounded-lg"
        />
      </div>
    </form>
  );
}
