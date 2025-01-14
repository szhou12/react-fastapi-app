import { Button, Flex, Icon, useDisclosure } from "@chakra-ui/react"
import { FaPlus } from "react-icons/fa"


// type: string
// addModalAs: React.ComponentType | React.ElementType
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

export default Addbar