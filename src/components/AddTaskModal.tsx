import React from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogBody,
  DialogCloseTrigger,
  Button,
  Input,
  VStack,
  DialogRoot,
} from '@chakra-ui/react';

interface AddTaskModalProps {
  onClose: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({  onClose }) => {
  return (
    <DialogRoot>
      <DialogBackdrop />
      <DialogContent>
        <DialogHeader>Add New Task</DialogHeader>
        <DialogCloseTrigger />
        <DialogBody>
          <VStack>
            <Input placeholder="Task Title" />
            <Input placeholder="Add Subtask" />
            <Input placeholder="Tags (comma-separated)" />
          </VStack>
        </DialogBody>

        <DialogFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};

export default AddTaskModal;
