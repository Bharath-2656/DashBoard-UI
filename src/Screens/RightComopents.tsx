import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import TasksForTheDay from "../components/TasksforTheDay";
import Calender from "@/components/Calender";

const RightComoponents: React.FC = () => {
  return (
    <Flex flexDirection={"column"} position={"relative"} h="92vh" right={"0"}>
      <Box h="38vh">
        <Calender />
      </Box>
      <Box h="50vh">
        <TasksForTheDay />
      </Box>
    </Flex>
  );
};

export default RightComoponents;
