import React from "react";
import { Box, VStack, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box w="200px" bg="blue.500" p={5} color="white">
      <VStack align="stretch">
        <Text mb="2">Home</Text>
        <Text mb="2">About</Text>
        <Text mb="2">Contact</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;
