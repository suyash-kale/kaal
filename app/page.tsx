import { FC } from "react";
import Image from "next/image";

const Home: FC = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div>
        <Image src="/logo.jpg" alt="Globe icon" width={200} height={63} />
        <p className="text-center">That is time.</p>
      </div>
    </div>
  );
};

export default Home;
