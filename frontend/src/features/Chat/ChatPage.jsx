import { ChatProvider } from './ChatContext0' // TODO: change to ChatContext
import ChatContent from './ChatContent'

const ChatPage = () => {
    return (
        <ChatProvider>
            <ChatContent />
        </ChatProvider>
    )
}

export default ChatPage