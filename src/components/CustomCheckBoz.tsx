import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { useAppDispatch } from "@/store/store";
import { updateSubTaskCompletion } from "@/store/taskSlice";

interface CustomCheckboxProps {
  indexValue: number;
  keyValue: number;
  isChecked?: boolean;
  label: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  indexValue,
  keyValue,
  isChecked = false,
  label,
}) => {
  const dispatch = useAppDispatch();

  const toggleCheckbox = () => {
    dispatch(
      updateSubTaskCompletion({
        taskIndex: indexValue,
        subTaskIndex: keyValue,
        isCompleted: true,
      }),
    );
  };

  return (
    <Flex align="center" cursor="pointer" onClick={toggleCheckbox}>
      <Box
        w="4"
        h="4"
        borderWidth="2px"
        borderRadius="md"
        borderColor="blue.500"
        bg={isChecked ? "blue.500" : "transparent"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mr="2"
      >
        {isChecked && <Box w="2" h="2" bg="white" borderRadius="full" />}
      </Box>
      <Text
        fontSize="sm"
        color="gray.700"
        textDecoration={isChecked ? "line-through" : "none"}
      >
        {label}
      </Text>
    </Flex>
  );
};

export default CustomCheckbox;
