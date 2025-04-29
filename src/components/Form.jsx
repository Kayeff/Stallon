import { twMerge } from "tailwind-merge";
import Button from "./Button";

function Input({ type, label, id, placeholder, txtarea, ...props }) {
  return (
    <div
      className={twMerge("w-full flex flex-col gap-1", txtarea && "col-span-2")}
    >
      <label htmlFor={id}>{label}</label>
      {txtarea ? (
        <textarea
          className="border border-strong-green/20 w-full p-3 outline-none resize-none h-40 rounded-md"
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
          className="border border-strong-green/20 w-full p-3 outline-none rounded-md"
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
      <Input
        label="First name"
        type="text"
        placeholder="Enter your first name.."
        id="user-first-name"
      />
      <Input
        label="Last name"
        type="text"
        placeholder="Enter your last name.."
        id="user-last-name"
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email.."
        id="email"
      />
      <Input
        label="Phone Number"
        type="tel"
        placeholder="Enter your phone.."
        id="phone"
        maxLength={10}
      />
      <Input
        txtarea
        label="Your Message"
        id="message"
        placeholder="Enter your message here..."
      />
      <div className="w-full flex items-center justify-start col-span-2">
        <Button
          text="Send it"
          className="border border-strong-green cursor-pointer bg-strong-green text-black font-medium hover:bg-strong-green/10 hover:text-strong-green w-1/2 flex items-center justify-center rounded-full"
        />
      </div>
    </form>
  );
}
