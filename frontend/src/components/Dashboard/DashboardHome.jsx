import {
	Box,
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
import {
	FcConferenceCall,
	FcFinePrint,
	FcGlobe,
} from 'react-icons/fc'
import { Link } from '@tanstack/react-router'

// heading: string
// description: string
// icon: ReactElement
// href: string
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
            <LinkOverlay as={Link} to={href}>
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

function CardTable() {
	return (
		<>
			<Flex py={8} gap={4} flexWrap="wrap" justify="flex-start">
				<LinkCard
					heading={'Scraper'}
					icon={<Icon as={FcGlobe} w={10} h={10} />}
					description={'Scrape data from the Internet.'}
					href={'/dashboard/scraper'}
				/>
				<LinkCard
					heading={'Uploader'}
					icon={<Icon as={FcFinePrint} w={10} h={10} />}
					description={'Upload file documents to the DB.'}
					href={'/dashboard/uploader'}
				/>
				<LinkCard
					heading={'Admin'}
					icon={<Icon as={FcConferenceCall} w={10} h={10} />}
					description={'Manage currently registered users.'}
					href={'/dashboard/admin'}
				/>
			</Flex>
		</>
	)
}

export default function DashboardHome() {
	return (
		<Container maxW="full">
			<Heading size="lg" textAlign={{ base: "center", md: "left" }} pt={12}>
				Home
			</Heading>
			<CardTable />
		</Container>
	)
}