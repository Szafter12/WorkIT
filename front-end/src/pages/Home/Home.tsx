import { Header } from '../../components/Header/Header'
import { Layout } from '../../components/Layout/Layout'
import IMG from '../../assets/images/home-header.jpg'
import { SearchBar } from '../../components/SearchBar/SearchBar'

export function Home() {
	return (
		<Layout>
			<Header subHeading='od najlepszych pracodawców' img={IMG}>
				5067 sprawdzonych ofert pracy
			</Header>
			<SearchBar />
		</Layout>
	)
}
