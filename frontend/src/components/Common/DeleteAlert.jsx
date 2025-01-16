import React from "react"
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import useCustomToast from "../../hooks/useCustomToast"
// import { ItemsService, UsersService } from "../../client"

// type: string
// id: string
// isOpen: boolean
// onClose: () => void
const Delete = ({ type, id, isOpen, onClose }) => {
    const showToast = useCustomToast()
    const queryClient = useQueryClient()
    const cancelRef = React.useRef(null)
    const { handleSubmit, formState: { isSubmitting } } = useForm()

    // TODO: work on this when backend is ready
    const deleteEntity = async (id) => {
        // if (type === "File") {
        //     await ItemsService.deleteItem(id)
        // } else if (type === "Webpage") {
        //     await ItemsService.deleteItem(id)
        // } else if (type === "User") {
        //     await UsersService.deleteUser(id)
        // } else {
        //     throw new Error(`Unexpected type: ${type}`)
        // }
        console.log("deleteEntity", id)
    }

    const mutation = useMutation({
        // mutationFn: deleteEntity,
        // onSuccess: () => {
        //     showToast(
        //         "Success"
        //         `The ${type.toLowerCase()} was deleted successfully.`, 
        //         "success",
        //     )
        //     onClose()
        // },
        // onError: () => {
        //     showToast(
        //         "Failure"
        //         `An error occurred while deleting the ${type.toLowerCase()}.`, 
        //         "error",
        //     )
        // },
        // onSettled: () => {
        //     queryClient.invalidateQueries({
        //         queryKey: [type === "Item" ? "items" : "users"]
        //     })
        // },
    })

    const onSubmit = async () => {
        mutation.mutate(id)
    }

    return (
        <>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                size={{ base: "sm", md: "md" }}
                isCentered
            >
                <AlertDialogOverlay>
                    <AlertDialogContent as="form" onSubmit={handleSubmit(onSubmit)}>
                        <AlertDialogHeader>Delete {type}</AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure you want to delete this {type} (id: {id})? You cannot undo this action.
                        </AlertDialogBody>

                        <AlertDialogFooter gap={3}>
                            <Button ref={cancelRef} onClick={onClose} isDisabled={isSubmitting}>
                                Cancel
                            </Button>
                            <Button variant="danger" type="submit" isLoading={isSubmitting}>
                                Delete
                            </Button>
                        </AlertDialogFooter>

                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default Delete