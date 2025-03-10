import { useNavigate } from '@tanstack/react-router';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'ui.main',
                zIndex: -1,
              }}>
              RMI
            </Text>
            <br />{' '}
            <Text color={'ui.main'} as={'span'}>
              Your Clean Energy AI Consultant
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'ui.dim'}>
            以RMI的海量能源数据与分析作支撑, 为您创建客制化的AI咨询服务
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              variant='dashed' 
              borderColor={'ui.main'}
              color={'ui.main'}
              _hover={{
                transform: 'translate(-4px, -4px)',
                rounded: 'md',
                shadow: `4px 4px 0px var(--chakra-colors-ui-main)`, // using ui.main color for shadow
                // borderColor: 'ui.main'  // maintain border color on hover
              }}
              // rounded={'full'} 
              // variant='primary' 
              onClick={() => navigate({ to: '/login' })}
            >
              Log In
            </Button>
            <Button 
              variant="dashed"
              // rounded={'full'} 
              // bg={'ui.secondary'} 
              // color={'ui.darkSlate'} 
              onClick={() => navigate({ to: '/register' })}
            >
              Sign Up
            </Button>
            <Button
              rounded={'full'} 
              variant="danger"
              _hover={{bg: 'ui.dim'}}
              onClick={() => navigate({ to: '/login-staff' })}
            >
              Login As Staff
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}