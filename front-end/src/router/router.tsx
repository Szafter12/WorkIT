import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { MainPageLoader } from '../api/MainPageLoader'

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Home />,
			loader: MainPageLoader,
		},
	],
	{
		future: {
			v7_startTransition: true,
		},
	}
)
