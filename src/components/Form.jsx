export default function Form() {
  return (
    <form className="w-full tablet-xs:w-[80%] text-sm laptop:text-base flex items-center justify-center flex-col space-y-2 text-platinium">
      <input
        className="border border-strong-green/20 w-full px-4 py-3 outline-none font-clash-grotesk"
        placeholder="Name"
        type="text"
      />
      <input
        className="border border-strong-green/20 w-full px-4 py-3 outline-none font-clash-grotesk"
        placeholder="Email"
        type="email"
      />
      <input
        className="border border-strong-green/20 w-full px-4 py-3 outline-none font-clash-grotesk"
        placeholder="Phone Number"
        type="tel"
        maxLength={10}
      />
      <textarea
        className="border border-strong-green/20 w-full px-4 py-3 outline-none font-clash-grotesk resize-none h-40"
        placeholder="Message"
        maxLength={10}
      />
      <div className="w-full flex items-center justify-start py-4">
        <button className="w-full laptop:w-[50%] py-2 border border-strong-green cursor-pointer bg-strong-green text-black font-medium text-lg hover:bg-strong-green/10 hover:text-strong-green duration-300">
          Send it
        </button>
      </div>
    </form>
  );
}
