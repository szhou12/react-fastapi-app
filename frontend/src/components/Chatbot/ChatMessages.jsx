import {
    Box,
    Stack,
    StackDivider,
} from "@chakra-ui/react"

export const ChatMessages = (props) => {
    return (
        <Stack
            maxW="prose" // Maximum width preset - typically around 65 characters per line
            mx="auto" // Margin left & right set to 'auto' - centers the stack horizontally
            paddingX={{ base: '4', md: '8'}} // Responsive horizontal padding
            divider={ // Element to show between stack items
                <Box marginLeft="14!"> 
                    <StackDivider />
                </Box>
            }
            spacing="10"
            {...props}
        />
    )
}