import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    IconButton,
    Text,
    useColorModeValue,
    useDisclosure,
    Link,
    Stack,
    Icon,
  } from "@chakra-ui/react"
  import {
    FcConferenceCall,
    FcFinePrint,
    FcGlobe,
  } from 'react-icons/fc'
  import { FiMenu } from "react-icons/fi"
  import { Link as RouterLink } from "react-router-dom"
  
  const Sidebar = () => {
    const bgColor = useColorModeValue("ui.light", "ui.dark")
    const textColor = useColorModeValue("ui.dark", "ui.light")
    const secBgColor = useColorModeValue("ui.secondary", "ui.darkSlate")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const navItems = [
      { name: 'Home', path: '/', icon: FiMenu },
      { name: 'Scraper', path: '/scraper', icon: FcGlobe },
      { name: 'Uploader', path: '/uploader', icon: FcFinePrint },
      { name: 'Admin', path: '/admin', icon: FcConferenceCall },
    ]
  
    const SidebarContent = () => (
      <Stack spacing={4}>
        {navItems.map((item) => (
          <Link
            as={RouterLink}
            to={item.path}
            key={item.name}
            p={2}
            borderRadius="md"
            _hover={{ bg: 'ui.secondary' }}
          >
            <Flex align="center">
              <Icon as={item.icon} mr={2} />
              <Text>{item.name}</Text>
            </Flex>
          </Link>
        ))}
      </Stack>
    )
  
    return (
      <>
        {/* Mobile */}
        <IconButton
          onClick={onOpen}
          display={{ base: "flex", md: "none" }}
          aria-label="Open Menu"
          position="absolute"
          fontSize="20px"
          m={4}
          icon={<FiMenu />}
        />
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent maxW="250px">
            <DrawerCloseButton />
            <DrawerBody py={8}>
              <Flex flexDir="column" justify="space-between" h="full">
                <Box>
                  {/* Sidebar content */}
                  <SidebarContent />
                </Box>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
  
        {/* Desktop */}
        <Box
          bg={bgColor}
          p={3}
          h="100vh"
          position="sticky"
          top="0"
          display={{ base: "none", md: "flex" }}
          w="250px"
        >
          <Flex
            flexDir="column"
            justify="space-between"
            bg={secBgColor}
            p={4}
            borderRadius={12}
            w="full"
          >
            <Box>
              {/* Sidebar content */}
              <SidebarContent />
            </Box>
          </Flex>
        </Box>
      </>
    )
  }
  
  export default Sidebar