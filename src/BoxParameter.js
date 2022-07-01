import {
  Box,
  NumberInput,
  Input,
  InputGroup,
  InputRightAddon,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  VStack,
  Checkbox,
  useClipboard,
} from "@chakra-ui/react";

const BoxParameters = (props) => {
  const { hasCopied, onCopy } = useClipboard(props.boxShadow);

  return (
    <VStack spacing="4">
      <InputGroup
        mt="5"
        width={{ base: "95%", md: "70%", lg: "60%" }}
        outline="1px solid black"
      >
        <Input
          disabled
          value={`BS: ${props.boxShadow}`}
          _placeholder={{ color: "black", fontWeight: "bold" }}
        />
        <InputRightAddon
          color="white"
          bgColor="gray.700"
          _hover={{
            background: "black",
          }}
        >
          <button onClick={onCopy}>{hasCopied ? "Copied" : "Copy"}</button>
        </InputRightAddon>
      </InputGroup>

      <HStack
        pl="3"
        spacing={{ base: "1rem", md: "2rem", lg: "3.5rem" }}
        fontSize="15px"
        fontFamily="monospace"
        flexWrap="wrap"
      >
        <Box margin="0" w="20">
          <label htmlFor="">h-offset</label>
          <NumberInput
            w="100%"
            allowMouseWheel
            focusBorderColor="transparent"
            value={props.hoffset}
            onChange={(value) => props.setHoffset(value)}
            outline="1px solid grey"
            borderRadius="md"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper color="gray" />
              <NumberDecrementStepper color="gray" />
            </NumberInputStepper>
          </NumberInput>
        </Box>

        <Box w="20">
          <label htmlFor="">v-offset</label>
          <NumberInput
            value={props.voffset}
            onChange={(value) => props.setVoffset(value)}
            min={10}
            max={20}
            w="100%"
            allowMouseWheel
            focusBorderColor="transparent"
            outline="1px solid grey"
            borderRadius="md"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper color="gray" />
              <NumberDecrementStepper color="gray" />
            </NumberInputStepper>
          </NumberInput>
        </Box>

        <Box w="20">
          <label htmlFor="">blur</label>
          <NumberInput
            id="blur-radius"
            value={props.blur}
            onChange={(value) => props.setBlur(value)}
            min={0}
            max={20}
            w="100%"
            allowMouseWheel
            focusBorderColor="transparent"
            outline="1px solid grey"
            borderRadius="md"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper color="gray" />
              <NumberDecrementStepper color="gray" />
            </NumberInputStepper>
          </NumberInput>
        </Box>

        <Box w="20">
          <label htmlFor="">spread</label>
          <NumberInput
            value={props.spread}
            onChange={(value) => props.setSpread(value)}
            w="100%"
            allowMouseWheel
            focusBorderColor="transparent"
            outline="1px solid grey"
            borderRadius="md"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper color="gray" />
              <NumberDecrementStepper color="gray" />
            </NumberInputStepper>
          </NumberInput>
        </Box>

        <Box>
          <label htmlFor="">
            color
            <Input
              type="color"
              value={props.color}
              onChange={(ev) => props.setColor(ev.target.value)}
              focusBorderColor="transparent"
              outline="1px solid grey"
              borderRadius="md"
            />
          </label>
        </Box>

        <Box w="24">
          <label htmlFor="">opacity</label>
          <NumberInput
            id="opacity"
            value={props.opac}
            onChange={(ev) => props.setOpacity(ev)}
            min={0}
            max={1}
            step={0.01}
            w="100%"
            allowMouseWheel
            focusBorderColor="transparent"
            outline="1px solid grey"
            borderRadius="md"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper color="gray" />
              <NumberDecrementStepper color="gray" />
            </NumberInputStepper>
          </NumberInput>
        </Box>

        <Box w="20" pt="5">
          <Checkbox
            size="lg"
            value={props.inset}
            onChange={(e) => {
              props.setInset(e.target.checked);
            }}
          >
            inset
          </Checkbox>
        </Box>
      </HStack>
    </VStack>
  );
};

export default BoxParameters;
