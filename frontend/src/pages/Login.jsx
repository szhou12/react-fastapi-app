import React, { useState } from 'react'
import { 
  Box, 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  VStack, 
  Heading, 
  Text,
  useToast,
  FormErrorMessage
} from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { mockApi } from '../mockApi'
import { toaster } from '../components/ui/toaster'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  
  const navigate = useNavigate()
  
  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async () => {
      return await mockApi.auth.login(email, password)
    },
    onSuccess: (data) => {
      // Store the token
      localStorage.setItem('access_token', data.token)
      
      // Show success message
      toaster.show({
        title: 'Login successful',
        description: 'You have been logged in successfully',
        meta: { closable: true, color: 'green' }
      })
      
      // Navigate to dashboard
      navigate({ to: '/dashboard' })
    },
    onError: (error) => {
      toaster.show({
        title: 'Login failed',
        description: error.message || 'Invalid credentials',
        meta: { closable: true, color: 'red' }
      })
    }
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    const newErrors = {}
    if (!email) newErrors.email = 'Email is required'
    if (!password) newErrors.password = 'Password is required'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Clear errors and submit
    setErrors({})
    loginMutation.mutate()
  }
  
  return (
    <Box maxW="md" mx="auto">
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading>Login</Heading>
          <Text mt={2} color="gray.500">
            Enter your credentials to access your account
          </Text>
          <Text mt={1} fontSize="sm" color="blue.500">
            (Use email: user@example.com and password: password)
          </Text>
        </Box>
        
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            
            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            
            <Button 
              type="submit" 
              variant="primary" 
              width="full" 
              mt={4}
              isLoading={loginMutation.isPending}
            >
              Login
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  )
}

export default Login 