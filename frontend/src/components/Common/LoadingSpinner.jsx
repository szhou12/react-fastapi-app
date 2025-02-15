import { Flex, Spinner } from '@chakra-ui/react'

const LoadingSpinner = () => {
    return (
        <Flex
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(255, 255, 255, 0.8)"
            zIndex="overlay"
            justify="center"
            align="center"
        >
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="primary.500"
                size="xl"
            />
        </Flex>
    )
}

export default LoadingSpinner
