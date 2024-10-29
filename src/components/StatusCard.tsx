import React from "react";
import { Text, VStack } from "@chakra-ui/react";

interface StatusCardProps {
  label: string;
  count: number;
  color: string;
  bg: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ label, count, color, bg }) => {
  return (
    <VStack
      p="2"
      h={"80px"}
      borderRadius="md"
     minW="fit-content"
      bg={bg}
      borderWidth="1px"
      borderColor={color}
      alignItems="center"
    >
      <Text fontSize="sm" color={color} fontWeight="bold">
        {label}
      </Text>
      <Text fontSize="2xl" color={color} fontWeight="bold">
        {count}
      </Text>
    </VStack>
  );
};

export default StatusCard;
