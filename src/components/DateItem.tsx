import React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";

interface DateItemProps {
  day: string;
  date: number;
  active?: boolean;
}

const DateItem: React.FC<DateItemProps> = ({ day, date, active = false }) => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        w={active ? "100%" : "80%"}
        transition="all 0.3s ease"
        _hover={{
          transform: "scale(1.2)",
        }}
      >
        <VStack>
          <Box
            bg={active ? "pink.400" : "#FEC6DF"}
            borderTopRadius="md"
            w={"100%"}
          >
            <p style={{ visibility: "hidden" }}>{date}</p>
          </Box>
        </VStack>
        <VStack
          p={"2"}
          borderBottomRadius="md"
          bg={"white"}
          color={active ? "pink.600" : "gray.700"}
          boxShadow={active ? "md" : "sm"}
          borderWidth="1px"
          h={active ? "80px" : "60px"}
          borderColor={active ? "pink.200" : "gray.200"}
        >
          <Text fontSize={active ? "medium" : "sm"} fontWeight={"bold"}>
            {date}
          </Text>
          <Text fontSize={active ? "md" : "xs"} color="gray.500">
            {day}
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default DateItem;
