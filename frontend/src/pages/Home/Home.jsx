import { Header } from '../../components/Header/Header'
import { Layout } from '../../components/Layout/Layout'
import IMG from '../../assets/images/home-header.jpg'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { useLoaderData } from 'react-router-dom'
import {useFetchPosts} from "../../hooks/useFetchPosts.js";

export function Home() {
	const { specializations, tech, filters } = useLoaderData()

	return (
		<Layout>
			<Header subHeading='od najlepszych pracodawców' img={IMG}>
				5067 sprawdzonych ofert pracy
			</Header>
			{specializations && tech ? <SearchBar tech={tech} specializations={specializations} filters={filters} /> : <p>Wczytywanie...</p>}

			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</Layout>
	)
}
