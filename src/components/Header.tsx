import React, { useState } from "react";
import { Flex, Input, Button, Text } from "@chakra-ui/react";
import { SearchIcon } from "../assets/Icons/Search";
import AddTaskModal from "./AddTaskModal";

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
        backgroundImage: "linear-gradient(to bottom, #4318FF25, #FEC6DF)",
      }}
    >
      <Text fontSize="xl" fontWeight="bold" mb="8" color="purple.500">
        Protrack
      </Text>
      <Flex backgroundColor="white" w="33%" borderRadius="12px">
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
        {/* <Avatar size="md" name="Dalton Smith" /> */}
        {isOpen && <AddTaskModal setOpen={setIsOpen} />}
      </Flex>
    </Flex>
  );
};

export default Header;
