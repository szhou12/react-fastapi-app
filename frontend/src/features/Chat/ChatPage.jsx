import { useState, useRef } from 'react'
import { 
    Box, 
    Button, 
    Flex, 
    SimpleGrid, 
    Stack
} from '@chakra-ui/react'
import { BsPalette2 } from 'react-icons/bs'
import { FaReact, FaRecycle } from 'react-icons/fa'
import { HiArrowUp, HiSparkles } from 'react-icons/hi'

import { ChatTextarea } from "../../components/Chatbot/ChatTextarea"
import { EmptyStatePrompt } from "../../components/Chatbot/EmptyStatePrompt"
import { PromptSuggestButton } from "../../components/Chatbot/PromptSuggestButton"

const FAKE_PROMPT_CARDS = [
    {
        icon: BsPalette2,
        title: "动力电池技术",
        description: "请分析动力电池的核心特性和发展趋势"
    },
    {
        icon: FaRecycle,
        title: "热泵技术",
        description: "当前热泵技术有哪些发展路线?"
    },
    {
        icon: FaReact,
        title: "直接电解铁矿石技术",
        description: "请分析直接电解技术有哪些主要的应用场景？"
    },
    {
        icon: HiSparkles,
        title: "液流电池储能技术",
        description: "请分析液流电池储能技术在市场的发展趋势"
    }
]

const ChatPage = () => {
    const [hasTextContent, setHasTextContent] = useState(false)

    const handleTextareaChange = (event) => {
        setHasTextContent(event.target.value.trim().length > 0)
    }

    const textareaRef = useRef(null) // init textareaRef.current to null

    const handleMsgSubmit = (event) => {
        // prevents the following behaviors
        // → Page would reload
        // → URL might become something like "/?message=Hello"
        // → Lost application state
        event.preventDefault()

        const message = textareaRef.current?.value

        // avoid submitting empty messages
        if (!message?.trim()) return

        // TODO: handle message submission
        console.log("Sending:", message)

        // Clear the entire form
        // event.currentTarget refers to the <form> element
        // reset() is a form method that clears all form inputs
        event.currentTarget.reset()
        // Reset textarea height using ref
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
        }
        // Re-mute button
        setHasTextContent(false)
    }

    // Add handler for PromptSuggestButton clicks
    const handlePromptClick = (description) => {
        if (textareaRef.current) {
            // Sets the textarea value/text to the description
            textareaRef.current.value = description
            
            // Submit form
            // textareaRef.current.form finds the parent form <Box as="form">
            // requestSubmit() triggers onSubmit handler defined in <Box as="form">
            textareaRef.current.form?.requestSubmit()
        }
    }

    return (
        <Flex 
            direction="column"
            pos="relative" 
            bg="ui.light"
            height="100vh"
            overflow="hidden"
        >
            <Box overflowY="auto" paddingTop="20" paddingBottom="40" height="full">
                <EmptyStatePrompt>Hi Client, how can I help you?</EmptyStatePrompt>
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
                    <SimpleGrid columns={2} spacing="2">
                        {FAKE_PROMPT_CARDS.map((prompt, index) => (
                            <PromptSuggestButton
                                key={index}
                                icon={<prompt.icon />}
                                title={prompt.title}
                                description={prompt.description}
                                onClick={() => handlePromptClick(prompt.description)}
                            />
                        ))}
                    </SimpleGrid>

                    <Box as="form" pos="relative" onSubmit={handleMsgSubmit}>
                        <ChatTextarea 
                            rows={1} 
                            bg="ui.secondary"
                            onChange={handleTextareaChange}
                            ref={textareaRef} // textareaRef.current now points to <Textarea>
                        />
                        <Box
                            pos="absolute" 
                            bottom="4px"
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

export default ChatPage

