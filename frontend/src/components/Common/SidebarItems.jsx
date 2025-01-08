import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react"
import { useQueryClient } from "@tanstack/react-query"
import { Link } from "@tanstack/react-router"
import { FiGlobe, FiHome, FiFilePlus, FiUsers, FiMenu } from "react-icons/fi"

// import type { UserPublic } from "../../client"

// Fake data
import { currentUser } from "../FakeData"



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

    // TODO: hook to get current user's data already stored in cache
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

export default SidebarItems