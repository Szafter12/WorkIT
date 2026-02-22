import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { MainPageLoader } from '../api/MainPageLoader'
import { Login } from '../pages/LoginPanel/Login'
import { Work } from '../pages/Work/Work'
import { Register } from '../pages/RegisterPanel/Register'
import { UserPanel } from '../pages/UserPanel/UserPanel'
import { JobPostDetail } from '../pages/JobPostDetail/JobPostDetail'
import { ProtectedRoute } from '../guards/ProtectedRoute/ProtectedRoute'
import { GuestRoute } from '../guards/GuestRoute/GuestRoute'

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Home />,
			loader: MainPageLoader,
		},
		{
			path: '/logowanie',
			element: (
				<GuestRoute>
					<Login />
				</GuestRoute>
			),
		},
		{
			path: '/rejestracja',
			element: (
				<GuestRoute>
					<Register />
				</GuestRoute>
			),
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
		{
			path: '/posts/:id',
			element: <JobPostDetail />
		}
	],
	{
		future: {
			v7_startTransition: true,
		},
	},
)
