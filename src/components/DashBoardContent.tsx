import React from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import InfoCard from "./InfoCard";
import NotesSection from "@/Screens/NotesSection";

const DashboardContent: React.FC = () => {
  return (
    <Box h="92vh">
      <Box>
        <HStack>
          <Text color={"#56555C"}>Welcome Back!</Text>
        </HStack>
        <HStack>
          <Text color={"#56555C"} fontWeight={"bold"} fontSize={"2xl"}>
            Dalton&#39;s Home
          </Text>
        </HStack>
      </Box>
      <Box w="100%" h="90%">
        <Box h="45%" mb="6">
          <InfoCard />
        </Box>
        <Box h="55%">
          <NotesSection />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardContent;
