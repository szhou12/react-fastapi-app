import { Flex, Box, Spinner } from '@chakra-ui/react'
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import UserMenu from "./UserMenu"

function Layout() {
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

export default Layout;