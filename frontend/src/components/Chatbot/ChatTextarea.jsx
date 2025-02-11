import { Textarea } from '@chakra-ui/react'

export const ChatTextarea = (props) => {
  return (
    <Textarea
      name="message"
      placeholder="Ask me anything about clean energy..."
      maxHeight="200px"
      paddingEnd="9"
      resize="none"
      rows={2}
      {...props}
      _placeholder={{ color: 'ui.dim' }}
      onInput={(event) => {
        const textarea = event.currentTarget
        textarea.style.height = 'auto'
        const borderHeight = textarea.offsetHeight - textarea.clientHeight
        textarea.style.height = textarea.scrollHeight + borderHeight + 'px'
        props.onInput?.(event)
      }}
    />
  )
}
