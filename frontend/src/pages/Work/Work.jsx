import { Layout } from '../../components/Layout/Layout'
import WorkView from '../../components/WorkView/WorkView'
import {useLocation} from "react-router-dom";
import {useFetchPosts} from "../../hooks/useFetchPosts.js";

export function Work() {
    const location = useLocation()
    const filters = location.state?.filters ?? []
    const {posts, setPosts} = useFetchPosts(
        filters.tech || [],
        filters.specializations || [],
        filters.level || [],
        filters.contract || [],
        filters.dimension || [],
        filters.mode || []
    )

	return (
		<Layout abs={true}>
			<WorkView posts={posts.data} />
		</Layout>
	)
}
