import { 
    Box, 
    Button, 
    Flex, 
    SimpleGrid, 
    Stack 
} from '@chakra-ui/react'
import { BsImage, BsPalette2 } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'

import { ChatTextarea } from "../../components/Chatbot/ChatTextarea"
import { EmptyStatePrompt } from "../../components/Chatbot/EmptyStatePrompt"
import { PromptSuggestButton } from "../../components/Chatbot/PromptSuggestButton"

const ChatPage = () => {
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
                        <PromptSuggestButton
                            icon={<BsPalette2 />}
                            title="动力电池技术"
                            description="请分析动力电池的核心特性和发展趋势"
                        />
                        <PromptSuggestButton
                            icon={<BsImage />}
                            title="热泵技术"
                            description="当前热泵技术有哪些发展路线?"
                        />
                        <PromptSuggestButton
                            icon={<FaReact />}
                            title="直接电解铁矿石技术"
                            description="请分析直接电解技术有哪些主要的应用场景？"
                        />
                        <PromptSuggestButton
                            icon={<HiSparkles />}
                            title="液流电池储能技术"
                            description="请分析液流电池储能技术在市场的发展趋势"
                        />
                    </SimpleGrid>

                    <Box as="form" pos="relative" pb="1">
                        <ChatTextarea rows={1} />
                        <Box pos="absolute" top="3" right="0" zIndex="2">
                            <Button size="sm" type="submit" variant="text" colorScheme="gray">
                                <FiSend />
                            </Button>
                        </Box>

                    </Box>

                </Stack>

            </Box>
        </Flex>
    )
}

export default ChatPage

