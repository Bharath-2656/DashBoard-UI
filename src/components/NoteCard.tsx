import React from "react";
import { Box, Text, VStack, IconButton } from "@chakra-ui/react";
import { Attachment } from "./Attachment";
import { RightArrowIcon } from "../assets/Icons/RightArrowIcon";

interface AttachmentType {
  label: string;
  image: string;
}

interface NoteCardProps {
  title: string;
  description: string;
  date: string;
  attachments?: AttachmentType[];
}

export const NoteCard: React.FC<NoteCardProps> = ({
  title,
  description,
  date,
  attachments,
}) => {
  return (
    <Box
      p="4"
      w="33%"
      borderRadius="md"
      bg="white"
      boxShadow="sm"
      borderWidth="1px"
      borderColor="gray.200"
    >
      <Text fontWeight="semibold" fontSize="xs" mb="2">
        {title}
      </Text>
      <Text fontSize="12px" color="gray.600" whiteSpace="pre-line" mb="4">
        {description}
      </Text>
      {attachments && attachments.length > 0 && (
        <VStack align="start" mb="4">
          <Text fontWeight="bold" fontSize="sm">
            Attachments
          </Text>
          {attachments.map((attachment, index) => (
            <Attachment
              key={index}
              label={attachment.label}
              image={attachment.image}
            />
          ))}
        </VStack>
      )}
      <Box display="flex" justifyContent="end" alignItems="end">
        <Text fontSize="sm" color="gray.500">
          {date}
        </Text>
        <IconButton
          aria-label="View Note"
          size="sm"
          bg={"gray.100"}
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.05)",
            bg: "#c5c4cc",
          }}
        >
          <RightArrowIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
