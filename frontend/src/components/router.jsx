import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'
import DemoLayout from './Dashboard/DemoLayout'
import DashboardHome from './Dashboard/DashboardHome'
import DashboardScraper from './Dashboard/Scraper'
import DashboardUploader from './Dashboard/Uploader'
import DashboardAdmin from './Dashboard/Admin'
import HomeScreen from './HomeScreen'
// import Chatbot from './Chatbot'

import LoginStaffPage from '../features/Auth/LoginStaffPage'
import RegisterPage from '../features/Auth/RegisterPage'
import LoginPage from '../features/Auth/LoginPage'
import ChatPage from '../features/Chat/ChatPage'
import ChatStartPage from '../features/Chat/ChatStartPage'
import ChatConversation from '../features/Chat/ChatConversation'

// Create a root route
const rootRoute = createRootRoute()

// Create public routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomeScreen,
})

/*
 Login and Register routes
*/
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
})

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: RegisterPage,
})

const loginStaffRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login-staff',
  component: LoginStaffPage,
})

/*
 Staff Dashboard routes
*/
// Create dashboard layout route
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: DemoLayout,
})

// Create dashboard child routes
const dashboardHomeRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: '/', // This matches '/dashboard' as it's nested
  component: DashboardHome,
})

const dashboardScraperRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: '/scraper', // This matches '/dashboard/scraper' as it's nested
  component: DashboardScraper,
})

const dashboardUploaderRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: '/uploader', // This matches '/dashboard/uploader' as it's nested
  component: DashboardUploader,
})

const dashboardAdminRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: '/admin', // This matches '/dashboard/admin' as it's nested
  component: DashboardAdmin,
})

/*
 Client Chat routes
*/
const chatbotRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/chat',
  component: ChatPage,
})

// Define route paths as constants for maintainability
const CHAT_ROUTES = {
  root: "/chat",
  start: "/",
  conversation: "/c/$conversationId",
}

// Main chat route with provider
const chatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: CHAT_ROUTES.root,
  component: ChatPage,
})

// Chat start route with SSO query parameter
const chatStartRoute = createRoute({
  getParentRoute: () => chatRoute,
  path: CHAT_ROUTES.start, // matches /chat
  component: ChatStartPage,
  validateSearch: (search) => ({
    sso: typeof search.sso === "string" ? search.sso : "",  // Make sso parameter optional
  }),
})

// Chat conversation route with Session ID parameter
const chatConversationRoute = createRoute({
  getParentRoute: () => chatRoute,
  path: CHAT_ROUTES.conversation,  // matches /chat/c/[id]
  component: ChatConversation,
})


// Finally, create the router for all routes
const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  loginStaffRoute,
  dashboardRoute.addChildren([
    dashboardHomeRoute,
    dashboardScraperRoute,
    dashboardUploaderRoute,
    dashboardAdminRoute,
  ]),
  // chatRoute.addChildren([
  //   chatStartRoute,
  //   chatConversationRoute,
  // ]),
  chatbotRoute
])

export const router = createRouter({ routeTree })
