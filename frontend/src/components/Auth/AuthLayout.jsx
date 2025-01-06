import React from 'react';
import {
    Flex, 
    Stack, 
    Heading, 
    Text, 
    useColorModeValue
} from '@chakra-ui/react';

const AuthLayout = ({ title, description, children }) => {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('ui.light', 'ui.dark')}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>{title}</Heading>
                    <Text fontSize={'lg'} color={'ui.dim'}>
                        {description}
                    </Text>
                </Stack>
                {children}
            </Stack>
        </Flex>
    );
};

export default AuthLayout;