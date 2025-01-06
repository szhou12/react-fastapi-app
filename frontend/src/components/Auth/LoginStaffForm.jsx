import React, { useState } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '../../hooks/useAuth';

const LoginStaffForm = () => {
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
                        <Button type="submit" variant="primary">
                            Log in
                        </Button>
                        <Text align={'center'}>
                            Don't have an account?{' '}
                            Please contact the admin.
                        </Text>
                    </Stack>
                </Stack>
            </form>
        </Box>
      );

};

export default LoginStaffForm;