import React, { useRef } from "react";
import { Box, Text, IconButton, HStack } from "@chakra-ui/react";
import { NoteCard } from "./NoteCard";
import { RightArrowIcon } from "../assets/Icons/RightArrowIcon";

const NotesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const container = scrollRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      console.log(container.scrollLeft, "scroll left");
      console.log(maxScrollLeft, "maxScrollLeft");
      console.log(scrollAmount, "scrollAmount");
      if (container.scrollLeft >= maxScrollLeft - scrollAmount) {
        // If it's close to the end, reset to the beginning
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Otherwise, scroll to the right by the specified amount
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <Box
      p="6"
      borderRadius="md"
      ref={scrollRef}
      bg="gray.50"
      overflowX={"hidden"}
      boxShadow="sm"
      w={"100%"}
      h="50%"
    >
      <HStack>
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Notes
        </Text>
        <IconButton
          aria-label="Scroll Right"
          position="absolute"
          right="10%"
          onClick={() => scroll()}
          bg="white"
          boxShadow="md"
          _hover={{ bg: "gray.100" }}
        >
          <RightArrowIcon />
        </IconButton>
      </HStack>
      <Box position="relative">
        <HStack alignItems="flex-start" p="1" w="100vw">
          <NoteCard
            title="Follow Up with Mr. Ashton"
            description="Following up on our meeting with Mr. Ashton, I wanted to recap the key points discussed and outline the action items moving forward. During the meeting, we touched upon the project timeline, budget considerations, and specific deliverables. Mr. Ashton expressed interest in exploring additional features for the software solution and requested a detailed proposal for review...."
            date="21 May, 2024"
            attachments={[
              {
                label: "Screenshot Information.png",
                image: "https://via.placeholder.com/100",
              },
              {
                label: "Important Information.pdf",
                image: "https://via.placeholder.com/100",
              },
            ]}
          />
          <NoteCard
            title="Setlist for hackathon"
            description="- Project Timeline\n- Budget Considerations\n- Specific Deliverables\n- Additional Features for Software Solution\n- Detailed Proposal for Review\n- Prepare the PPT\n- Review by Ravi\n- GD\n- The Grand Finale"
            date="21 May, 2024"
          />
          <NoteCard
            title="Auroras and Sad Prose"
            description="Tears fall like rain on a lonely street\nHeart heavy with sorrow, no solace to meet\nMemories of joy now turned to dust\nIn the shadows of sadness, I place my trust\n\nEach note a reminder of what used to be\nA melody of pain, a symphony for me\nLost in the darkness, searching for light\nA song of sadness, sung through the night\n\nEchoes of laughter, now silent and still\nA heartache so deep, an endless chill\nDreams shattered like glass on the floor\nIn the silence of sadness, I long for more..."
            date="21 May, 2024"
          />
          <NoteCard
            title="Auroras and Sad Prose"
            description="Tears fall like rain on a lonely street\nHeart heavy with sorrow, no solace to meet\nMemories of joy now turned to dust\nIn the shadows of sadness, I place my trust\n\nEach note a reminder of what used to be\nA melody of pain, a symphony for me\nLost in the darkness, searching for light\nA song of sadness, sung through the night\n\nEchoes of laughter, now silent and still\nA heartache so deep, an endless chill\nDreams shattered like glass on the floor\nIn the silence of sadness, I long for more..."
            date="21 May, 2024"
          />
          <NoteCard
            title="Auroras and Sad Prose"
            description="Tears fall like rain on a lonely street\nHeart heavy with sorrow, no solace to meet\nMemories of joy now turned to dust\nIn the shadows of sadness, I place my trust\n\nEach note a reminder of what used to be\nA melody of pain, a symphony for me\nLost in the darkness, searching for light\nA song of sadness, sung through the night\n\nEchoes of laughter, now silent and still\nA heartache so deep, an endless chill\nDreams shattered like glass on the floor\nIn the silence of sadness, I long for more..."
            date="21 May, 2024"
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default NotesSection;
