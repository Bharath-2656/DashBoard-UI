// CustomTag.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface CustomTagProps {
  label: string;
  colorScheme?: string;
  bgColor?: string;
  textColor?: string;
}

const CustomTag: React.FC<CustomTagProps> = ({ label, colorScheme = 'gray', bgColor, textColor }) => {
  return (
    <Box
      display="inline-block"
      px="2"
      py="1"
      borderRadius="md"
      bg={bgColor || `${colorScheme}.100`}
      color={textColor || `${colorScheme}.700`}
      fontSize="sm"
      fontWeight="bold"
    >
      <Text>{label}</Text>
    </Box>
  );
};

export default CustomTag;
