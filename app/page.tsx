import { FC } from "react";
import Image from "next/image";

import Logo from "@/assets/logo.jpg";

const Home: FC = async () => {
  return (
    <div className="flex h-screen justify-center items-center text-center">
      <div>
        <Image src={Logo} alt="Kaal Logo" width={200} height={63} />
        <p>That is time.</p>
        <div className="border-t my-2"></div>
      </div>
    </div>
  );
};

export default Home;
