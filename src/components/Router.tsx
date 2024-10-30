// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "@/Screens/DashBoard";
import TasksForTheDay from "./TasksforTheDay";
import InfoCard from "./InfoCard";
import NotesSection from "@/Screens/NotesSection";
import Calender from "./Calender";
import { Box } from "@chakra-ui/react";

const Router: React.FC = () => {
  return (
    <Box w={"100vw"} h="100vh">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={DashBoard} />
          <Route path="/home" Component={InfoCard} />
          <Route path="/calender" Component={Calender} />
          <Route path="/tasks" Component={TasksForTheDay} />
          <Route path="/notes" Component={NotesSection} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default Router;
