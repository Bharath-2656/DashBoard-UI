import React, { useMemo, useRef, useState } from "react";
import { Box, Text, IconButton, VStack } from "@chakra-ui/react";
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";
import { PlusIcon } from "../assets/Icons/PlusIcon";
import { RightArrowIcon } from "../assets/Icons/RightArrowIcon";
import { useAppSelector } from "@/store/store";

const TasksForTheDay: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const tasks = useAppSelector((state) => state.taskConfig.taskList);
  const handleScrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 300, behavior: "smooth" });
    }
  };

  const getBgColor = useMemo(() => {
    if (window.location.pathname === "/") return "white";
    else if (window.location.pathname === "/tasks")
      return "linear-gradient(to bottom, #4318FF25, #FEC6DF)";
  }, [window.location.pathname]);

  return (
    <Box p="6" bg="gray.50" h="100%" overflow={"hidden"} bgImage={getBgColor}>
      <Box display="flex" justifyContent="space-between" mb="4">
        <Text fontSize="xl" fontWeight="bold">
          Tasks for the day
        </Text>
        <Box>
          <IconButton w="36px" h="36px" mr="2" onClick={() => setOpen(true)}>
            <PlusIcon
              width="36px"
              height="36px"
              borderRadius={"12px"}
              aria-label="Add Task"
            />
          </IconButton>
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
      <VStack
        transition="all 0.3s ease"
        _hover={{
          transform: "scale(1.05)",
        }}
        ref={scrollRef}
        maxHeight="90%"
        overflowY="auto"
      >
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            indexValue={index}
            title={task.taskName}
            subTasks={task.subTasks}
            tags={task.tags}
            completed={
              task.subTasks.filter((subTask) => subTask.isCompleted).length
            }
            total={task.subTasks.length}
          />
        ))}
      </VStack>
      {isOpen && <AddTaskModal setOpen={setOpen} />}
    </Box>
  );
};

export default TasksForTheDay;
