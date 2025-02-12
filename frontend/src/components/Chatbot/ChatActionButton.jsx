import { Button, Icon } from "@chakra-ui/react"

export function ChatActionButton({ icon, children, ...rest }) {
    return (
        <Button
            bg="ui.main"
            size="sm"
            variant="primary"
            {...rest}
            leftIcon={<Icon as={icon} color="ui.light" />}
        >
            {children}
        </Button>
    )
}