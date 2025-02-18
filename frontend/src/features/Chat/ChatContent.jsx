import { useChat } from './ChatContext'

import ChatStartPage from './ChatStartPage'
import ChatConversation from './ChatConversation'
import ErrorBoundary from '../../components/Common/ErrorBoundary'
import LoadingSpinner from '../../components/Common/LoadingSpinner'


const ChatContent = () => {
    const {
        hasStarted,
        messages,
        isLoading,
        error,
        handleFirstMessage,
        handleNewMessage
    } = useChat()

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <ErrorBoundary>
            {/* {isLoading && <LoadingSpinner />} */}
            {!hasStarted ? (
                <ChatStartPage 
                    onSubmitMessage={handleFirstMessage} 
                />
            ) : (
                <ChatConversation
                    messages={messages}
                    onSubmitMessage={handleNewMessage}
                    isLoading={isLoading}
                />
            )}
        </ErrorBoundary>
    )
}

export default ChatContent