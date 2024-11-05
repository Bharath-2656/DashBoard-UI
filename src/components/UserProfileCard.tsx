import React from "react";
import {
  Box,
  Text,
  HStack,
  IconButton,
  AvatarRoot,
  AvatarImage,
} from "@chakra-ui/react";
import { GearIcon } from "@/assets/Icons/GearIcon";
import Profile from "@/assets/profile.png";

const UserProfileCard: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      p={2}
      w="100%"
      border="1px"
      borderColor="gray.200"
    >
      <AvatarRoot>
        <Box position="relative" display="inline-block">
          <AvatarImage borderRadius={0} src={Profile} />
          <Box
            position="absolute"
            bottom="-2px"
            right="-4px"
            bg="green.400"
            border="2px solid white"
            borderRadius="2px"
            boxSize="16px"
          />
        </Box>
      </AvatarRoot>

      <Box ml={"1"} flex="1">
        <Text fontSize="xs" fontWeight="bold">
          Dalton Smith
        </Text>
        <Text fontSize="xs" color="gray.500">
          Free Account
        </Text>
      </Box>
      <HStack>
        <IconButton
          bg={"gray.200"}
          aria-label="Settings"
          variant="ghost"
          color="gray.500"
          size="sm"
        >
          <GearIcon />
        </IconButton>
      </HStack>
    </Box>
  );
};

export default UserProfileCard;
