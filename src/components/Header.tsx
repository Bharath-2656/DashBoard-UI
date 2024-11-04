import React, { useState } from "react";
import {
  Flex,
  Input,
  Button,
  Text,
  AvatarRoot,
  AvatarImage,
  Image,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "../assets/Icons/Search";
import AddTaskModal from "./AddTaskModal";
import Profile from "@/assets/profile.png";
import Bell from "@/assets/Bell.png";
import ProTrack from "@/assets/ProTrack.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      justify="space-between"
      w="100vw"
      h="8vh"
      p="4"
      bg="white"
      boxShadow="md"
      style={{
        backgroundImage: "linear-gradient(to right, #4318FF60, #FEC6DF)",
      }}
    >
      <Box display={"flex"} flexDir={"row"}>
        <Image src={ProTrack} boxSize="6" mr={4} borderRadius="md" />
        <Text fontSize="xl" fontWeight="bold" mb="8" color="purple.500">
          Protrack
        </Text>
      </Box>
      <Flex
        marginRight={100}
        justifyContent={"flex-start"}
        backgroundColor="white"
        w="33%"
        borderRadius="12px"
      >
        <SearchIcon style={{ height: "auto", marginLeft: "3%" }} />
        <Input
          placeholder="Search"
          borderRadius="12px"
          h="33px"
          backgroundColor={"white"}
          border={"none"}
        />
      </Flex>
      <Flex align="center">
        <Button
          backgroundColor="#49CCF9"
          mr="4"
          onClick={() => setIsOpen(true)}
        >
          + Add Tasks
        </Button>
        <Image src={Bell} boxSize="6" borderRadius="md" mr="2" />
        <AvatarRoot>
          <AvatarImage src={Profile} borderRadius={0} />
        </AvatarRoot>
        {isOpen && <AddTaskModal setOpen={setIsOpen} />}
      </Flex>
    </Flex>
  );
};

export default Header;
