import { Box, HStack, Stack, Text, Tooltip } from '@chakra-ui/react'

export const PromptSuggestButton = ({ icon, title, description, onClick }) => {
  return (
    <Tooltip label="Click to send" rounded="md" placement="top">
      <Stack
        data-group
        as="button"
        bg="ui.light"
        borderWidth="1px"
        rounded="md"
        spacing="0"
        px="4"
        py="2"
        type="button"
        fontSize="sm"
        onClick={onClick}
      >
        <HStack>
          <Box color="ui.main">{icon}</Box>
          <Text align="start" fontWeight="medium" _groupHover={{ color: 'ui.main' }}>
            {title}
          </Text>
        </HStack>
        <Text align="start" color="ui.dim">
          {description}
        </Text>
      </Stack>
    </Tooltip>
  )
}

