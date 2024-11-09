import Link from 'next/link'

export default async function ProjectPage({params}){
	return (<div className="flex flex-col items-center p-32">
		<span className="text-3xl mx-auto my-10 font-bold">
			This page is under construction.
		</span>
		<Link href = "/" className="underline">
			Go back to homepage
		</Link>
	</div>)
}


