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

import useCustomToast from "../hooks/useCustomToast"
import { handleError } from "../utils"
import { ApiError } from "./ApiError"

// Define size constants (in bytes)
const MAX_FILE_SIZE = 50 * (1024 * 1024)  // 50MB
const FILE_SIZE_MB = MAX_FILE_SIZE / (1024 * 1024)

// isOpen: boolean
// onClose: () => void
const AddFile = ( { isOpen, onClose }) => {
    const queryClient = useQueryClient()
    const showToast = useCustomToast()

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
    const mutation = useMutation({
        // mutationFn: async (data) => {
        //     const formData = new FormData()
        //     formData.append('file', data.file[0]) // Access the File object
        //     formData.append('language', data.language)
            
        //     const response = await fetch('/api/files', {
        //         method: 'POST',
        //         body: formData,
        //     })
        //     if (!response.ok) throw new Error('Upload failed')
        //     return response.json()
        // },
        // onSuccess: () => {
        //     showToast('File uploaded successfully', 'success')
        //     queryClient.invalidateQueries(['files'])
        //     reset()
        //     onClose()
        // },
        // onError: (error) => {
        //     handleError(error, showToast)
        // }
    })

    const onSubmit = (data) => {
        mutation.mutate(data)
        console.log(data) // TODO: remove
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={{ base: "sm", md: "md" }}
                isCentered
            >
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader>Upload File</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        {/* TODO: add file upload */}
                        <FormControl isRequired isInvalid={!!errors.file}>
                            <FormLabel htmlFor="file">File (Limit {FILE_SIZE_MB}MB. PDF, XLSX, XLS)</FormLabel>
                            <Input 
                                id="file"
                                type="file"
                                accept=".pdf,.xlsx,.xls"
                                {...register("file", {
                                    required: "File is required",
                                    validate: {
                                        fileSize: (files) => {
                                            if (!files[0]) return true
                                            return files[0].size <= MAX_FILE_SIZE || `File size must be less than ${FILE_SIZE_MB}MB`
                                        }
                                    }
                                })}
                            />
                            <FormErrorMessage>
                                {errors.file && ( <FormErrorMessage> {errors.file.message} </FormErrorMessage> )}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl mt={4} isRequired isInvalid={!!errors.language}>
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