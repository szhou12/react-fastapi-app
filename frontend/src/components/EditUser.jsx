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
} from "@chakra-ui/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import useCustomToast from "../hooks/useCustomToast"
import { emailPattern, usernamePattern, handleError } from "../utils"

// user: UserPublic object
// isOpen: boolean
// onClose: () => void
const EditUser = ({ user, isOpen, onClose }) => {
    const queryClient = useQueryClient()
    const showToast = useCustomToast()

    const {
        register,
        handleSubmit,
        reset,
        getValues, // get all the current form values
        formState: { errors, isSubmitting, isDirty }, // isDirty: true if any of the fields have been changed
    } = useForm({
        mode: "onBlur",
        criteriaMode: "all",
        defaultValues: user,
    })

    // API request
    // TODO: finish mutation, onSubmit
    const mutation = useMutation({})

    // TODO: remove async keyword
    const onSubmit = async (data) => {
        // By converting an empty string to undefined, the backend API can interpret this as "don't update the password" rather than "set the password to empty"
        // if user doesn't enter a new password, then the password remains unchanged
        if (data.password === "") {
            data.password = undefined
        }
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
                    <ModalHeader>Edit User</ModalHeader>
                    <ModalCloseButton onClick={onCancel}/>
                    <ModalBody pb={6}>
                        <FormControl isInvalid={!!errors.email}>
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

                        <FormControl mt={4} isInvalid={!!errors.username}>
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

                        <FormControl mt={4} isInvalid={!!errors.password}>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                                id="password"
                                type="password"
                                {...register("password", {
                                    // required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters",
                                    },
                                })}
                                placeholder="Enter password"
                            />
                            {errors.password && ( <FormErrorMessage> {errors.password.message} </FormErrorMessage> )}
                        </FormControl>

                        <FormControl mt={4} isInvalid={!!errors.confirm_password}>
                            <FormLabel htmlFor="confirm_password">Confirm Password</FormLabel>
                            <Input
                                id="confirm_password"
                                type="password"
                                {...register("confirm_password", {
                                    // required: "Please confirm password",
                                    validate: (value) => value === getValues().password || "Passwords do not match",
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

                        <Flex>
                            <FormControl mt={4}>
                                <Checkbox  {...register("is_active")} colorScheme="teal">
                                    activate?
                                </Checkbox>
                            </FormControl>
                        </Flex>

                    </ModalBody>

                    <ModalFooter gap={3}>
                        <Button variant="primary" type="submit" isLoading={isSubmitting} isDisabled={!isDirty}>
                            Save
                        </Button>
                        <Button onClick={onCancel}>Cancel</Button>

                    </ModalFooter>

                </ModalContent>
            </Modal>
        </>
    )
}

export default EditUser