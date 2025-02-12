import { forwardRef } from 'react'
import { Textarea } from '@chakra-ui/react'

export const ChatTextarea = forwardRef((props, ref) => {
  const adjustHeight = (textarea) => {
    textarea.style.height = 'auto'
    const borderHeight = textarea.offsetHeight - textarea.clientHeight
    textarea.style.height = textarea.scrollHeight + borderHeight + 'px'
  }
  
  return (
    <Textarea
      name="message"
      placeholder="Ask me anything about clean energy..."
      maxHeight="200px"
      paddingEnd="9"
      resize="none"
      rows={2}
      ref={ref}
      {...props}
      _placeholder={{ color: 'ui.dim' }}
      onInput={(event) => {
        adjustHeight(event.currentTarget)
        props.onInput?.(event)
      }}
      onKeyDown={(event) => {
        // Send message on Enter without Shift key
        if (event.key === 'Enter' && !event.shiftKey) {
          // Prevents the default Enter key behavior (creating a new line in textarea)
          event.preventDefault()
          
          // No explicit setting of ref.current.value
          // as Browser handles ref.current.value updates automatically

          // Submit form
          // fef.current.form finds the parent form <Box as="form">
          if (ref.current?.form) {
            ref.current.form.requestSubmit()
          }
        }
        // handle additional onKeyDown event if customized by parent component that is passed in props
        props.onKeyDown?.(event)
      }}
    />
  )
})

ChatTextarea.displayName = 'ChatTextarea'
