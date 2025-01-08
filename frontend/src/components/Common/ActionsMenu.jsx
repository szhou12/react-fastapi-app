import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
} from "@chakra-ui/react"
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
            {/* Edit Item2 Modal for item: {item.name} */}
        </div>
    );
};

const EditUser = ({ user, isOpen, onClose }) => {
    console.log('EditUser Modal opened with user:', user);
    
    return (
        <div>
            {/* Edit User Modal for item: {user.name} */}
        </div>
    );
};
// TODO: replace with Delete from DeleteAlert
const Delete = ({ type, id, isOpen, onClose }) => {
    console.log(`Delete Modal opened for ${type} with ID:`, id);
    
    return (
        <div>
            {/* Delete {type} Modal for ID: {id} */}
        </div>
    );
};


// type: string
// value: ItemPublic | UserPublic
// disabled?: boolean
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

export default ActionsMenu