import { useContext, useState } from "react";
import { Box, Square, VisuallyHidden } from "@chakra-ui/react";
import { ColorContext } from "./context/context";

const BoxContainer = (props) => {
    const [boxBg, setBoxBg] = useState("#40739e")
    const [containerBg, setContainerBg] = useState("#ffffff")
    
    
    const {Jokanola} = useContext(ColorContext);

    return (
        <Box 
            bg= {containerBg}  
            boxSize="70%"
            margin="auto"
            h="md"
            mt="6"
            border="1px"
            borderColor="grey"
            borderRadius="sm"
        >
            
            <Box 
                display="flex"
                flexDirection="column"
                w="max"
                border = "1px"
                borderColor="gray.300"
                float="right"
                padding="1.5"
                margin="1.5"
                bg="white"
            >
                <label htmlFor="box-background">box:
                <input 
                    type="color" 
                    name="box-background" 
                    id="box-background"
                    value={boxBg} 
                    onChange={(e) => setBoxBg(e.target.value)}
                />
                </label>

                <label htmlFor="box-container-background">background:
                <input 
                    type="color" 
                    name="box-container-background" 
                    id="box-container-background"
                    value={containerBg}
                    onChange={(e) => setContainerBg(e.target.value)} 
                />
                </label>
            </Box>
            <Square
                bgColor={boxBg}
                size="15rem"
                m = "auto"
                mt = "7rem"
                rounded = "md"
                w = {{base: "70%", md: "50%", lg: "40%"}}
                boxShadow={props.boxShadow}
            >
                <VisuallyHidden>Testing</VisuallyHidden>
            </Square>
        </Box>
    );
}
 
export default BoxContainer;