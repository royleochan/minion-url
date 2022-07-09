import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Button,
  HStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon, CopyIcon } from "@chakra-ui/icons";

import minionBackground from "assets/minion.png";
import Form from "components/Form";

const Home = () => {
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const reset = () => setShortenedUrl("");

  const handleCopyToClipboard = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(shortenedUrl);
  };

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
          minWidth: "34vw",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <Form setShortenedUrl={setShortenedUrl} reset={reset} />
        {shortenedUrl !== "" && (
          <HStack justifyContent={"space-between"}>
            <Box>
              <Text fontWeight="bold" color="#EAB02A">
                Done! Here's your MinionURL:
              </Text>
              <Link href={shortenedUrl} isExternal>
                {shortenedUrl} <ExternalLinkIcon mx="2px" />
              </Link>
            </Box>
            <Button
              leftIcon={<CopyIcon />}
              colorScheme="blue"
              onClick={handleCopyToClipboard}
            >
              {!isCopied ? "Copy" : "Copied!"}
            </Button>
          </HStack>
        )}
      </Box>
    </Flex>
  );
};

export default Home;
