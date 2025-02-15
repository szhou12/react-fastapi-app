import { createContext, useContext, useReducer } from 'react'

// Define action types
const ACTIONS = {
    START_CHAT: 'START_CHAT',
    ADD_MESSAGE: 'ADD_MESSAGE',
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR',
}

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
    const handleFirstMessage = async (message) => {
        try {
            dispatch({ type: ACTIONS.SET_LOADING, payload: true })
            // TODO: API call could go here
            dispatch({ type: ACTIONS.START_CHAT, payload: message })
        } catch (error) {
            dispatch({ type: ACTIONS.SET_ERROR, payload: error.message })
        } finally {
            dispatch({ type: ACTIONS.SET_LOADING, payload: false })
        }
    }

    const handleNewMessage = async (message) => {
        try {
            dispatch({ type: ACTIONS.SET_LOADING, payload: true })
            // API call could go here
            dispatch({
                type: ACTIONS.ADD_MESSAGE,
                payload: { type: 'user', message }
            })
        } catch (error) {
            dispatch({ type: ACTIONS.SET_ERROR, payload: error.message })
        } finally {
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