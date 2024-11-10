import Link from 'next/link'
import { pb } from '@/public/globals.js'
import { Footer, Navbar } from '@/app/PageComponents'
import Gallery_image from '@/app/gallery/GalleryImage'
import { TiArrowLeft } from "react-icons/ti";

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


	const album = 
		await pb.collection('albums').getOne(params.id, {
			
		});
	const { id, title, description, images, date, created, updated } = album || {}
	
	return (
		<>
			<Navbar />

			<div className="px-2"> 
				<Link href = "/gallery" className="flex flex-row items-center py-2 px-10 text-xl dark:text-gray-400 text-gray-600 hover:text-accent">
					<TiArrowLeft /> Go back to the gallery
				</Link>

				<div className="text-3xl sm:text-5xl sm:ml-5 ml-2 mb-2 size-fit">
					<strong> {title} </strong> <span className="dark:text-gray-400 text-gray-600"> {", " + parseInt(date)} </span>
				</div>
				
				<div className = "grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-5 p-2 sm:p-5">
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

