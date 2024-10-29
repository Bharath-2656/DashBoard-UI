import React from "react";
import { Box, Text, HStack, IconButton, Grid, Flex } from "@chakra-ui/react";
import DateItem from "./DateItem";
import StatusCard from "./StatusCard";
import { RightArrowIcon } from "../assets/Icons/RightArrowIcon";
import TasksForTheDay from "./TasksforTheDay";

const Calendar: React.FC = () => {
  return (
    <Flex
      flexDirection={"column"}
      position={"relative"}
      h="92vh"
      right={"0"}
      w="30vw"
    >
      <Box p="6">
        <HStack justifyContent="space-between" mb="4">
          <Text fontSize="xl" fontWeight="bold">
            Calender
          </Text>
          <IconButton
            aria-label="Next"
            size="sm"
            bg="white"
            color="blue.400"
            borderRadius="full"
            boxShadow="md"
            _hover={{ bg: "blue.50" }}
          >
            <RightArrowIcon />
          </IconButton>
        </HStack>

        <HStack mb="6">
          {[
            { day: "Sun", date: 19, active: false },
            { day: "Mon", date: 20, active: false },
            { day: "Tue", date: 21, active: true },
            { day: "Wed", date: 22, active: false },
            { day: "Thu", date: 23, active: false },
            { day: "Sat", date: 24, active: false },
            { day: "Sun", date: 25, active: false },
          ].map((date, index) => (
            <DateItem
              key={index}
              day={date.day}
              date={date.date}
              active={date.active}
            />
          ))}
        </HStack>

        <Grid templateColumns="repeat(3, 1fr)" gap="4">
          <StatusCard label="To-Do" count={20} color="blue.400" bg="blue.50" />
          <StatusCard
            label="In-Progress"
            count={15}
            color="purple.400"
            bg="purple.50"
          />
          <StatusCard
            label="Complete"
            count={3}
            color="green.400"
            bg="green.50"
          />
        </Grid>
      </Box>
      <TasksForTheDay />
    </Flex>
  );
};

export default Calendar;
