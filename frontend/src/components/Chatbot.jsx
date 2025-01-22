import { useState } from 'react'
import { 
    Box, 
    Container,
    Flex,
    Heading,
} from '@chakra-ui/react';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
import { 
  MainContainer,
  ChatContainer, 
  MessageList, 
  Message, 
  MessageInput, 
  TypingIndicator
} from "@chatscope/chat-ui-kit-react"

import SidebarChat from './Common/SidebarChat'
import UserMenu from './Common/UserMenu'

function useChat() {
    const systemMessage = {
      role: "system",
      content: "You are a professional expert in developing react applications." // instruction prompt
    }
  
    const [messages, setMessages] = useState([
      {
        message: "Hello, I'm your AI assistant.",
        sender: "ChatGPT",
        direction: "incoming"
      }
    ])  // [message object, ...]
  
    const [isTyping, setIsTyping] = useState(false)
  
    const handleSend = async (message) => {
      // create a message object
      const newMessage = {
        message: message,
        sender: "user",
        direction: "outgoing"
      }
      const newMessages = [...messages, newMessage] // all old messages + new message passed in
  
      // update messages state
      setMessages(newMessages)
  
      // set a typing indicator ("AI agent is thinking")
      setIsTyping(true)
  
      // process message to chatgpt (send it over and see the response)
      await processMessageToChatGPT(newMessages)
    }
  
    const processMessageToChatGPT = async (chatMessages) => {
      // chatMessages { sender: "user" or "chatgpt", message: "message content is here" }
      // apiMessages { role: "user" or "assistant", content: "message content is here" } - ChatGPT API call acceptable type
      
      let apiMessages = chatMessages.map((messageObject) => {
          
        let role = messageObject.sender === "ChatGPT" ? "assistant" : "user"
        return { role: role, content: messageObject.message }
      })
      // role:
      //  "user": a message from the user
      //  "assistant": a message from ChatGPT
      //  "system": generally one initial message defining HOW we want ChatGPT to talk
  
      const apiRequestBody = {
        model: "gpt-3.5-turbo",
        messages: [
          systemMessage, // prompt
          ...apiMessages // all historical messages
        ]
      }
  
      /**
       * Real API call (returns a Promise) - use this when make API call to OPENAI
       * fetch statement
       */
      // await fetch("https://api.openai.com/v1/chat/completions", {
      //   method: "POST",
      //   headers: {
      //     "Authorization": "Bearer " + API_KEY,
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(apiRequestBody)
      // }).then((response) => {
      //   return response.json() // convert response to JSON
      // }).then((data) => {
      //   console.log(data) // print out jsonified response
      //   setMessages(
      //     [...chatMessages, {
      //       message: data.choices[0].message.content,
      //       sender: "ChatGPT",
      //       direction: "incoming"
      //     }]
      //   )
      //   setIsTyping(false)
      // }).catch((error) => {
      //   console.error(error)
      // })
  
      /**
       * FAKE API CALL (returns a Promise) - simulate real API call
       */
      const fakeResponse = {
          choices: [{
            message: {
              content: `This is a mock response. You said: "${chatMessages[chatMessages.length - 1].message}"`
            }
          }]
        }
  
       // simulate a delay of 1 second
      await new Promise(resolve => setTimeout(resolve, 1000))
      // only execute the following when await line is done, otherwise, will be blocked
      setMessages([
        ...chatMessages,
        {
          message: fakeResponse.choices[0].message.content,
          sender: "ChatGPT",
          direction: "incoming"
        }
      ])
      setIsTyping(false)
    }
  
    return {
      messages,
      isTyping,
      handleSend
    }
}

function ChatScopeUI({ messages, isTyping, handleSend }) {
    return (
        <div style={{ 
            position: "fixed", // Change to fixed
            top: 0,
            left: "15%",
            right: "15%",
            bottom: 0,
            height: "100vh", // Use viewport height
            width: "70%" 
        }}>
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={isTyping ? <TypingIndicator content="AI Agent is thinking" /> : null}
              >
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />
                })}
              </MessageList>
              <MessageInput placeholder="Type message here" onSend={handleSend} />
            </ChatContainer>
          </MainContainer>
        </div>
    )
}

export default function Chatbot() {
    const { messages, isTyping, handleSend } = useChat()
    return (
        // <Box>
        //     <Heading>This is Chatbot page</Heading>
        // </Box>
        <Flex>
            {/* <SidebarChat /> */}
            <SidebarChat />
            <Container maxW="full">
                <ChatScopeUI messages={messages} isTyping={isTyping} handleSend={handleSend} />
            </Container>
            <UserMenu />
            {/* <UserMenu /> */}
        </Flex>
    );
}