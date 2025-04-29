export default function FooterCopyright() {
  return (
    <div className="bg-strong-green w-full px-6 py-4 flex items-center justify-center cursor-default">
      <div className="w-[90%] flex items-center justify-between">
        <h1 className="tracking-tight text-black font-medium">
          ©2025 Stallon Gym
        </h1>
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-black font-medium tracking-tight">
            Privacy Policy
          </h1>
          <h1 className="text-black font-medium tracking-tight">Cookies</h1>
        </div>
      </div>
    </div>
  );
}
