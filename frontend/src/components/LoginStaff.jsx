import React, { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '../hooks/useAuth';

export default function LoginStaff() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempt with:', { email, password });
    // For now, always navigate to staff dashboard regardless of input
    if (email && password) {
      login();  // Set authenticated to true
      navigate({ to: '/dashboard' });
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('ui.light', 'ui.dark')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Hello Staff!</Heading>
          <Text fontSize={'lg'} color={'ui.dim'}>
            Log in to access our console
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'ui.darkSlate')}
          boxShadow={'lg'}
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>is admin?</Checkbox>
                  
                </Stack>
                <Button
                  type="submit"
                  variant="primary"
                >
                  Sign in
                </Button>
                <Text align={'center'}>
                  Don't have an account?{' '}
                  Please contact admin.
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}