import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

import minionBackground from "assets/minion.png";

const Home = () => {
  return (
    <Flex
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"10vw"}
      wrap={"wrap"}
      sx={{ height: "100vh" }}
    >
      <Box>
        <img
          src={minionBackground}
          alt="background"
          style={{ width: 300, height: 300 }}
        />
        <Box>
          <Heading>Welcome to MinionURL</Heading>
          <Text>Easy and fuss-free URL shortener</Text>
        </Box>
      </Box>
      <Box
        sx={{
          bgColor: "rgb(255, 255, 255, 0.1)",
          borderRadius: 16,
          padding: 10,
          minWidth: "30vw",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <FormControl>
          <FormLabel htmlFor="email">URL to shorten:</FormLabel>
          <Input id="url" />
          <FormHelperText>Please key in a valid url.</FormHelperText>
        </FormControl>
        <Button sx={{ mt: 10 }}>Generate MinionURL</Button>
      </Box>
    </Flex>
  );
};

export default Home;
