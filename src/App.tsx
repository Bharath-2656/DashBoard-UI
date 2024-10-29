import React from "react";
import { Flex, HStack, VStack } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardContent from "./components/DashBoardContent";
import Calender from "./components/Calender";

const App: React.FC = () => {
  return (
    <Flex h="100vh" bg="gray.50" flexDirection={"column"}>
      <HStack>
        <Header />
      </HStack>
      <HStack>
        <VStack display={"flex"} flexDirection={"row"} h='92vh'>
          <Sidebar />
          <DashboardContent />
          <Calender />
        </VStack>
      </HStack>
    </Flex>
  );
};

export default App;
