import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    IconButton,
    Image,
    Text,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react"
import { useQueryClient } from "@tanstack/react-query"
import { FiGlobe, FiHome, FiFilePlus, FiUsers, FiMenu, FiLogOut } from "react-icons/fi"
import Logo from "/assets/images/rmi_logo_horitzontal_no_tagline.svg"
import SidebarItems from "./SidebarItems"
// import type { UserPublic } from "../../client"
import { useAuth } from "../../hooks/useAuth"

// Fake data
import { currentUser } from "../FakeData"


// const Sidebar = () => {
//     const bgColor = useColorModeValue("ui.light", "ui.dark")
//     const textColor = useColorModeValue("ui.dark", "ui.light")
//     const secBgColor = useColorModeValue("ui.secondary", "ui.darkSlate")
//     const { isOpen, onOpen, onClose } = useDisclosure()

//     const navItems = [
//       { name: 'Home', path: '/', icon: FiHome },
//       { name: 'Scraper', path: '/scraper', icon: FiGlobe },
//       { name: 'Uploader', path: '/uploader', icon: FiFilePlus },
//       { name: 'Admin', path: '/admin', icon: FiUsers },
//     ]
  
//     const SidebarContent = () => (
//       <Stack spacing={4}>
//         {navItems.map((item) => (
//           <Link
//             as={RouterLink}
//             to={item.path}
//             key={item.name}
//             p={2}
//             borderRadius="md"
//             _hover={{ bg: 'ui.secondary' }}
//           >
//             <Flex align="center">
//               <Icon as={item.icon} mr={2} />
//               <Text>{item.name}</Text>
//             </Flex>
//           </Link>
//         ))}
//       </Stack>
//     )
  
//     return (
//       <>
//         {/* Mobile */}
//         <IconButton
//           onClick={onOpen}
//           display={{ base: "flex", md: "none" }}
//           aria-label="Open Menu"
//           position="absolute"
//           fontSize="20px"
//           m={4}
//           icon={<FiMenu />}
//         />
//         <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
//           <DrawerOverlay />
//           <DrawerContent maxW="250px">
//             <DrawerCloseButton />
//             <DrawerBody py={8}>
//               <Flex flexDir="column" justify="space-between" h="full">
//                 <Box>
//                   {/* Sidebar content */}
//                   <SidebarContent />
//                 </Box>
//               </Flex>
//             </DrawerBody>
//           </DrawerContent>
//         </Drawer>
  
//         {/* Desktop */}
//         <Box
//           bg={bgColor}
//           p={3}
//           h="100vh"
//           position="sticky"
//           top="0"
//           display={{ base: "none", md: "flex" }}
//           w="250px"
//         >
//           <Flex
//             flexDir="column"
//             justify="space-between"
//             bg={secBgColor}
//             p={4}
//             borderRadius={12}
//             w="full"
//           >
//             <Box>
//               {/* Sidebar content */}
//               <SidebarContent />
//             </Box>
//           </Flex>
//         </Box>
//       </>
//     )
//   }


const Sidebar = () => {
    // set up color theme
    const bgColor = useColorModeValue("ui.light", "ui.dark")
    const textColor = useColorModeValue("ui.dark", "ui.light")
    const secBgColor = useColorModeValue("ui.secondary", "ui.darkSlate")

    // TODO: hook to get current user's data already stored in cache
    // const queryClient = useQueryClient()
    // const currentUser = queryClient.getQueryData(["currentUser"])

    // allow sidebar to open/close like a drawer
    const {isOpen, onOpen, onClose} = useDisclosure()

    const { logout } = useAuth()

    const handleLogout = async () => {
        logout()
    }

    return (
        <>
            {/* Desktop */}
            <Box
                bg={bgColor}
                p={3}
                h="100vh"
                position="sticky"
                top="0"
                display={{ base: "none", md: "flex" }}
            >
                <Flex
                    flexDir="column"
                    justify="space-between"
                    bg={secBgColor}
                    p={4}
                    borderRadius={12}
                >
                    <Box>
                        <Image src={Logo} alt="RMI Logo" w="180px" maxW="2xs" p={6} />
                        <SidebarItems />
                    </Box>
                    {currentUser?.email && (
                        <Text
                            color={textColor}
                            noOfLines={2}
                            fontSize="sm"
                            p={2}
                            maxW="180px"
                        >
                            Logged in as: {currentUser.email}
                        </Text>
                    )}

                </Flex>
            </Box>

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
                        <Flex flexDir="column" justify="space-between">
                            <Box>
                                <Image src={Logo} alt="RMI Logo" p={6} />
                                <SidebarItems onClose={onClose} />
                                <Flex
                                    as="button"
                                    onClick={handleLogout}
                                    p={2}
                                    color="ui.danger"
                                    fontWeight="bold"
                                    alignItems="Center"
                                >
                                    <FiLogOut />
                                    <Text ml={2}>Log out</Text>
                                </Flex>
                            </Box>
                            {
                                currentUser?.email && (
                                    <Text
                                        color={textColor}
                                        noOfLines={2}
                                        fontSize="sm"
                                        p={2}
                                    >
                                        Logged in as: {currentUser.email}
                                    </Text>
                                )
                            }
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )

}
  
export default Sidebar