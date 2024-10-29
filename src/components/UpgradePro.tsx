import React from "react";
import { Image } from "@chakra-ui/react";
import myImage from "../assets/Icons/UpgradePro.png";

export const UpgradePro: React.FC = () => {
  return (
    <Image
      src={myImage}
      alt="Description of the image"
      borderRadius="md"
      // boxShadow="lg"
    />
  );
};
