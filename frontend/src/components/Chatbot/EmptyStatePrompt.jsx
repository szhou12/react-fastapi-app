import { Center, Circle, Icon, Text } from '@chakra-ui/react'
import { FiMic } from 'react-icons/fi'

export const EmptyStatePrompt = ({ children }) => {
  return (
    <Center height="full" gap="6">
      <Circle
        bg="ui.main"
        color="ui.dark"
        size="12"
        outline="8px solid"
        outlineColor="ui.secondary"
      >
        <Icon as={FiMic} color="ui.light" />
      </Circle>
      <Text fontSize="xl" color="ui.dim" fontWeight="medium">
        {children}
      </Text>
    </Center>
  )
}
