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

import useCustomToast from "./hooks/useCustomToast"
// import { ItemsService, UsersService } from "../../client"

// type: string
// id: string
// isOpen: boolean
// onClose: () => void
const Delete = ({ type, id, isOpen, onClose }) => {
    const showToast = useCustomToast()
    const queryClient = useQueryClient()
    const cancelRef = React.useRef(null)
}

export default Delete