import bannerDark from "../assets/images/bg-desktop-dark.jpg";
import bannerLight from "../assets/images/bg-desktop-light.jpg";
import Content from "./Content";
import { useState } from "react";

export default function Banner() {
  const [bannerMode, setBannerMode] = useState<boolean>(false);

  const handleBannerMode = (mode: boolean) => {
    setBannerMode(mode);
  };

  const bannerStyle = {
    backgroundImage: `url(${bannerMode ? bannerLight : bannerDark})`,
    minHeight: "400px",
  };

  return (
    <div
      className="bg-cover bg-center relative  w-full h-96 flex justify-center"
      style={bannerStyle}
    >
      <Content handleBanner={handleBannerMode} />
    </div>
  );
}
