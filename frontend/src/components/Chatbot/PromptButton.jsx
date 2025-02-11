import React from "react"
import { Box, Button, Icon } from "@chakra-ui/react"

export const PromptButton = ( {icon, children, ...rest }) => {
    return (
        <Button
            variant="subtle"
            minH={{ base: "100px", md: "200px" }}
            alignItems="flex-start"
            p="4"
            textStyle="md"
            fontWeight="medium"
            whiteSpace="normal"
            textAlign="start"
            position="relative"
            {...rest}
        >
            {children}
            <Box pos="absolute" bottom="4" insetEnd="4">
                <Icon size="lg" color="colorPalette.fg/50">
                    {icon}
                </Icon>
            </Box>

        </Button>
    )
}

