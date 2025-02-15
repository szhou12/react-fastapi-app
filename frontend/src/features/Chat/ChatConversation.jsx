import { useState, useRef } from 'react'
import { 
    Box, 
    Button, 
    Flex, 
    HStack, 
    Stack 
} from '@chakra-ui/react'
import { FiDownloadCloud, FiRepeat } from 'react-icons/fi'
import { HiArrowUp } from 'react-icons/hi'

import { ChatTextarea } from "../../components/Chatbot/ChatTextarea"
import { ChatActionButton } from '../../components/Chatbot/ChatActionButton'
import { ChatMessages } from '../../components/Chatbot/ChatMessages'
import { ChatMessage } from '../../components/Chatbot/ChatMessage'

const users = {
    user: {
        name: 'MaryJane',
        image: "https://api.dicebear.com/9.x/thumbs/svg?seed=MaryJane"
    },
    assistant: {
        name: 'AI',
        image: "https://api.dicebear.com/9.x/thumbs/svg?seed=AI"
    },
}

const chats = [
    {
        type: 'user',
        messages: [`What is Chakra UI and how does it work?`]
    },
    {
        type: 'assistant',
        messages: [
            `Chakra UI is a popular open-source React component library that provides a set of flexible and accessible UI components for building modern web applications. It is designed to make it easier for developers to create consistent and visually appealing user interfaces with minimal effort.`,
        ],
    },
    {
        type: 'user',
        messages: [`How is it different from Chakra UI Pro?`],
    },
    {
        type: 'assistant',
        messages: [
            `Chakra UI is a React component library that provides a set of flexible and accessible UI components for building modern web applications. It is designed to make it easier for developers to create consistent and visually appealing user interfaces with minimal effort.`,
            `Chakra UI Pro provides over 180+ beautifully designed components, made by the creators of Chakra UI. The perfect starting line for your next project.      `,
        ],
    },
]

const ChatConversation = ({ messages, onSubmitMessage }) => {
    const [hasTextContent, setHasTextContent] = useState(false)
    const handleTextareaChange = (event) => {
        setHasTextContent(event.target.value.trim().length > 0)
    }

    const textareaRef = useRef(null)

    const handleMsgSubmit = (event) => {
        event.preventDefault()
        const message = textareaRef.current?.value

        if (!message?.trim()) return

        onSubmitMessage(message)

        event.currentTarget.reset()
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
        }
        setHasTextContent(false)
    }

    
    return (
        <Flex
            direction="column"
            pos="relative"
            bg="ui.light"
            height="100vh"
            overflow="hidden"
        >
            <Box
                overflowY="auto"
                paddingTop="20"
                paddingBottom="40"
            >
                <ChatMessages>
                    {messages.map((chat, index) => (
                        <ChatMessage
                            key={index}
                            author={users[chat.type]}
                            messages={chat.messages}
                        />
                    ))}
                </ChatMessages>
            </Box>

            <Box
                pos="absolute"
                bottom="0"
                insetX="0"
                bgGradient="linear(to-t, ui.light 80%, rgba(0,0,0,0))"
                paddingY="8"
                marginX="4"
            >
                <Stack maxW="prose" mx="auto">
                    <HStack>
                        <ChatActionButton icon={FiRepeat}>Regenerate</ChatActionButton>
                        <ChatActionButton icon={FiDownloadCloud}>Download</ChatActionButton>
                    </HStack>
                    <Box as="form" pos="relative" pb="1" onSubmit={handleMsgSubmit}>
                        <ChatTextarea
                            rows={1}
                            bg="ui.secondary"
                            onChange={handleTextareaChange}
                            ref={textareaRef}
                        />
                        <Box
                            pos="absolute" 
                            bottom="8px"
                            right="3px"
                            zIndex="2"
                        >
                            <Button 
                                size="sm"
                                type="submit"
                                variant={hasTextContent ? "primary" : "text"}
                                rounded="md"
                                disabled={!hasTextContent}
                            >
                                <HiArrowUp />
                            </Button>
                        </Box>
                    </Box>

                </Stack>
            </Box>

        </Flex>
    )
}

export default ChatConversation
    