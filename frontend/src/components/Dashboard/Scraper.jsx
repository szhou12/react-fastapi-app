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
    Link,
} from '@chakra-ui/react'

import ActionsMenu from "../Common/ActionsMenu"
import PaginationFooter from "../Common/PaginationFooter"
import Addbar from "../Common/Addbar"

// fake data
import { webs as fakeData } from "../FakeData"

// Items Table
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
                            <Th>Source url</Th>
                            <Th>Date updated</Th>
                            <Th>Language</Th>
                            <Th>frequency (days)</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    {isPending ? (
                        <Tbody>
                            {new Array(5).fill(null).map(
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
                                            <Tooltip label={item.url} hasArrow>
                                                <Link
                                                    href={item.url}
                                                    isExternal
                                                    color="blue.600"
                                                    textDecoration="underline"
                                                >
                                                    {item.url}
                                                </Link>
                                            </Tooltip>
                                        </Td>
                                        <Td>{item.dateAdded}</Td>
                                        <Td>{item.language}</Td>
                                        <Td>{item.refreshFrequency}</Td>
                                        <Td><ActionsMenu type={"Item2"} value={item} /></Td>
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

export default function Scraper() {
    // TODO: replace with actual function
    const AddItem = ({ isOpen, onClose }) => {
        return (
            <div></div>
        )
    }

    return (
        <Container maxW="full">
            <Heading size="lg" textAlign={{ base: "center", md: "left" }} pt={12}>
                Web Pages Management
            </Heading>
            <Addbar type={"URL"} addModalAs={AddItem}/>
            <ItemsTable />
        </Container>
    );
}