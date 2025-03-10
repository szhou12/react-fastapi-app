import React from 'react'
import {
    Flex,
    Box,
    Heading,
    Container,
    SkeletonText,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Tooltip,
} from '@chakra-ui/react'

import ActionsMenu from "../Common/ActionsMenu"
import PaginationFooter from "../Common/PaginationFooter"
import Addbar from "../Common/Addbar"
import AddUser from "../AddUser"

// fake data
import { users as fakeData } from "../FakeData"

// Users Table
function UsersTable() {
    // TODO: replace with actual values
    const items = fakeData;
    const isPending = false;
    const isPlaceholderData = false;
    const hasNextPage = true;
    const hasPreviousPage = false;
    const setPage = () => {};
    const page = 1;

    return (
        <>
            <TableContainer>
                <Table size={{ base: "sm", md: "md" }}>
                    <Thead>
                        <Tr>
                            <Th>username</Th>
                            <Th>email</Th>
                            <Th>role</Th>
                            <Th>created at</Th>
                            <Th>last login</Th>
                            <Th>status</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    {isPending ? (
                        <Tbody>
                            {new Array(7).fill(null).map(
                                (_, index) => (
                                    <Td key={index}>
                                        <SkeletonText noOfLines={1} paddingBlock="16px" />
                                    </Td>
                                )
                            )}
                        </Tbody>
                    ) : (
                        <Tbody>
                            {items?.data.map(
                                (item) => (
                                    <Tr key={item.id} opacity={isPlaceholderData ? 0.5 : 1} _hover={{ bg: "gray.100" }}>
                                        <Td isTruncated maxW={{ base: "150px", md: "300px", lg: "500px" }}>
                                            <Tooltip label={item.username} hasArrow>
                                                {item.username}
                                            </Tooltip>
                                        </Td>
                                        <Td>{item.email}</Td>
                                        <Td>{item.role}</Td>
                                        <Td>{item.created_at}</Td>
                                        <Td>{item.last_login}</Td>
                                        <Td>
                                            <Flex gap={2}>
                                                <Box 
                                                    w="2"
                                                    h="2"
                                                    borderRadius="50%"
                                                    bg={item.is_active ? "ui.success" : "ui.danger"}
                                                    alignSelf="center"
                                                />
                                                {item.is_active ? "Active" : "Inactive"}
                                            </Flex>
                                        </Td>
                                        <Td><ActionsMenu type={"User"} value={item} /></Td>
                                    </Tr>
                                )
                            )}
                        </Tbody>
                    )}
                </Table>
            </TableContainer>
            <PaginationFooter 
                hasNextPage={hasNextPage}
                hasPreviousPage={hasPreviousPage}
                onChangePage={setPage}
                page={page}
            />
        </>
    )
}


export default function Admin() {

    return (
        <Container maxW="full">
            <Heading size="lg" textAlign={{ base: "center", md: "left" }} pt={12}>
                User Management
            </Heading>
            <Addbar type={"User"} addModalAs={AddUser}/>
            <UsersTable />
        </Container>
    );
}