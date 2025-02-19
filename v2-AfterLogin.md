# React - Redirect After Login

## Structure
```
react-fastapi-app/
├── frontend/
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── theme.jsx
│       └── componets/
│            ├── HomeScreen.jsx
│            ├── Register.jsx
│            ├── LoginStaff.jsx
│            └── Login.js
│
└── v1-HomeScreen.md
```

### Authentication Structure
```
src/
├── components/
│   └── Auth/
│       ├── AuthLayout.jsx       # Reusable layout for authentication pages (LoginPage, RegisterPage, LoginStaffPage)
│       ├── RegisterForm.jsx     # Form component for client registration
│       ├── LoginForm.jsx        # Form component for client login
│       └── LoginStaffForm.jsx   # Form component for staff login
|
├── features/
│   └── Auth/
│       ├── RegisterPage.jsx     # Client Register page
│       ├── LoginPage.jsx        # Client Login page
│       └── LoginStaffPage.jsx   # Staff Login page
|
├── hooks/
│   └── useAuth.js               # Custom hook for authentication
|
```

### Target Directory Structure
```
src/
├── assets/               # Static assets like images, fonts, icons
├── components/           # Shared reusable components
│   ├── Auth/             # Authentication components (e.g., Login, Register)
│   ├── Layout/           # Shared layout components (Sidebar, UserMenu, etc.)
│   ├── Table/            # Table components (e.g., DataTable)
│   └── Chatbot/          # Chatbot-specific UI components
|
├── features/             # Feature-specific pages or components
│   ├── Auth/             # Login and registration pages
│   ├── StaffConsole/     # Staff console pages (Home, Uploader, Scraper, Admin)
│   │   ├── routes/       # Route definitions for console pages
│   │   ├── Home/         # Home page
│   │   ├── FileUploader/ # File uploader page
│   │   ├── WebScraper/   # Web scraper page
│   │   └── AdminControl/ # Admin control page
│   └── ClientChatbot/    # Chatbot UI page
|
├── hooks/                # Custom React hooks
|
├── router/               # Centralized routing definitions for TanStack Router
│   └── router.jsx        # Main route configuration
|
├── services/             # API services and backend communication
|
├── utils/                # Utility functions/helpers
|
├── App.jsx               # Main app component
├── main.jsx              # Entry point
├── theme.jsx             # design theme
└── styles/               # Global or shared styles (CSS/SCSS modules)
```

## Workflow Step 1 - Home Screen
```
npm install react-icons
```

## Chat Interface
### Workflow
1. Initial Entry (New Chat):
```
URL: /chat?sso=
Component: ChatStartPage
State: Empty chat, ready for first message
Actions:
- User enters first message
- System generates new conversation ID (Session ID)
- Redirects to conversation URL
```
2. Active Conversation:
```
URL: /chat/c/[conversation-id]
Component: ChatConversation
State: Existing chat with message history
Actions:
- Load conversation history for this ID
- Show messages
- Allow continued conversation
```
3. Route Structure:
```
/chat (ChatPage - Provider)
  ├── /?sso= (ChatStartPage)
  └── /c/[conversation-id] (ChatConversation)
```
4. Navigation Flow:
```
Start
    ↓
/chat?sso=
    ↓ [User sends first message]
Generate conversation ID
    ↓
Redirect to /chat/c/[new-id]
    ↓
Load/Show conversation
```
5. State Management:
```
ChatContext
├── conversations
│   └── { id, messages[], status }
├── currentConversationId
└── loading/error states
```
6. TODO list:
    1. Setting up the routes at `router.jsx`
    2. Modifying the `ChatContext`
    3. Updating the `ChatStartPage`
    4. Updating the ChatConversation

## Resources
- [OpenAPI Generator](https://openapi-generator.tech/#try)
- [Chakra UI - v2 - file upload](https://gist.github.com/brenopolanski/5efe54b46cad0882b3ce41dc8db64608)
- [How to build a GPT-3 powered chatbot in Next.js](https://dieudonneawa7.medium.com/how-to-build-a-gpt-3-powered-chatbot-in-next-js-78e0107a99fb)
- [ruizguille/tech-trends-chatbot](https://github.com/ruizguille/tech-trends-chatbot/tree/master)
- [dieudonneAwa/mini-chatGPT](https://github.com/dieudonneAwa/mini-chatGPT/tree/main)
- [mxvsh/chakra-ui-simple-chat-ui.tsx](https://gist.github.com/mxvsh/5f7d1ece606ec4baf916334386e1db2a)
- [ioanmo226/chatgpt-react-application](https://github.com/ioanmo226/chatgpt-react-application/tree/master)
