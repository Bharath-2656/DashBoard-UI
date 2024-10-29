import React from "react";
import { Box, Text, HStack, Button, VStack, Flex } from "@chakra-ui/react";
import NotesSection from "./NotesSection";
import Graph from "../assets/Icons/Graph";
import { BookIcon } from "@/assets/Icons/BookIcon";
import { TickIcon } from "@/assets/Icons/TickIcon";

const DashboardContent: React.FC = () => {
  return (
    <Box p="6" position={"relative"} h="92vh" w="55vw">
      {/* Weekly Overview */}
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
        <Box mb="8" p="6" bg="white" borderRadius="md" boxShadow="sm">
          <Text fontSize="lg" fontWeight="bold">
            Weekly Overview
          </Text>
          <Flex flexDirection={"row"} w={"100%"}>
            <Box p={4} textAlign="center" w="200px">
              <VStack>
                <HStack>
                  <Text fontSize="3xl" fontWeight="bold">
                    20
                  </Text>
                  <Text fontSize="md" color="green.500" fontWeight="bold">
                    +2.45%
                  </Text>
                </HStack>
                <Text fontSize="sm" color="gray.500">
                  Tasks Completed
                </Text>
                <HStack align="center" color="green.500">
                  <TickIcon />
                  <Text fontSize="md" fontWeight="bold">
                    On track
                  </Text>
                </HStack>
                <Button
                  colorScheme="purple"
                  color={"#7B68EE"}
                  borderColor={"#7B68EE"}
                  bg={"white"}
                  fontSize={"xs"}
                  // variant="outline"
                  size="xs"
                  mt={4}
                >
                  <BookIcon />
                  Open Tasks
                </Button>
              </VStack>
            </Box>
            <Graph />
          </Flex>
        </Box>
        <NotesSection />
      </Box>
    </Box>
  );
};

export default DashboardContent;
