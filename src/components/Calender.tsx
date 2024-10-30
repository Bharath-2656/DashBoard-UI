import React, { useEffect, useMemo, useState } from "react";
import { Box, Text, HStack, IconButton, Grid } from "@chakra-ui/react";
import DateItem from "../components/DateItem";
import StatusCard from "../components/StatusCard";
import { RightArrowIcon } from "../assets/Icons/RightArrowIcon";
import { generateCalendarMap } from "@/utils/common.utils";

const Calender: React.FC = () => {
  const [weekMap, setWeekMap] = useState([
    { day: "Sun", date: 1, active: false },
  ]);
  const [date, setDate] = useState(new Date());
  const getBgColor = useMemo(() => {
    if (window.location.pathname === "/") return "white";
    else if (window.location.pathname === "/calender")
      return "linear-gradient(to bottom, #4318FF25, #FEC6DF)";
  }, [window.location.pathname]);

  useEffect(() => {
    setWeekMap(generateCalendarMap(new Date()));
  }, []);

  const handleDateChange = (type: string) => {
    if (type === "left") {
      setDate(new Date(date.setDate(date.getDate() - 7)));
      setWeekMap(generateCalendarMap(date));
    } else if (type === "right") {
      setDate(new Date(date.setDate(date.getDate() + 7)));
      setWeekMap(generateCalendarMap(date));
    }
  };

  return (
    <Box p="6" w={"100%"} style={{ backgroundImage: getBgColor }} h={"100%"}>
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
          onClick={() => handleDateChange("right")}
        >
          <RightArrowIcon />
        </IconButton>
      </HStack>

      <HStack mb="6" w="100%">
        {weekMap.map((date, index) => (
          <DateItem
            key={index}
            day={date.day}
            date={date.date}
            active={date.active}
          />
        ))}
      </HStack>

      <Grid templateColumns="repeat(3, 1fr)" gap="4">
        <StatusCard label="To-Do" count={"20"} color="blue.400" bg="blue.50" />
        <StatusCard
          label="In-Progress"
          count={"15"}
          color="purple.400"
          bg="purple.50"
        />
        <StatusCard
          label="Complete"
          count={"03"}
          color="green.400"
          bg="green.50"
        />
      </Grid>
    </Box>
  );
};

export default Calender;
