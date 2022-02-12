import BoxContainer from "./BoxContainer";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import BoxParameters from "./BoxParameter";
import { useState } from "react";
import { generateShadows } from "./utils";

function App() {
  const [hoffset, setHoffset] = useState(10);
  const [voffset, setVoffset] = useState(15);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState("#000000");
  const [inset, setInset] = useState(false);
  const [opac, setOpacity] = useState(0.25);
  const boxShadow = generateShadows(
    hoffset,
    voffset,
    blur,
    spread,
    color,
    opac,
    inset,
  );

  return (
    <Box
      bg="gray.100"
      height="120vh"
    >
      <Heading
        textAlign="center"
        pt="2.5"
        color="gray.600"
        fontFamily="cursive"
      >
        Box Shadow Editor
      </Heading>
      <BoxContainer boxShadow = {boxShadow}/>
      <BoxParameters 
        hoffset = {hoffset}
        setHoffset = {setHoffset}
        voffset = {voffset}
        setVoffset = {setVoffset}
        blur = {blur}
        setBlur = {setBlur}
        spread = {spread}
        setSpread = {setSpread}
        color = {color}
        setColor = { setColor}
        inset = {inset}
        setInset = {setInset}
        opac = {opac}
        setOpacity = {setOpacity}
        boxShadow = {boxShadow}
      />
    </Box>
  );
}

export default App;
