import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from '@tanstack/react-router'
// import { router } from './components/router'

import { Box, Button, Card, Flex, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { ColorModeButton } from "./components/ui/color-mode"


// const queryClient = new QueryClient()

// function App() {
// 	return (
// 		<QueryClientProvider client={queryClient}>
// 			<RouterProvider router={router} />
// 		</QueryClientProvider>
// 	)
// }

// export default App;



// Create a query client
const queryClient = new QueryClient()

// Theme test component to verify all theme elements
function ThemeTest() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue("ui.light", "ui.dark")
  const textColor = useColorModeValue("ui.dark", "ui.light")
  
  return (
    <Box p={8} bg={bgColor} color={textColor} minH="100vh">
      <Stack spacing={8} maxW="800px" mx="auto">
        <Heading>Chakra UI v3 Theme Test</Heading>
        
        <Card p={6}>
          <Heading size="md" mb={4}>Color Mode</Heading>
          <Flex gap={4} align="center">
            <Text>Current mode: {colorMode}</Text>
            <ColorModeButton />
            <Button onClick={toggleColorMode}>Toggle Mode</Button>
          </Flex>
        </Card>
        
        <Card p={6}>
          <Heading size="md" mb={4}>Button Variants</Heading>
          <Flex gap={4} wrap="wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="dashed">Dashed</Button>
            <Button variant="text">Text</Button>
            <Button variant="ghost">Ghost</Button>
          </Flex>
        </Card>
        
        <Card p={6}>
          <Heading size="md" mb={4}>Color Tokens</Heading>
          <Flex gap={4} wrap="wrap">
            <Box p={4} bg="ui.main" color="white">ui.main</Box>
            <Box p={4} bg="ui.secondary" color="ui.dark">ui.secondary</Box>
            <Box p={4} bg="ui.success" color="white">ui.success</Box>
            <Box p={4} bg="ui.danger" color="white">ui.danger</Box>
            <Box p={4} bg="ui.darkSlate" color="white">ui.darkSlate</Box>
            <Box p={4} bg="ui.dim" color="white">ui.dim</Box>
          </Flex>
        </Card>
        
        <Card p={6}>
          <Heading size="md" mb={4}>Tabs Component</Heading>
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text>Tab 1 Content</Text>
              </TabPanel>
              <TabPanel>
                <Text>Tab 2 Content</Text>
              </TabPanel>
              <TabPanel>
                <Text>Tab 3 Content</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
        
        {/* <Card p={6}>
          <Heading size="md" mb={4}>Router Integration</Heading>
          <Button onClick={() => router.navigate({ to: '/' })}>
            Go to Router Home
          </Button>
        </Card> */}
      </Stack>
    </Box>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Comment out the router for now to test the theme */}
      {/* <RouterProvider router={router} /> */}
      <ThemeTest />
    </QueryClientProvider>
  )
}

export default App;