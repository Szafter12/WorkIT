import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { MainPageLoader } from '../api/MainPageLoader'
import { Login } from '../pages/LoginPanel/Login'
import { Work } from '../pages/Work/Work'
import { Register } from '../pages/RegisterPanel/Register'

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
	],
	{
		future: {
			v7_startTransition: true,
		},
	}
)
