import React from "react";
import { Flex, HStack, useBreakpointValue, VStack } from "@chakra-ui/react";
import DashboardContent from "@/components/DashBoardContent";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import RightComoponents from "@/Screens/RightComopents";

const DashBoard: React.FC = () => {
  const isSidebarVisible = useBreakpointValue({ base: false, md: true });

  return (
    <Flex h="100vh" bg="gray.50" flexDirection={"column"}>
      <HStack>
        <Header />
      </HStack>
      <HStack>
        <VStack display={"flex"} flexDirection={"row"} h="92vh">
          {isSidebarVisible && <Sidebar />}
          <DashboardContent />
          <RightComoponents />
        </VStack>
      </HStack>
    </Flex>
  );
};

export default DashBoard;
