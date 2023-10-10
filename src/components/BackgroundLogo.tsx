import Image from "../assets/images/bg-desktop-dark.jpg";

export default function BackgroundLogo() {
  return (
    <div className="flex items-start justify-items-start h-screen">
      <img className="w-full" src={Image} alt="Background" />
    </div>
  );
}
