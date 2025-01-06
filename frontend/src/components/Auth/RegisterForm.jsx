import React, { useState } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Text,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from '@tanstack/react-router';


const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Registration attempt with:', { username, email, password });
        // Add your registration logic here
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
                    <FormControl id="username" isRequired>
                        <FormLabel>Username</FormLabel>
                        <Input 
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FormControl>
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
                        <InputGroup>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputRightElement h={'full'}>
                                <Button
                                    variant={'ghost'}
                                    onClick={() => setShowPassword((showPassword) => !showPassword)}
                                >
                                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            loadingText="Submitting"
                        >
                            Sign up
                        </Button>
                    </Stack>
                    <Stack pt={6}>
                        <Text align={'center'}>
                            Already have an account?{' '}
                            <Link 
                                as={RouterLink}
                                to="/login" 
                                color={'ui.main'} 
                                _hover={{ color: '#00766C' }}
                            >
                                Log in
                            </Link>
                        </Text>
                    </Stack>
                </Stack>
            </form>
        </Box>
    );

};

export default RegisterForm;