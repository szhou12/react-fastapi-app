import React from 'react'
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { Link } from '@tanstack/react-router'

function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, ui.main, ui.secondary)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        as={Link}
        to="/"
        variant="primary"
      >
        Go to Home
      </Button>
    </Box>
  )
}

export default NotFound 