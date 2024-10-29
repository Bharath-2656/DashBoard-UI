// Attachment.tsx
import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

interface AttachmentProps {
  label: string;
  image: string;
}

export const Attachment: React.FC<AttachmentProps> = ({ label, image }) => {
  return (
    <Box display="flex" alignItems="center">
      <Image src={image} boxSize="8" borderRadius="md" mr="2" />
      <Text fontSize="sm" color="gray.600">
        {label}
      </Text>
    </Box>
  );
};
