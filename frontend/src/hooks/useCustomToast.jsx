import { useToast } from "@chakra-ui/react"
import { useCallback } from "react"

export default function useCustomToast() {
    const toast = useToast()

    // title: string
    // description: string
    // status: "success" | "error"
    const showToast = useCallback(
        (title, description, status) => {
            toast({
                title,
                description,
                status,
                isClosable: true,
                position: "bottom-right",
            })
        },
        [toast]
    )

    // showToast is a function
    return showToast
}