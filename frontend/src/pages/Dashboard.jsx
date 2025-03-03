import React, { useState } from 'react'
import { 
  Box, 
  Heading, 
  Text, 
  Button, 
  VStack, 
  HStack, 
  Input,
  Checkbox,
  Spinner,
  Flex,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { mockApi } from '../mockApi'
import { toaster } from '../components/ui/toaster'

function Dashboard() {
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const queryClient = useQueryClient()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  
  // Fetch todos
  const todosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: () => mockApi.todos.getAll()
  })
  
  // Add todo mutation
  const addTodoMutation = useMutation({
    mutationFn: (title) => mockApi.todos.create({ title, completed: false }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      setNewTodoTitle('')
      toaster.show({
        title: 'Todo added',
        description: 'Your todo has been added successfully',
        meta: { closable: true, color: 'green' }
      })
    }
  })
  
  // Toggle todo mutation
  const toggleTodoMutation = useMutation({
    mutationFn: ({ id, completed }) => mockApi.todos.update(id, { completed }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })
  
  // Delete todo mutation
  const deleteTodoMutation = useMutation({
    mutationFn: (id) => mockApi.todos.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      toaster.show({
        title: 'Todo deleted',
        description: 'Your todo has been deleted',
        meta: { closable: true, color: 'red' }
      })
    }
  })
  
  const handleAddTodo = (e) => {
    e.preventDefault()
    if (!newTodoTitle.trim()) return
    addTodoMutation.mutate(newTodoTitle)
  }
  
  const handleToggleTodo = (id, completed) => {
    toggleTodoMutation.mutate({ id, completed: !completed })
  }
  
  const handleDeleteTodo = (id) => {
    deleteTodoMutation.mutate(id)
  }
  
  return (
    <Box>
      <Heading mb={6}>Dashboard</Heading>
      
      {/* Add Todo Form */}
      <Box mb={8}>
        <form onSubmit={handleAddTodo}>
          <HStack>
            <Input
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
              placeholder="Add a new todo..."
              flex="1"
            />
            <Button 
              type="submit" 
              variant="primary"
              isLoading={addTodoMutation.isPending}
              isDisabled={!newTodoTitle.trim()}
            >
              Add
            </Button>
          </HStack>
        </form>
      </Box>
      
      {/* Todo List */}
      <Box>
        <Heading size="md" mb={4}>Your Todos</Heading>
        
        {todosQuery.isLoading ? (
          <Flex justify="center" py={8}>
            <Spinner size="lg" color="ui.main" />
          </Flex>
        ) : todosQuery.isError ? (
          <Box textAlign="center" py={8} color="red.500">
            Error loading todos: {todosQuery.error.message}
          </Box>
        ) : todosQuery.data.length === 0 ? (
          <Box textAlign="center" py={8} color="gray.500">
            No todos yet. Add one above!
          </Box>
        ) : (
          <VStack align="stretch" spacing={3}>
            {todosQuery.data.map(todo => (
              <Box 
                key={todo.id}
                p={4}
                borderWidth="1px"
                borderRadius="md"
                borderColor={borderColor}
                bg={bgColor}
              >
                <Flex justify="space-between" align="center">
                  <Checkbox
                    isChecked={todo.completed}
                    onChange={() => handleToggleTodo(todo.id, todo.completed)}
                    colorScheme="green"
                  >
                    <Text
                      textDecoration={todo.completed ? 'line-through' : 'none'}
                      color={todo.completed ? 'gray.500' : 'inherit'}
                    >
                      {todo.title}
                    </Text>
                  </Checkbox>
                  
                  <IconButton
                    aria-label="Delete todo"
                    icon={<span>🗑️</span>}
                    variant="ghost"
                    colorScheme="red"
                    size="sm"
                    onClick={() => handleDeleteTodo(todo.id)}
                    isLoading={deleteTodoMutation.isPending && deleteTodoMutation.variables === todo.id}
                  />
                </Flex>
              </Box>
            ))}
          </VStack>
        )}
      </Box>
    </Box>
  )
}

export default Dashboard 