import React from "react";
import { Box, VStack, Button, Icon } from "@chakra-ui/react";
import { CategriesIcon } from "../assets/Icons/Categories";
import { CalenderIcon } from "../assets/Icons/Calender";
import { ActivityIcon } from "../assets/Icons/Activity";
import { FolderIcon } from "../assets/Icons/Folder";
import UserProfileCard from "./UserProfileCard";
import { UpgradePro } from "./UpgradePro";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <Box
      w="15vw"
      p="4"
      position={"relative"}
      boxShadow="md"
      h="92vh"
      display={"flex"}
      flexDirection={"column"}
      gapY={"19%"}
      style={{}}
    >
      <VStack align="flex-start">
        <Button
          variant="ghost"
          colorScheme="#56555C"
          bg={"#49CCF9"}
          w={"100%"}
          justifyContent={"left"}
        >
          <Link to="/home" style={{ color: "#56555C" }}>
            <Icon fontSize="16px" color="red.500">
              {<CategriesIcon />}
            </Icon>
            Home
          </Link>
        </Button>
        <Button variant="ghost">
          <Link to="/calender" style={{ color: "#56555C" }}>
            <Icon fontSize="16px" color="blue.500">
              {<CalenderIcon />}
            </Icon>
            Calender
          </Link>
        </Button>
        <Button variant="ghost">
          <Link to="/tasks" style={{ color: "#56555C" }}>
            <Icon fontSize="16px" color="blue.500">
              {<ActivityIcon />}
            </Icon>
            Tasks
          </Link>
        </Button>
        <Button variant="ghost">
          <Link to="/notes" style={{ color: "#56555C" }}>
            <Icon fontSize="16px" color="blue.500">
              {<FolderIcon />}
            </Icon>
            Notes
          </Link>
        </Button>
      </VStack>
      <Box display="flex" justifyContent="center" alignItems="center">
        <UpgradePro />
      </Box>
      <UserProfileCard />
    </Box>
  );
};

export default Sidebar;
