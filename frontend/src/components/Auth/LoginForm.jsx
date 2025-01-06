import React, { useState } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
// import { Link as RouterLink, useNavigate } from 'react-router-dom'; // TODO: change to tanstack router
import { Link as RouterLink, useNavigate } from '@tanstack/react-router';
import { useAuth } from '../../hooks/useAuth';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Login attempt with:', { email, password });
        // For now, always navigate to staff dashboard regardless of input
        if (email && password) {
          login();  // Set authenticated to true
          navigate({ to: '/chatbot' });
        }
      };

    return (
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
                        <Button type="submit" variant="primary">
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
    );
};

export default LoginForm;