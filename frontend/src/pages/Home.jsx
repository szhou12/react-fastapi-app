import React from 'react'
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react'
import { Link } from '@tanstack/react-router'
import { useColorModeValue } from '../components/ui/color-mode'

function Home() {
  const bgColor = useColorModeValue('gray.50', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'gray.100')
  
  return (
    <Box 
      p={8} 
      borderRadius="lg" 
      bg={bgColor}
      color={textColor}
      textAlign="center"
    >
      <Heading mb={6}>Welcome to My React App</Heading>
      <Text fontSize="xl" mb={8}>
        This is a demo application built with React, Chakra UI v3, and TanStack Router.
      </Text>
      
      <Stack direction="row" spacing={4} justify="center">
        <Button 
          as={Link}
          to="/dashboard" 
          variant="primary"
        >
          Go to Dashboard
        </Button>
        <Button 
          as={Link}
          to="/login" 
          variant="outline"
        >
          Login
        </Button>
      </Stack>
    </Box>
  )
}

export default Home 