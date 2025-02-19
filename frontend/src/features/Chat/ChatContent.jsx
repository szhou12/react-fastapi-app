import { useChat } from './ChatContext0'

import ChatStartPage0 from './ChatStartPage0'
import ChatConversation0 from './ChatConversation0'
import ErrorBoundary from '../../components/Common/ErrorBoundary'



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
                <ChatStartPage0 
                    onSubmitMessage={handleFirstMessage} 
                />
            ) : (
                <ChatConversation0
                    messages={messages}
                    onSubmitMessage={handleNewMessage}
                    isLoading={isLoading}
                />
            )}
        </ErrorBoundary>
    )
}

export default ChatContent