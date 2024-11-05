import React from "react";
import { Text, VStack } from "@chakra-ui/react";

interface StatusCardProps {
  label: string;
  count: string;
  color: string;
  bg: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ label, count, color, bg }) => {
  return (
    <VStack
      transition="all 0.3s ease"
      _hover={{
        transform: "scale(1.2)",
      }}
      p="2"
      h={"100%"}
      borderRadius="md"
      minW="fit-content"
      bg={bg}
      borderWidth="1px"
      borderColor={color}
      justifyContent={"left"}
      alignItems="left"
    >
      <Text
        justifyContent={"left"}
        fontSize="sm"
        color={color}
        fontWeight="bold"
      >
        {label}
      </Text>
      <Text
        justifyContent={"left"}
        fontSize="2xl"
        color={color}
        fontWeight="bold"
      >
        {count}
      </Text>
    </VStack>
  );
};

export default StatusCard;
