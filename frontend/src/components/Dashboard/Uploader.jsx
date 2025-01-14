import React from 'react'
import {
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
import AddFile from "../AddFile"


// fake data
import { files as fakeData } from "../FakeData"



// ActionsMenu
// Addbar
// Pagination Footer


// Data Table
function DataTable() {
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
                            <Th>File Name</Th>
                            <Th>Total Pages</Th>
                            <Th>Date Added</Th>
                            <Th>Language</Th>
                            <Th>File Size (MB)</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    {isPending ? (
                        <Tbody>
                            {new Array(6).fill(null).map(
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
                                            <Tooltip label={item.name} hasArrow>
                                                {item.name}
                                            </Tooltip>
                                        </Td>
                                        <Td>{item.total_pages}</Td>
                                        <Td>{item.date_added}</Td>
                                        <Td>{item.language}</Td>
                                        <Td>{item.file_size}</Td>
                                        <Td><ActionsMenu type={"File"} value={item} /></Td>
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

export default function Uploader() {
    // TODO: replace with actual function
    const AddItem = ({ isOpen, onClose }) => {
        return (
            <div></div>
        )
    }

    return (
        <Container maxW="full">
            <Heading size="lg" textAlign={{ base: "center", md: "left" }} pt={12}>
                File Management
            </Heading>
            <Addbar type={"File"} addModalAs={AddFile}/>
            <DataTable />
        </Container>
    );
}