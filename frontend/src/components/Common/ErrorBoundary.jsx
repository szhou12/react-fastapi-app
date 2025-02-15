import { Component } from 'react'
import { Box, Heading, Text, Button } from '@chakra-ui/react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            hasError: false,
            error: null,
            errorInfo: null
        }
    }

    // Triggered when an error occurs in child components.
    // Sets hasError: true to display the fallback UI.
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    // Runs when an error occurs in child components.
    // Logs error details (errorInfo shows where the error happened).
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You could also log the error to an error reporting service here
        console.error('Error caught by ErrorBoundary:', error, errorInfo)
    }

    // Allows users to recover by resetting the state when clicking "Try Again".
    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <Box
                    p={8}
                    textAlign="center"
                    bg="ui.light"
                    borderRadius="md"
                    maxW="xl"
                    mx="auto"
                    my={8}
                >
                    <Heading size="lg" mb={4}>Something went wrong</Heading>
                    <Text mb={6}>We apologize for the inconvenience. Please try again.</Text>
                    <Button onClick={this.handleReset} variant="primary">
                        Try Again
                    </Button>
                </Box>
            )
        }

        // If no error, render the children components.
        return this.props.children
    }
}

export default ErrorBoundary
