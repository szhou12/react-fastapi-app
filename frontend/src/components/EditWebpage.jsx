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
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import useCustomToast from "../hooks/useCustomToast"
import { handleError } from "../utils"
import { ApiError } from "./ApiError"

// item: WebpagePublic
// isOpen: boolean
// onClose: () => void
const EditWebpage = ({ item, isOpen, onClose }) => {
    const queryClient = useQueryClient()
    const showToast = useCustomToast()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isDirty },
    } = useForm({
        mode: "onBlur",
        criteriaMode: "all",
        defaultValues: item,
    })

    // API request
    // TODO: finish mutation, onSubmit
    // Unlike queries (used for fetching data), mutation is used for CRUD actions that modify data, like form submissions or API calls that change the server state.
    const mutation = useMutation({})

    const onSubmit = (data) => {
        mutation.mutate(data)
        console.log(data) // TODO: remove
    }

    const onCancel = () => {
        reset()
        onClose()
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
                    <ModalHeader>Edit Webpage</ModalHeader>
                    <ModalCloseButton onClick={onCancel} />
                    <ModalBody pb={6}>
                        <FormControl isInvalid={!!errors.url}>
                            <FormLabel htmlFor="url">URL</FormLabel>
                            <Input 
                                id="url"
                                value={item.url}
                                isReadOnly
                                variant="filled"
                                _readOnly={{
                                    cursor: "default",
                                    backgroundColor: "gray.100",
                                }}
                            />
                            {errors.url && <FormErrorMessage>{errors.url.message}</FormErrorMessage>}
                        </FormControl>

                        <FormControl mt={4} isInvalid={!!errors.refresh_frequency}>
                            <FormLabel htmlFor="refresh_frequency">Refresh Frequency (Days)</FormLabel>
                            <NumberInput
                                id="refresh_frequency"
                                min={0}
                                defaultValue={0}
                                precision={0}
                                clampValueOnBlur={true}
                            >
                                <NumberInputField 
                                    {...register("refresh_frequency", {
                                        min: { value: 0, message: "Refresh frequency cannot be negative" },
                                        validate: {
                                            isInteger: value => 
                                                Number.isInteger(Number(value)) || 
                                                "Refresh frequency must be a whole number"
                                        }
                                    })} 
                                />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            {errors.refresh_frequency && 
                                <FormErrorMessage>{errors.refresh_frequency.message}</FormErrorMessage>
                            }
                        </FormControl>

                    </ModalBody>

                    <ModalFooter gap={3}>
                        <Button variant="primary" type="submit" isLoading={isSubmitting}>
                            Save
                        </Button>
                        <Button onClick={onCancel}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditWebpage