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
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import useCostomToast from "../hooks/useCostomToast"
import { handleError } from "../utils"
import { ApiError } from "./ApiError"

// isOpen: boolean
// onClose: () => void
const AddWebpage = ( { isOpen, onClose }) => {
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
        defaultValues: {
            url: "",
            pages: 1,
            language: "",
        },
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
                    <ModalHeader>Scrape Webpage</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl isRequired isInvalid={!!errors.url}>
                            <FormLabel htmlFor="url">URL</FormLabel>
                            <Input 
                                id="url"
                                type="url"
                                {...register("url", {
                                    required: "URL is required",
                                })}
                                placeholder="Enter URL"
                            />
                            {errors.url && <FormErrorMessage>{errors.url.message}</FormErrorMessage>}
                        </FormControl>

                        <FormControl mt={4} isInvalid={!!errors.pages}>
                            <FormLabel htmlFor="pages">Pages to scrape</FormLabel>
                            <NumberInput
                                id="pages"
                                min={1}
                                max={10}
                                defaultValue={1}
                            >
                                <NumberInputField
                                    {...register("pages", {
                                        min: { value: 1, message: "Minimum 1 page" },
                                        max: { value: 10, message: "Maximum 10 pages" }
                                    })}
                                />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            {errors.pages && <FormErrorMessage>{errors.pages.message}</FormErrorMessage>}
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
                            Scrape
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddWebpage