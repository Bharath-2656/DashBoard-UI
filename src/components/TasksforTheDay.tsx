import React, { useRef } from "react";
import { Box, Text, IconButton, VStack, useDisclosure } from "@chakra-ui/react";
// import { AddIcon, ArrowDownIcon } from '@chakra-ui/icons';
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";
import { PlusIcon } from "../assets/Icons/PlusIcon";
import { RightArrowIcon } from "../assets/Icons/RightArrowIcon";

const TasksForTheDay: React.FC = () => {
  const { onOpen, onClose } = useDisclosure();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 300, behavior: "smooth" });
    }
  };

  return (
    <Box p="6" bg="gray.50" h="50vh" overflow={"hidden"}>
      <Box display="flex" justifyContent="space-between" mb="4">
        <Text fontSize="xl" fontWeight="bold">
          Tasks for the day
        </Text>
        <Box>
          <PlusIcon
            aria-label="Add Task"
            w="36px"
            h="36px"
            onClick={onOpen}
            mr="2"
          />
          <IconButton
            aria-label="Scroll Down"
            w="36px"
            h="36px"
            borderColor={"gray.300"}
            borderRadius={"12px"}
            onClick={handleScrollDown}
          >
            <RightArrowIcon />
          </IconButton>
        </Box>
      </Box>
      <VStack ref={scrollRef} maxHeight="400px" overflowY="auto">
        <TaskCard
          title="Donate Rs. 500 to the charity"
          subTasks={[
            "Donate Rs. 500 to the charity",
            "Donate Rs. 500 to the charity",
          ]}
          tags={["Donations", "Social"]}
          completed={2}
          total={2}
        />
        <TaskCard
          title="Do 500 pushups"
          subTasks={["Start with 100", "Complete 250", "Reach 400"]}
          tags={["Sport", "Selfcare"]}
          completed={1}
          total={3}
        />
        <TaskCard
          title="Buy new headset"
          tags={["Shopping", "Set-up"]}
          completed={1}
          total={1}
        />
        <TaskCard
          title="Clean the room"
          tags={["Selfcare"]}
          completed={0}
          total={1}
        />
      </VStack>
      <AddTaskModal onClose={onClose} />
    </Box>
  );
};

export default TasksForTheDay;
