import React from 'react'
import {
    Box, 
    Heading,
    Button,
    Flex,
    Icon,
    useDisclosure,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
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

// TODO: replace with actual function
const EditItem1 = ({ item, isOpen, onClose }) => {
    console.log('EditItem1 Modal opened with item:', item);
    
    return (
        <div>
            {/* Edit Item1 Modal for item: {item.name} */}
        </div>
    );
};

const EditItem2 = ({ item, isOpen, onClose }) => {
    console.log('EditItem2 Modal opened with item:', item);
    
    return (
        <div>
            Edit Item2 Modal for item: {item.name}
        </div>
    );
};

const EditUser = ({ user, isOpen, onClose }) => {
    console.log('EditUser Modal opened with user:', user);
    
    return (
        <div>
            Edit User Modal for item: {user.name}
        </div>
    );
};

const Delete = ({ type, id, isOpen, onClose }) => {
    console.log(`Delete Modal opened for ${type} with ID:`, id);
    
    return (
        <div>
            {/* Delete {type} Modal for ID: {id} */}
        </div>
    );
};

// ActionsMenu
const ActionsMenu = ({ type, value, disabled}) => {
    const editModal = useDisclosure()
    const deleteModal = useDisclosure()

    const renderEditModal = () => {
        switch(type) {
            case "User":
                return (
                    <EditUser
                        // value as UserPublic
                        user={value}
                        isOpen={editModal.isOpen}
                        onClose={editModal.onClose}
                    />
                )
            case "Item1":
                return (
                    <EditItem1
                        // value as Item1Public
                        item={value}
                        isOpen={editModal.isOpen}
                        onClose={editModal.onClose}
                    />
                )
            case "Item2":
                return (
                    <EditItem2
                        // value as Item2Public
                        item={value}
                        isOpen={editModal.isOpen}
                        onClose={editModal.onClose}
                    />
                )
            default:
                return null
        }
    }

    return (
        <>
            <Menu>
                <MenuButton
                    isDisabled={disabled}
                    as={Button}
                    rightIcon={<BsThreeDotsVertical />}
                    variant="unstyled"
                />
                <MenuList>
                    <MenuItem
                        onClick={editModal.onOpen}
                        icon={<FiEdit fontSize="16px"/>}
                    >
                        Edit {type}
                    </MenuItem>
                    <MenuItem
                        onClick={deleteModal.onOpen}
                        icon={<FiTrash fontSize="16px"/>}
                        color="ui.danger"
                    >
                        Delete {type}
                    </MenuItem>
                </MenuList>
                {renderEditModal()}
                <Delete
                    type={type}
                    id={value.id}
                    isOpen={deleteModal.isOpen}
                    onClose={deleteModal.onClose}
                />
            </Menu>
        </>
    )
}

// Addbar
const Addbar = ({ type, addModalAs }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const AddModal = addModalAs

    return (
        <>
            <Flex py={8} gap={4}>
                <Button variant="primary" onClick={onOpen} gap={1} fontSize={{ base: "sm", md: "inherit" }}>
                    <Icon as={FaPlus} /> Add {type}
                </Button>
                <AddModal isOpen={isOpen} onClose={onClose} />
            </Flex>
        </>
    )

}

// Pagination Footer
const PaginationFooter = ({ hasNextPage, hasPreviousPage, onChangePage, page }) => {
    return (
        <Flex justifyContent="flex-end" alignItems="center" gap={4} mt={4} directio="row">
            <Button onClick={() => onChangePage(page - 1)} isDisabled={!hasPreviousPage || page <= 1}>Previous</Button>
            <span>Page {page}</span>
            <Button onClick={() => onChangePage(page + 1)} isDisabled={!hasNextPage}>Next</Button>
        </Flex>
    )
}

const fakeData = {
    data: [
        {
            id: 1,
            name: "中国氢储运中长期布局图景和技术展望.pdf",
            totalPages: 26,
            dateAdded: "2024-01-01",
            language: "zh",
            fileSize: "2.54",
        },
        {
            id: 2,
            name: "BCG 中国氢能产业展望.pdf",
            totalPages: 50,
            dateAdded: "2024-03-01",
            language: "zh",
            fileSize: "4.78",
        },
        {
            id: 3,
            name: "国网英大-储能行业深度报告：六类储能的发展情况及其经济性评估.pdf",
            totalPages: 37,
            dateAdded: "2024-02-01",
            language: "zh",
            fileSize: "3.14",
        },
        {
            id: 4,
            name: "BNEF-Hydrogen-Economy-Outlook-Key-Messages-30-Mar-2020.pdf",
            totalPages: 14,
            dateAdded: "2024-07-01",
            language: "en",
            fileSize: "1.01",
        },
        {
            id: 5,
            name: "《2023 势银氢能与燃料电池年度蓝皮书》.pdf",
            totalPages: 158,
            dateAdded: "2024-12-01",
            language: "zh",
            fileSize: "12.01",
        },
        {
            id: 6,
            name: "react app.pdf",
            totalPages: 230,
            dateAdded: "2024-12-01",
            language: "zh",
            fileSize: "12.01",
        },
        {
            id: 7,
            name: "test.pdf",
            totalPages: 12,
            dateAdded: "2025-12-01",
            language: "en",
            fileSize: "12.01",
        },
    ]
}

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