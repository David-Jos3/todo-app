import banner from "../assets/images/bg-desktop-dark.jpg";
import Content from "./Content";

export default function Banner() {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
  };

  return (
    <div
      className="bg-cover bg-center  w-screen h-96 flex justify-center"
      style={bannerStyle}
    >
      <Content />
    </div>
  );
}
