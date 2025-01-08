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

// fake data
import { users as fakeData } from "../FakeData"

// Users Table
function ItemsTable() {
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
                                        <Td>{item.createdAt}</Td>
                                        <Td>{item.lastLogin}</Td>
                                        <Td>
                                            <Flex gap={2}>
                                                <Box 
                                                    w="2"
                                                    h="2"
                                                    borderRadius="50%"
                                                    bg={item.isActive ? "ui.success" : "ui.danger"}
                                                    alignSelf="center"
                                                />
                                                {item.isActive ? "Active" : "Inactive"}
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
    // TODO: replace with actual function
    const AddItem = ({ isOpen, onClose }) => {
        return (
            <div></div>
        )
    }

    return (
        <Container maxW="full">
            <Heading size="lg" textAlign={{ base: "center", md: "left" }} pt={12}>
                User Management
            </Heading>
            <Addbar type={"User"} addModalAs={AddItem}/>
            <ItemsTable />
        </Container>
    );
}