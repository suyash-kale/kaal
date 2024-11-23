import { FC } from "react";
import Image from "next/image";

import { Auth } from "@/components/auth";

const Home: FC = async () => {
  return (
    <div className="flex h-screen justify-center items-center text-center">
      <div>
        <Image src="/logo.jpg" alt="Globe icon" width={200} height={63} />
        <p>That is time.</p>
        <div className="border-t my-2"></div>
        <Auth />
      </div>
    </div>
  );
};

export default Home;
