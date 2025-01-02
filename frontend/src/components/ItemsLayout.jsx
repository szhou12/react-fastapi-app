import {
    Container,
    Heading,
    SkeletonText,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react"

import ActionsMenu from "./ActionsMenu"
import Addbar from "./Addbar"
import PaginationFooter from "./PaginationFooter"

function ItemsTable() {
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
                            <Th>File Size</Th>
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
                                    <Tr key={item.id} opacity={isPlaceholderData ? 0.5 : 1}>
                                        <Td isTruncated maxWidth="150px">{item.name}</Td>
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

function Items() {
    return (
        <Container maxW="full">
            <Heading size="lg" textAlign={{ base: "center", md: "left" }} pt={12}>
                Items Management TBD
            </Heading>
            <Addbar type={"Item1"} addModalAs={addItem}/>
            <ItemsTable />
        </Container>
    )
}