import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { MainPageLoader } from '../api/MainPageLoader'
import { Login } from '../pages/LoginPanel/Login'
import { Work } from '../pages/Work/Work'
import { Register } from '../pages/RegisterPanel/Register'
import { UserPanel } from '../pages/UserPanel/UserPanel'
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute'

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Home />,
			loader: MainPageLoader,
		},
		{
			path: '/logowanie',
			element: <Login />,
		},
		{
			path: '/rejestracja',
			element: <Register />,
		},
		{
			path: '/praca',
			element: <Work />,
		},
		{
			path: '/profile',
			element: (
				<ProtectedRoute>
					<UserPanel />
				</ProtectedRoute>
			),
		},
	],
	{
		future: {
			v7_startTransition: true,
		},
	},
)
