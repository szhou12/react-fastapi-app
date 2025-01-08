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
import { FaPlus } from "react-icons/fa"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FiEdit, FiTrash } from "react-icons/fi"

import ActionsMenu from "../Common/ActionsMenu"
import PaginationFooter from "../Common/PaginationFooter"
import Addbar from "../Common/Addbar"


// fake data
import { files as fakeData } from "../FakeData"



// ActionsMenu
// Addbar
// Pagination Footer


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
                                        <Td>{item.totalPages}</Td>
                                        <Td>{item.dateAdded}</Td>
                                        <Td>{item.language}</Td>
                                        <Td>{item.fileSize}</Td>
                                        <Td><ActionsMenu type={"Item1"} value={item} /></Td>
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
                Files Management
            </Heading>
            <Addbar type={"File"} addModalAs={AddItem}/>
            <ItemsTable />
        </Container>
    );
}