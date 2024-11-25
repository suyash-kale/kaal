import { FC } from "react";
import Image from "next/image";

import Logo from "@/assets/logo.png";
import { PrivateRoute } from "@/components/common/private-route";

const Home: FC = async () => {
  return (
    <PrivateRoute>
      <div className="flex h-screen justify-center items-center text-center">
        <div>
          <Image src={Logo} alt="Kaal Logo" width={200} height={63} />
          <p>That is time.</p>
          <div className="border-t my-2"></div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Home;
