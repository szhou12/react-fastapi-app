import { Spinner } from '@chakra-ui/react'

const LoadingSpinner = () => {
    return (
        <Spinner
            thickness="4px"
            color="ui.main"
            emptyColor="gray.200"
            // width="20px"     // Fixed width
            // height="20px"    // Same as width for perfect circle
        />
    )
}

export default LoadingSpinner
