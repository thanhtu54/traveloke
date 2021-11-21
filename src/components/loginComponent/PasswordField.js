import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const PasswordField = () => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef(null);

  const onClickReveal = () => {
    onToggle();
    const input = inputRef.current;
    if (input) {
      input.focus({ preventScroll: true });
      const length = input.value.length * 2;
      requestAnimationFrame(() => {
        input.setSelectionRange(length, length);
      });
    }
  };

  return (
    <FormControl id="password">
      <Flex justify="space-between">
        <FormLabel>Password</FormLabel>
        <Box
          as="a"
          color={mode("blue.600", "blue.200")}
          fontWeight="semibold"
          fontSize="sm"
        >
          Forgot Password?
        </Box>
      </Flex>
      <InputGroup>
        <InputRightElement>
          <IconButton
            bg="transparent !important"
            variant="ghost"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          //   ref={mergeRef}
          name="password"
          type={isOpen ? "text" : "password"}
          autoComplete="current-password"
          required
        />
      </InputGroup>
    </FormControl>
  );
};

export default PasswordField;
