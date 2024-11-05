import React from "react";
import { Image } from "@chakra-ui/react";
import GraphImage from "../Graph.png";

const Graph: React.FC = () => {
  return (
    <Image
      src={GraphImage}
      alt="Description of the image"
      position={"relative"}
      w={"69%"}
      left="1%"
      borderRadius="md"
      // boxShadow="lg"
    />
  );
};

export default Graph;
