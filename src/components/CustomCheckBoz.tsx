// CustomCheckbox.tsx
import React, { useState } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

interface CustomCheckboxProps {
  label: string;
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, isChecked = false, onChange }) => {
  const [checked, setChecked] = useState(isChecked);

  const toggleCheckbox = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);
    isChecked = !isChecked;
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <Flex align="center" cursor="pointer" onClick={toggleCheckbox}>
      <Box
        w="4"
        h="4"
        borderWidth="2px"
        borderRadius="md"
        borderColor="blue.500"
        bg={checked ? 'blue.500' : 'transparent'}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mr="2"
      >
        {checked && (
          <Box w="2" h="2" bg="white" borderRadius="full" />
        )}
      </Box>
      <Text fontSize="sm" color="gray.700" textDecoration={checked ? 'line-through' : 'none'}>
        {label}
      </Text>
    </Flex>
  );
};

export default CustomCheckbox;
