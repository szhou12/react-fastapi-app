import React, { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempt with:', { email, password });
    // For now, always navigate to dashboard regardless of input
    navigate('/chatbot');
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
          <Heading fontSize={'4xl'}>Welcome Back</Heading>
          <Text fontSize={'lg'} color={'ui.dim'}>
            Log in to enjoy our cool features! 😃
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
                  <Link
                    as={RouterLink}
                    to="/forgot-password"
                    color={'ui.main'}
                    _hover={{ color: '#00766C' }}
                  >
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  type="submit"
                  variant="primary"
                >
                  Log in
                </Button>
                <Text align={'center'}>
                  Don't have an account?{' '}
                  <Link
                    as={RouterLink}
                    to="/register"
                    color={'ui.main'}
                    _hover={{ color: '#00766C' }}
                  >
                    Register here
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}