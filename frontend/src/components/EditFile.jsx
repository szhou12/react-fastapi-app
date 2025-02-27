import {
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react"

const EditFile = ({ item, isOpen, onClose }) => {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={{ base: "sm", md: "md" }}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit File</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Flex 
                            justify="center" 
                            align="center" 
                            height="200px"
                            fontSize="lg"
                            color="gray.600"
                        >
                            Currently not supporting file edit
                        </Flex>
                    </ModalBody>

                    <ModalFooter gap={3}>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
}

export default EditFile