import { ChatProvider } from './ChatContext'
import ChatContent from './ChatContent'

const ChatPage = () => {
    return (
        <ChatProvider>
            <ChatContent />
        </ChatProvider>
    )
}

export default ChatPage