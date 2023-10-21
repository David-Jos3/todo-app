import bannerDark from "../assets/images/bg-desktop-dark.jpg";
import bannerLight from "../assets/images/bg-desktop-light.jpg";
import Content from "./Content";
import { useState } from "react";

interface Prop {
  themeBg: (themeBg: boolean) => void;
}

export default function Banner({ themeBg }: Prop) {
  const [bannerMode, setBannerMode] = useState<boolean>(false);

  const handleBannerMode = (mode: boolean) => {
    setBannerMode(mode);
    themeBg(mode);
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
