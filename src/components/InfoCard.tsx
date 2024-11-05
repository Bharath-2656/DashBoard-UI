import React, { useMemo } from "react";
import { Box, Text, HStack, Button, VStack, Flex } from "@chakra-ui/react";
import Graph from "../assets/Icons/Graph";
import { BookIcon } from "@/assets/Icons/BookIcon";
import { Link } from "react-router-dom";
import { PlaneTickIcon } from "@/assets/Icons/PlaneTickIcon";

const InfoCard: React.FC = () => {
  const getBgColor = useMemo(() => {
    if (window.location.pathname === "/") return "white";
    else if (window.location.pathname === "/home")
      return "linear-gradient(to bottom, #4318FF25, #FEC6DF)";
  }, [window.location.pathname]);

  return (
    <Box
      mb="4"
      p="6"
      bg="white"
      borderRadius="md"
      boxShadow="sm"
      w={"100%"}
      h={"100%"}
      style={{
        backgroundImage: getBgColor,
      }}
    >
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
              <PlaneTickIcon />
              <Text fontSize="md" fontWeight="bold">
                On track
              </Text>
            </HStack>
            <Link to="/tasks">
              <Button
                transition="all 0.3s ease"
                _hover={{
                  transform: "scale(1.05)",
                }}
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
            </Link>
          </VStack>
        </Box>
        <Graph />
      </Flex>
    </Box>
  );
};

export default InfoCard;
