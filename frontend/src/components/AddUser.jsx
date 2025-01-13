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
import { emailPattern, usernamePattern, handleError } from "../utils"
import { ApiError } from "./ApiError"

// isOpen: boolean
// onClose: () => void
const AddUser = ( { isOpen, onClose }) => {
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
            email: "",
            username: "",
            password: "",
            confirm_password: "",
            role: "",
            // is_superuser: false,
            // is_active: false,
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

    // errors object from useForm
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
                    <ModalHeader>Add User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl isRequired isInvalid={!!errors.email}>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input 
                                id="email" 
                                type="email" 
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: emailPattern,
                                })}
                                placeholder="Enter email address"
                            />
                            {errors.email && ( <FormErrorMessage> {errors.email.message} </FormErrorMessage> )}
                        </FormControl>

                        <FormControl mt={4} isRequired isInvalid={!!errors.username}>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <Input 
                                id="username"
                                type="text"
                                {...register("username", {
                                    required: "Username is required",
                                    pattern: usernamePattern,
                                })}
                                placeholder="Enter username"
                            />
                            {errors.username && ( <FormErrorMessage> {errors.username.message} </FormErrorMessage> )}
                        </FormControl>

                        <FormControl mt={4} isRequired isInvalid={!!errors.password}>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                                id="password"
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters",
                                    },
                                })}
                                placeholder="Enter password"
                            />
                            {errors.password && ( <FormErrorMessage> {errors.password.message} </FormErrorMessage> )}
                        </FormControl>

                        <FormControl mt={4} isRequired isInvalid={!!errors.confirm_password}>
                            <FormLabel htmlFor="confirm_password">Confirm Password</FormLabel>
                            <Input
                                id="confirm_password"
                                type="password"
                                {...register("confirm_password", {
                                    required: "Please confirm password",
                                    validate: (value) => value === data.password || "Passwords do not match",
                                })}
                                placeholder="Confirm password"
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel htmlFor="role">Role</FormLabel>
                            <Select
                                id="role"
                                {...register("role", {
                                    required: "Role is required"
                                })}
                                placeholder="Select role"
                            >
                                <option value="admin">Admin</option>
                                <option value="client">Client</option>
                                <option value="staff">Staff</option>
                            </Select>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter gap={3}>
                        <Button variant="primary" type="submit" isLoading={isSubmitting}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>

                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )

}

export default AddUser