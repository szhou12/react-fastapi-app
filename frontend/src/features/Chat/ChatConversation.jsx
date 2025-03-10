import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from '@tanstack/react-router'
import { 
    Box, 
    Button, 
    Flex, 
    HStack, 
    Stack,
    useToast
} from '@chakra-ui/react'
import { FiDownloadCloud, FiRepeat } from 'react-icons/fi'
import { HiArrowUp } from 'react-icons/hi'

import { useChat } from './ChatContext'
import { ChatTextarea } from '../../components/Chatbot/ChatTextarea'
import { ChatActionButton } from '../../components/Chatbot/ChatActionButton'
import { ChatMessages } from '../../components/Chatbot/ChatMessages'
import { ChatMessage } from '../../components/Chatbot/ChatMessage'

const users = {
    user: {
        name: 'MaryJane',
        image: 'https://api.dicebear.com/9.x/thumbs/svg?seed=MaryJane'
    },
    assistant: {
        name: 'AI',
        image: 'https://api.dicebear.com/9.x/thumbs/svg?seed=AI'
    },
}

const ChatConversation = () => {
    const { conversationId } = useParams()
    const navigate = useNavigate()

    // TODO: add toast to show error message

    const { 
        conversations,
        handleNewMessage, 
        isLoading 
    } = useChat()

    // Get current conversation
    const conversation = conversations[conversationId]
    if (!conversation) {
        // If conversation not found, redirect to start
        navigate({ to: '/chat' })
        return null
    }

    // Effect: Detect if the textarea has any text content
    const [hasTextContent, setHasTextContent] = useState(false)
    const handleTextareaChange = (event) => {
        setHasTextContent(event.target.value.trim().length > 0)
    }

    const textareaRef = useRef(null)

    const handleMsgSubmit = async (event) => {
        event.preventDefault()
        const message = textareaRef.current?.value

        if (!message?.trim()) return

        try {
            await handleNewMessage(message, conversationId)
        } catch (error) {
            // TODO: may use toast to show error message
            console.error('Error submitting message:', error)
        }

        event.currentTarget.reset()
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
        }
        setHasTextContent(false)
    }

    // Effect: Scroll to the bottom of the chat when messages change
    const messagesEndRef = useRef(null)

    useEffect(() => {
        // if messsages changed, wait for 0.1s before scrolling to the bottom
        const timeoutId = setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'end',    // Ensures alignment to the bottom
                inline: 'nearest'
            })
        }, 100)

        return () => clearTimeout(timeoutId)
    }, [conversation.messages]) // effect triggers when messages changes

    return (
        <Flex
            direction="column"
            pos="relative"
            bg="ui.light"
            height="100vh"
            overflow="hidden"
        >
            <Box
                flex="1"
                overflowY="auto" // Enable vertical scrolling
                paddingTop="20"
            >
                <ChatMessages>
                    {conversation.messages.map((message, index) => (
                        <ChatMessage
                            key={index}
                            author={users[message.type]}
                            messages={message.content}
                        />
                    ))}
                    {isLoading && (
                        <ChatMessage
                            key="loading-message"
                            author={users.assistant}
                            messages={[""]}  // Placeholder text
                            isLoading={true}   // Show loading spinner
                        />
                    )}
                    {/* Scroll target */}
                    <Box 
                        ref={messagesEndRef} 
                        paddingBottom="40" // make padding part of the target to ensure both the target AND its padding are visible
                        height="1px"
                        width="100%"
                    />
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
                            disabled={isLoading}
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
                                disabled={!hasTextContent || isLoading}
                                isLoading={isLoading}
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