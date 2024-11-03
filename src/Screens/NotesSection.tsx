import React, { useMemo, useRef } from "react";
import { Box, Text, IconButton, HStack } from "@chakra-ui/react";
import { RightArrowIcon } from "../assets/Icons/RightArrowIcon";
import { NoteCard } from "@/components/NoteCard";

const NotesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const container = scrollRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScrollLeft - scrollAmount) {
        // If it's close to the end, reset to the beginning
        container.scrollTo({
          left: 10,
          behavior: "instant",
        });
      } else {
        // Otherwise, scroll to the right by the specified amount
        container.scrollBy({
          left: container.scrollWidth / 2,
          behavior: "smooth",
        });
      }
    }
  };

  const getBgColor = useMemo(() => {
    if (window.location.pathname === "/") return "white";
    else if (window.location.pathname === "/notes")
      return "linear-gradient(to bottom, #4318FF25, #FEC6DF)";
  }, [window.location.pathname]);

  return (
    <Box
      p="6"
      borderRadius="md"
      ref={scrollRef}
      bg="gray.50"
      overflowX={"hidden"}
      boxShadow="sm"
      h={"100%"}
      w={"100%"}
      bgImage={getBgColor}
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
      <Box position="relative" w="100%">
        <HStack alignItems="flex-start" p="1" w="200%">
          <NoteCard
            title="Follow Up with Mr. Ashton"
            description="Following up on our meeting with Mr. Ashton, I wanted to recap the key points discussed and outline the action items moving forward. During the meeting, we touched upon the project timeline, budget considerations, and specific deliverables. Mr. Ashton expressed interest in exploring additional features for the software solution and requested a detailed proposal for review...."
            date="21 May, 2024"
            attachments={[
              {
                label: "Screenshot Information.png",
                image:
                  "https://s3-alpha-sig.figma.com/img/9058/88d1/5a1945661e91f1e9003a7b37bf8666c9?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TfHV84W5voQTbjJSr~p5lEpHWprB1pvfBUeokkB12XXOjS82ir5A3FnM776AtMuJhU1FZL~D8KZaYzNlDg--SRrFXXniXG-sa1JCnIge7bTZOa9oVqbinW~1d2ukq~DZhqGhIo~8vrEsmzI3fcI3MMkRr6-aaK9yEOrqp6-j~-6h-KFx9ztz1lcC9KP6VyD4pXQ7k17DUmxZ-u9nX1zN3XnvJAnx-uX84Xw-CONs~rACV4VtctIc5bTw4v2t1vFftBNxiOWcKUFfdLuF-e2Y3DQlvuufc6PR60JMP4fnyOnWGLjThQx0~FC2migu8DxCPWUCN4aGatpM3FynpzcLQA__",
              },
              {
                label: "Important Information.pdf",
                image:
                  "https://s3-alpha-sig.figma.com/img/5f38/463f/5feafe63b573de241a5e02c664abb69a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jXUAtgov3~tFiZG9itOUnl670LS1XNp3HZLD0Hdt9Jd3p6i31VysT2ytnlXRffLl8bDqF1OSNApAzEibzQqAQO-9I5A0DOqxvWX4hxr3sW0fmFSaMQyqRHfApurnx~LUToGaVnu7yLUpyye9uEYO2NVwv5kimYfYXPHvtLokgYFUnxzVL0IiQpGBNd4XrjzTKMbgyZUdt~OztHzWiY1RCXPeAcTZpeDnMG-1ucIYu2QpInOrEY8vgG22Dd8iW43D14IkLJFwZWGo7jrP5Pta2F8GC~Xit4IhTxU24w7kkkUlqYgFjOY3K9RyXg-1thDSzUq7wqIjLsu1dABPtK09QA__",
              },
            ]}
          />
          <NoteCard
            title="Follow Up with Mr. Ashton"
            description="Following up on our meeting with Mr. Ashton, I wanted to recap the key points discussed and outline the action items moving forward. During the meeting, we touched upon the project timeline, budget considerations, and specific deliverables. Mr. Ashton expressed interest in exploring additional features for the software solution and requested a detailed proposal for review...."
            date="21 May, 2024"
            attachments={[
              {
                label: "Screenshot Information.png",
                image:
                  "https://s3-alpha-sig.figma.com/img/9058/88d1/5a1945661e91f1e9003a7b37bf8666c9?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TfHV84W5voQTbjJSr~p5lEpHWprB1pvfBUeokkB12XXOjS82ir5A3FnM776AtMuJhU1FZL~D8KZaYzNlDg--SRrFXXniXG-sa1JCnIge7bTZOa9oVqbinW~1d2ukq~DZhqGhIo~8vrEsmzI3fcI3MMkRr6-aaK9yEOrqp6-j~-6h-KFx9ztz1lcC9KP6VyD4pXQ7k17DUmxZ-u9nX1zN3XnvJAnx-uX84Xw-CONs~rACV4VtctIc5bTw4v2t1vFftBNxiOWcKUFfdLuF-e2Y3DQlvuufc6PR60JMP4fnyOnWGLjThQx0~FC2migu8DxCPWUCN4aGatpM3FynpzcLQA__",
              },
              {
                label: "Important Information.pdf",
                image:
                  "https://s3-alpha-sig.figma.com/img/5f38/463f/5feafe63b573de241a5e02c664abb69a?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jXUAtgov3~tFiZG9itOUnl670LS1XNp3HZLD0Hdt9Jd3p6i31VysT2ytnlXRffLl8bDqF1OSNApAzEibzQqAQO-9I5A0DOqxvWX4hxr3sW0fmFSaMQyqRHfApurnx~LUToGaVnu7yLUpyye9uEYO2NVwv5kimYfYXPHvtLokgYFUnxzVL0IiQpGBNd4XrjzTKMbgyZUdt~OztHzWiY1RCXPeAcTZpeDnMG-1ucIYu2QpInOrEY8vgG22Dd8iW43D14IkLJFwZWGo7jrP5Pta2F8GC~Xit4IhTxU24w7kkkUlqYgFjOY3K9RyXg-1thDSzUq7wqIjLsu1dABPtK09QA__",
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
