import {
    Flex,
    Spinner,
} from "@chakra-ui/react"
import { Outlet } from "@tanstack/react-router"
import Sidebar from "../Common/Sidebar"
import UserMenu from "../Common/UserMenu"



function DemoLayout() {
    const isLoading = false; // TODO: remove this

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
