'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcConferenceCall,
  FcFinePrint,
  FcGlobe,
} from 'react-icons/fc'
import Sidebar from '../Sidebar'

// interface CardProps {
//   heading: string
//   description: string
//   icon: ReactElement
//   href: string
// }


const LinkCard = ({ heading, description, icon, href }) => {
  return (
    <LinkBox as="article">
      <Box
        w={'275px'}
        h={'225px'}
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        _hover={{ 
          transform: 'translateY(-10px)',
          boxShadow: 'md',
          borderColor: 'ui.main'
        }}
        transition="all 0.2s">
        <Stack align={'start'} spacing={2} h="full">
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2} flex="1" overflow="hidden">
            <LinkOverlay href={href}>
              <Heading size="md" noOfLines={1}>{heading}</Heading>
            </LinkOverlay>
            <Text mt={1} fontSize={'sm'} noOfLines={2}>
              {description}
            </Text>
          </Box>
        </Stack>
      </Box>
    </LinkBox>
  )
}

export default function DashboardHome() {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" p={8}>
        <Stack spacing={4} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} color={'ui.darkSlate'}>
            Home
          </Heading>
          <Text color={'ui.dim'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Choose the function you want to access
          </Text>
        </Stack>

        <Box mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="flex-start">
            <LinkCard
              heading={'Scraper'}
              icon={<Icon as={FcGlobe} w={10} h={10} />}
              description={'Scrape data from the Internet.'}
              href={'#'}
            />
            <LinkCard
              heading={'Uploader'}
              icon={<Icon as={FcFinePrint} w={10} h={10} />}
              description={'Upload file documents to the DB.'}
              href={'#'}
            />
            <LinkCard
              heading={'Admin'}
              icon={<Icon as={FcConferenceCall} w={10} h={10} />}
              description={'Manage currently registered users.'}
              href={'#'}
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}