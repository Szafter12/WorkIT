import { Layout } from '../../components/Layout/Layout'
import { LoginPanel } from '../../components/LoginPanel/LoginPanel'

export function Register() {
	return (
		<Layout isCentered={true}>
			<LoginPanel register={true} />
		</Layout>
	)
}
