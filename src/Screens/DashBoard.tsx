import React from "react";
import {
  Box,
  Flex,
  HStack,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
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
      <VStack>
        <HStack h="92vh" w="100%">
          {isSidebarVisible && <Sidebar />}
          <Box
            p="6"
            position={"relative"}
            w={isSidebarVisible ? "55vw" : "90vw"}
          >
            <DashboardContent />
          </Box>
          {isSidebarVisible && (
            <Box w="30vw">
              <RightComoponents />
            </Box>
          )}
        </HStack>
        <VStack>{!isSidebarVisible && <RightComoponents />}</VStack>
      </VStack>
    </Flex>
  );
};

export default DashBoard;
