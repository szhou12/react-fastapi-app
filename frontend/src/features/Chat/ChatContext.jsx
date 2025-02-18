import { createContext, useContext, useReducer } from 'react'

// Define action types
const ACTIONS = {
    START_CHAT: 'START_CHAT',
    ADD_MESSAGE: 'ADD_MESSAGE',
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR',
}

// State Strcuture
// Initial state
const initialState = {
    messages: [],
    hasStarted: false,
    isLoading: false,
    error: null,
}

// Reducer for state management
const chatReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.START_CHAT:
            return {
                ...state,
                hasStarted: true,
                messages: [{
                    type: 'user',
                    messages: [action.payload]
                }]
            }
        case ACTIONS.ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    type: action.payload.type,
                    messages: [action.payload.message]
                }]
            }
        case ACTIONS.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case ACTIONS.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

// Create the context
const ChatContext = createContext()

// Context Provider
export const ChatProvider = ({ children }) => {
    const [state, dispatch] = useReducer(chatReducer, initialState)

    // Message handling functions
    // dispatch(action) sends action to chatReducer
    // state is automatically managed by useReducer, so no explicit state passing
    const handleFirstMessage = async (message) => {
        try {
            // Execute sequentially
            // Step 1 start loading
            dispatch({ type: ACTIONS.SET_LOADING, payload: true })

            // Step 2 add user's first message
            dispatch({ type: ACTIONS.START_CHAT, payload: message })

            // TODO: API call to backend
            // Simulate API call with setTimeout
            await new Promise(resolve => setTimeout(resolve, 5000))
            // Step 3 AI response
            const aiResponse = "Hello! I'm your AI assistant. I'll help you with: " + message
            dispatch({
                type: ACTIONS.ADD_MESSAGE,
                payload: {
                    type: 'assistant',
                    message: aiResponse
                }
            })

        } catch (error) {
            dispatch({ type: ACTIONS.SET_ERROR, payload: error.message })
        } finally {
            // Step 4 end loading
            dispatch({ type: ACTIONS.SET_LOADING, payload: false })
        }
    }

    const handleNewMessage = async (message) => {
        try {
            dispatch({ type: ACTIONS.SET_LOADING, payload: true })
            
            // user's incoming message
            dispatch({
                type: ACTIONS.ADD_MESSAGE,
                payload: { type: 'user', message }
            })

            // TODO: API call to backend
            // Simulate API call with setTimeout
            await new Promise(resolve => setTimeout(resolve, 5000))
            // AI response
            const aiResponse = "Thank you for your message. You said: " + message
            dispatch({
                type: ACTIONS.ADD_MESSAGE,
                payload: {
                    type: 'assistant',
                    message: aiResponse
                }
            })


        } catch (error) {
            dispatch({ type: ACTIONS.SET_ERROR, payload: error.message })
        } finally {
            // end loading
            dispatch({ type: ACTIONS.SET_LOADING, payload: false })
        }
    }

    return (
        <ChatContext.Provider value={{
            ...state,
            handleFirstMessage,
            handleNewMessage
        }}>
            {children}
        </ChatContext.Provider>
    )
}

// Custom hook for using chat context
export const useChat = () => {
    const context = useContext(ChatContext)
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider')
    }
    return context
}