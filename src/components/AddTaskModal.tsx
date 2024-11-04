import React, { useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import CustomFormControl from "./CustomFormControl";
import CustomFormLabel from "./CustomFormLabel";
import { getRandomLightColorHex } from "@/utils/common.utils";
import { useAppDispatch } from "@/store/store";
import { setTasks } from "@/store/taskSlice";

type CustomModalProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const bg = getRandomLightColorHex();
const CustomModal: React.FC<CustomModalProps> = ({ setOpen }) => {
  const [taskHeading, setTaskHeading] = useState("");
  const [subTask, setSubTask] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [tagInput, setTagInput] = useState("");

  const handleAdd = (type: string) => {
    if (type === "subTask" && inputValue && !subTask.includes(inputValue)) {
      setSubTask([...subTask, inputValue]);
      setInputValue("");
    } else if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleRemove = (tagToRemove: string, type: string) => {
    if (type === "subTask") {
      setSubTask(subTask.filter((subTask) => subTask !== tagToRemove));
    } else {
      setTags(tags.filter((tag) => tag !== tagToRemove));
    }
  };

  const handleKeyPress = (e: { key: string }, type: string) => {
    if (e.key === "Enter") {
      handleAdd(type);
    }
    if (e.key === "Backspace") {
      handleRemove(tags.slice(-1)[0], type);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(
      setTasks({
        taskName: taskHeading,
        subTasks: subTask.map((subTask) => ({
          subTask: subTask,
          isCompleted: false,
        })),
        tags: tags,
      }),
    );
    setOpen(false);
  };

  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor="rgba(0, 0, 0, 0.5)" // Semi-transparent background
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex={1000} // Ensure it's on top
      >
        <Box
          background="white"
          borderRadius="md"
          boxShadow="lg"
          p={6}
          width="400px"
        >
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Box fontSize="xl" fontWeight="bold">
              Create a New Task
            </Box>
          </Flex>
          <form>
            <CustomFormControl error={undefined}>
              <CustomFormLabel label={"Task name"} htmlFor={"Name"} />
              <Input
                placeholder="Enter the task heading"
                value={taskHeading}
                onChange={(e) => setTaskHeading(e.target.value)}
              />
            </CustomFormControl>

            <CustomFormControl isRequired={true} error={undefined}>
              <CustomFormLabel label={"Sub task name"} htmlFor={"Name"} />
              <Box>
                <Flex alignItems="center" mb={4}>
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyUp={(e) => handleKeyPress(e, "subTask")}
                    placeholder="Add a sub task"
                  />
                  <Button
                    onClick={() => handleAdd("subTask")}
                    bg={"#49CCF9"}
                    ml={2}
                  >
                    Add
                  </Button>
                </Flex>
                <Flex>
                  {subTask.map((tag, index) => (
                    <Box
                      key={index}
                      display={"flex"}
                      flexDirection={"column"}
                      bg={bg}
                      borderRadius="18%"
                      mr={2}
                      p={2}
                      w={"fit-content"}
                    >
                      <Text>{tag}</Text>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </CustomFormControl>

            <Box>
              <Flex alignItems="center" mb={4}>
                <Input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyUp={(e) => handleKeyPress(e, "tag")}
                  placeholder="Add a tag"
                />
                <Button onClick={() => handleAdd("tag")} bg={"#49CCF9"} ml={2}>
                  Add
                </Button>
              </Flex>
              <Flex>
                {tags.map((tag, index) => (
                  <Box
                    key={index}
                    bg={bg}
                    borderRadius="18%"
                    mr={2}
                    p={2}
                    w={"fit-content"}
                  >
                    <Text>{tag}</Text>
                  </Box>
                ))}
              </Flex>
            </Box>

            <Flex justifyContent="flex-end">
              <Button
                colorScheme="teal"
                type="button"
                mr={3}
                bg={"#49CCF9"}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default CustomModal;
