// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomeScreen from './components/HomeScreen';
// import Login from './components/Login';
// import Register from './components/Register';
// import LoginStaff from './components/LoginStaff';
// import Layout from './components/Layout';
// import Chatbot from './components/Chatbot';
// import DashboardHome from './components/Dashboard/DashboardHome';
// import DashboardScraper from './components/Dashboard/Scraper';
// import DashboardUploader from './components/Dashboard/Uploader';
// import DashboardAdmin from './components/Dashboard/Admin';
// import PrivateRoute from './components/PrivateRoute';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomeScreen />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login-staff" element={<LoginStaff />} />
//         <Route path="/chatbot" element={<Chatbot />} />
//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               <Layout />
//             </PrivateRoute>
//           }
//         >
//           <Route index element={<DashboardHome />} />
//           <Route path="scraper" element={<DashboardScraper />} />
//           <Route path="uploader" element={<DashboardUploader />} />
//           <Route path="admin" element={<DashboardAdmin />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from '@tanstack/react-router'
import { router } from './components/router'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

export default App;