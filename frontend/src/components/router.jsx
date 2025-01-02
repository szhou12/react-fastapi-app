import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'
import DemoLayout from './Dashboard/DemoLayout'
import DashboardHome from './Dashboard/DashboardHome'
import DashboardScraper from './Dashboard/Scraper'
import DashboardUploader from './Dashboard/Uploader'
import DashboardAdmin from './Dashboard/Admin'
import HomeScreen from './HomeScreen'
import Login from './Login'
import Register from './Register'
import LoginStaff from './LoginStaff'
import Chatbot from './Chatbot'

// Create a root route
const rootRoute = createRootRoute()

// Create public routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomeScreen,
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
})

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: Register,
})

const loginStaffRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login-staff',
  component: LoginStaff,
})

const chatbotRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/chatbot',
  component: Chatbot,
})

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

// Create the router
const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  loginStaffRoute,
  chatbotRoute,
  dashboardRoute.addChildren([
    dashboardHomeRoute,
    dashboardScraperRoute,
    dashboardUploaderRoute,
    dashboardAdminRoute,
  ])
])

export const router = createRouter({ routeTree })
