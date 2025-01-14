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
import EditUser from "../EditUser"
import EditWebpage from "../EditWebpage"
import EditFile from "../EditFile"


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
            case "File":
                return (
                    <EditFile
                        // value as Item1Public
                        item={value}
                        isOpen={editModal.isOpen}
                        onClose={editModal.onClose}
                    />
                )
            case "Webpage":
                return (
                    <EditWebpage
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
                        Edit
                    </MenuItem>
                    <MenuItem
                        onClick={deleteModal.onOpen}
                        icon={<FiTrash fontSize="16px"/>}
                        color="ui.danger"
                    >
                        Delete
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