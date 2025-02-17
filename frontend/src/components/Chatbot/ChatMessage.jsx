import { 
    Avatar, 
    Box, 
    HStack, 
    Stack, 
    Text 
} from "@chakra-ui/react"

export const ChatMessage = ({ author, messages = [] }) => {
    return (
        <HStack align="flex-start" gap="5">
            <Box pt="1">
                <Avatar size="sm" src={author.image} name={author.name} />
            </Box>
            <Stack spacing="1">
                <Text fontWeight="medium">{author.name}</Text>
                <Stack spacing="2">
                    {messages.map((message, index) => (
                        <Box 
                            key={index}
                            lineHeight="tall"
                            maxW="100%"
                        >
                            <Text
                                whiteSpace="pre-wrap"     // Preserve line breaks and wrap text
                                wordBreak="break-word"    // Break long words if necessary
                                overflowWrap="break-word" // Ensure long words don't overflow
                            >
                                {message}
                            </Text>
                        </Box>
                    ))}
                </Stack>
            </Stack>
        </HStack>
    )
}