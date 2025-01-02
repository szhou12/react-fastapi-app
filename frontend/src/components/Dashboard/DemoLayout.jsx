import {
    Flex,
    Spinner,
    Box,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Icon, Text, useColorModeValue,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    useDisclosure,
    Image,
} from "@chakra-ui/react"
import { Link, Outlet } from "@tanstack/react-router"
import { FaUserTie } from "react-icons/fa"
import { FiLogOut, FiUser, FiGlobe, FiHome, FiFilePlus, FiUsers } from "react-icons/fi"
import Logo from "/assets/images/rmi-logo.svg"

// Fake data
const currentUser = {
    email: "abc@email.com",
    is_superuser: true,
}

// UserMenu
const UserMenu = () => {
    const handleLogout = async () => {
        console.log("logout")
    }

    return (
        <>
        {/* Desktop */}
            <Box
                display={{ base: "none", md: "block" }}
                position="fixed"
                top={4}
                right={4}
            >
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<FaUserTie color="white" fontSize="18px" />}
                        bg="ui.main"
                        isRound
                        data-testid="user-menu"
                    />
                    <MenuList>
                        <MenuItem
                            icon={<FiLogOut fontSize="18px" />}
                            onClick={handleLogout}
                            color="ui.danger"
                            fontWeight="bold"
                        >
                            Log out
                        </MenuItem>
                    </MenuList>
                </Menu>
                
            </Box>
        </>
    )
}

// SidebarItems
const navItems = [
    { name: 'Home', path: '/dashboard', icon: FiHome, exact: true },
    { name: 'Scraper', path: '/dashboard/scraper', icon: FiGlobe },
    { name: 'Uploader', path: '/dashboard/uploader', icon: FiFilePlus },
]

const SidebarItems = ({ onClose }) => {
    // set up color theme
    const textColor = useColorModeValue("ui.main", "ui.light")
    const bgActive = useColorModeValue("#E2E8F0", "#4A5568")
    const bgHover = useColorModeValue("gray.100", "gray.700")

    // hook to get current user's data already stored in cache
    // const queryClient = useQueryClient()
    // const currentUser = queryClient.getQueryData(["currentUser"]) // expect to return a UserPublic

    // add Admin tab if user is superuser
    const finalNavItems = currentUser?.is_superuser ? [...navItems, { name: 'Admin', path: '/dashboard/admin', icon: FiUsers }] : navItems

    const listItems = finalNavItems.map(({ name, path, icon, exact }) => (
        <Flex
            as={Link}
            to={path}
            w="100%"
            p={2}
            key={name}
            activeOptions={{ exact: exact }}
            activeProps={{
                style: {
                    background: bgActive,
                    borderRadius: "12px",
                }
            }}
            color={textColor}
            onClick={onClose}
            transition="all 0.2s"
            borderRadius="12px"
            _hover={{
                background: bgHover,
                transform: "translateX(5px)",
                cursor: "pointer"
            }}
        >
            <Icon as={icon} alignSelf="center" />
            <Text ml={2}>{name}</Text>
        </Flex>
    ))

    return (
        <>
            <Box>{listItems}</Box>
        </>
    )
}


// Sidebar
const Sidebar = () => {
    // set up color theme
    const bgColor = useColorModeValue("ui.light", "ui.dark")
    const textColor = useColorModeValue("ui.dark", "ui.light")
    const secBgColor = useColorModeValue("ui.secondary", "ui.darkSlate")

    // hook to get current user's data already stored in cache
    // const queryClient = useQueryClient()
    // const currentUser = queryClient.getQueryData(["currentUser"])

    // allow sidebar to open/close like a drawer
    // const {isOpen, onOpen, onClose} = useDisclosure()


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
        </>
    )

}

function DemoLayout() {
    const isLoading = false;

    return (
        <Flex>
            <Sidebar />
            { isLoading ? (
                <Flex justify="center" align="center" height="100vh" width="full">
                    <Spinner size="xl" color="ui.primary" />
                </Flex>
            ) : (
                <Outlet />
            )}
            <UserMenu />
            
        </Flex>
    );
}

export default DemoLayout;
