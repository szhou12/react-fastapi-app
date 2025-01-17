import { Button, Flex } from "@chakra-ui/react"

// hasNextPage?: boolean
// hasPreviousPage?: boolean
// onChangePage: (newPage: number) => void
// page: number
const PaginationFooter = ({ hasNextPage, hasPreviousPage, onChangePage, page }) => {
    return (
        <Flex justifyContent="flex-end" alignItems="center" gap={4} mt={4} directio="row">
            <Button onClick={() => onChangePage(page - 1)} isDisabled={!hasPreviousPage || page <= 1}>
                Previous
            </Button>
            <span>Page {page}</span>
            <Button onClick={() => onChangePage(page + 1)} isDisabled={!hasNextPage}>
                Next
            </Button>
        </Flex>
    )
}

export default PaginationFooter