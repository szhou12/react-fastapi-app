import {
    Button,
    Checkbox,
    Flex,
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
            refresh_frequency: 0,
            auto_download: false,
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
                                    isReadOnly // prevent manual entry
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
                                        min: { value: 0, message: "Refresh rate cannot be negative" },
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

                        <Flex mt={4}>
                            <FormControl>
                                <Checkbox {...register("auto_download")} colorScheme="teal">
                                    Allow auto-download?
                                </Checkbox>
                            </FormControl>
                        </Flex>

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