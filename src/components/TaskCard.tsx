// TaskCard.tsx
import React from "react";
import { Box, Text, VStack, HStack, IconButton } from "@chakra-ui/react";
import { EditIcon } from "../assets/Icons/EditIcon";
import { DeleteIcon } from "../assets/Icons/DeleteIcon";
import { ThreeDotsIcon } from "../assets/Icons/ThreeDotsIcon";
import CustomTag from "./CustomTag";
import CustomCheckbox from "./CustomCheckBoz";
import { deleteTask, ISubTask } from "@/store/taskSlice";
import { TagIcon } from "@/assets/Icons/TagIcon";
import { useAppDispatch } from "@/store/store";

interface TaskCardProps {
  indexValue: number;
  title: string;
  subTasks?: ISubTask[];
  tags: string[];
  completed: number;
  total: number;
}

const TaskCard: React.FC<TaskCardProps> = ({
  indexValue,
  title,
  subTasks = [],
  tags,
  completed,
  total,
}) => {
  const dispatch = useAppDispatch();
  return (
    <Box
      p="4"
      borderRadius="md"
      bg="white"
      boxShadow="sm"
      borderWidth="1px"
      w="100%"
      borderColor="gray.200"
    >
      <HStack justifyContent="space-between" mb={4}>
        <Text
          fontWeight="bold"
          fontSize={"sm"}
          color="#49CCF9"
          textDecoration={completed === total ? "line-through" : "none"}
        >
          {title}
        </Text>
        <Text fontSize="smaller" color="gray.500">
          {completed}/{total} Completed
        </Text>
      </HStack>
      <HStack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <VStack align="start" mt="2">
          {subTasks.map((task, index) => (
            <CustomCheckbox
              indexValue={indexValue}
              keyValue={index}
              key={index}
              isChecked={task.isCompleted}
              label={task.subTask}
            ></CustomCheckbox>
          ))}
        </VStack>
        <HStack mt="4" justifyContent="flex-end">
          <IconButton aria-label="Edit Task" size="sm" colorScheme="blue">
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="Delete Task"
            size="sm"
            colorScheme="red"
            onClick={() => {
              dispatch(deleteTask(indexValue));
            }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Settings" size="sm" colorScheme="gray">
            <ThreeDotsIcon />
          </IconButton>
        </HStack>
      </HStack>
      <HStack mt="2">
        <TagIcon />

        {tags.map((tag, index) => (
          <CustomTag
            label={tag}
            key={index}
            colorScheme={
              tag === "Donations"
                ? "yellow"
                : tag === "Social"
                  ? "green"
                  : "purple"
            }
          ></CustomTag>
        ))}
      </HStack>
    </Box>
  );
};

export default TaskCard;
