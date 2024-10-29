import React from "react";
import { Box, VStack, Button, Icon } from "@chakra-ui/react";
import { CategriesIcon } from "../assets/Icons/Categories";
import { CalenderIcon } from "../assets/Icons/Calender";
import { ActivityIcon } from "../assets/Icons/Activity";
import { FolderIcon } from "../assets/Icons/Folder";
import UserProfileCard from "./UserProfileCard";
import { UpgradePro } from "./UpgradePro";

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
        <Button variant="ghost" colorScheme="blue">
          <Icon fontSize="16px" color="red.500">
            {<CategriesIcon />}
          </Icon>
          Home
        </Button>
        <Button variant="ghost">
          <Icon fontSize="16px" color="blue.500">
            {<CalenderIcon />}
          </Icon>
          Calender
        </Button>
        <Button variant="ghost">
          <Icon fontSize="16px" color="blue.500">
            {<ActivityIcon />}
          </Icon>
          Tasks
        </Button>
        <Button variant="ghost">
          <Icon fontSize="16px" color="blue.500">
            {<FolderIcon />}
          </Icon>
          Notes
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
