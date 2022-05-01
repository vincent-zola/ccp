import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex bg="#1A1A1A"  align="center" justify="center">
      <Flex grow={4} justify="flex-end" align="center">
        <Text fontSize="3xl" fontWeight="bold" color="#709971">
          // CCP
        </Text>
      </Flex>

      <Flex grow={3} justify="flex-end" gap={5} mr={5}>
        <Text>Login</Text>
        <Text>Tabs</Text>
      </Flex>
    </Flex>
  );
};
export default Navbar;
