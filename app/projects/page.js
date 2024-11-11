import ProjectList from './ProjectList'
import { POSTS_PER_PAGE, pb } from '@/public/globals.js'
import { Footer, Navbar } from '@/app/PageComponents'

export const dynamic = 'auto',
   dynamicParams = true,
   revalidate = 0, //setting this to anything other than 0 causes the build to fail. why? :shrug:
   fetchCache = 'default-no-store'

export const metadata = {
  title: 'Projects - MHanak.net'
}

export default async function ProjectsPage() {

	const projects = await pb.collection('projects').getList(1, POSTS_PER_PAGE, {
		sort: '-date, -created, title',
	});

	//return (<div> hello </div>)
	return( 
		<>
			<Navbar />
			<ProjectList initialProjects={projects} />
			<Footer />
		</>
	)
}
