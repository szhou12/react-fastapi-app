import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
} from "@chakra-ui/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import useCostomToast from "../hooks/useCostomToast"
import { handleError } from "../utils"
import { ApiError } from "./ApiError"

// isOpen: boolean
// onClose: () => void
const AddFile = ( { isOpen, onClose }) => {
    const queryClient = useQueryClient()
    const showToast = useCostomToast()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        mode: "onBlur",
        criteriaMode: "all",
    })

    // API request
    // TODO: finish mutation, onSubmit
    // Unlike queries (used for fetching data), mutation is used for CRUD actions that modify data, like form submissions or API calls that change the server state.
    const mutation = useMutation({})

    const onSubmit = (data) => {
        mutation.mutate(data)
        console.log(data) // TODO: remove
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={{ base: "sm", md: "mid" }}
                isCentered
            >
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader>Upload File</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        {/* TODO: add file upload */}
                        <FormControl isRequired isInvalid={!!errors.file}>
                            <FormLabel htmlFor="file">File</FormLabel>
                            <Input 
                                id="file"
                                type="file"
                                {...register("file", {
                                    required: "File is required",
                                })}
                            />
                        </FormControl>

                        <FormControl mt={4} isInvalid={!!errors.language}>
                            <FormLabel htmlFor="language">Language</FormLabel>
                            <Select 
                                id="language"
                                {...register("language", {
                                    required: "Language is required",
                                })}
                                placeholder="Select text language"
                            >
                                <option value="en">English</option>
                                <option value="zh">中文</option>
                            </Select>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter gap={3}>
                        <Button variant="primary" type="submit" isLoading={isSubmitting}>
                            Upload
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )


}

export default AddFile