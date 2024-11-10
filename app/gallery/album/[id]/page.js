import Link from 'next/link'
import { pb } from '@/public/globals.js'
import { Footer, Navbar } from '@/app/PageComponents'
import Gallery_image from '@/app/gallery/GalleryImage'
import { TiArrowLeft } from "react-icons/ti";
import Head from 'next/head'

export const dynamic = 'auto',
   dynamicParams = true,
   revalidate = 0, //setting this to anything other than 0 causes the build to fail. why? :shrug:
   fetchCache = 'default-no-store'

export async function generateMetadata({ params }) {
	const album = 
		await pb.collection('albums').getOne(await params.id, {
			fields: 'title, date',
			requestKey: "getTitle"
		});

	const { id, title, description, images, date, created, updated } = album || {}

	return {
		title: `${title} ${parseInt(date)} Album - MHanak.net`,
		description: description,
	};
}


export default async function AlbumPage({params}){
	/*
	return (<div className="flex flex-col items-center p-32">
		<span className="text-3xl mx-auto my-10 font-bold">
			This page is under construction.
		</span>
		<Link href = "/" className="underline">
			Go back to homepage
		</Link>
	</div>)*/

	await params;

	const album = 
		await pb.collection('albums').getOne(params.id, {
			requestKey: "getContents"
		});
	const { id, title, description, images, date, created, updated } = album || {}
	
	return (
		<>
			<Head>
				<title>{title} {parseInt(date)} Album - MHanak.net</title>
				<meta name='description' content={description} />
			</Head>

			<Navbar />

			<div className="px-5 sm:px-10 flex flex-col gap-2 sm:gap-5 sm:mt-1 mb-4"> 
				<Link href="/gallery" className="flex flex-row items-center sm:mx-2 sm:text-2xl dark:text-gray-400 text-gray-600 hover:text-accent">
					<TiArrowLeft /> Go back to the gallery
				</Link>

				<div className="text-3xl sm:text-5xl size-fit flex flex-row">
					<strong>{title}</strong><span className="dark:text-gray-400 text-gray-600"> {", " + parseInt(date)} </span>
				</div>

				<div className="sm:text-2xl dark:text-gray-300 text-gray-700 ">
					{description}
				</div>
				
				<div className = "grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 my-2">
					{
						images.map((image) => {
							const img_url = pb.files.getUrl(album, image);
							return(<Gallery_image img_url={img_url} image={image} key={image} props="aspect-[16/10]"/>)
						})
					}
				</div>
			</div>

			<Footer />
		</>
	)

}

