import Image from 'next/image'
import Link from 'next/link'
import { useState, useCallback, useEffect } from 'react';
import { POSTS_PER_PAGE, pb } from '@/public/globals.js'
import { BiSolidImageAlt } from "react-icons/bi";

export default function Gallery_list (album) {
	const { id, title, description, images, date, created, updated } = album || {}

	return (
		<div className="flex flex-col" key = {id}>
			<Link className="text-3xl ml-5 sm:ml-10 mt-4 group size-fit" href = {"/gallery/album/" + id}>
				<strong className="transition-all group-hover:text-accent"> {title} </strong> <span className="dark:text-gray-400 text-gray-600"> {", " + parseInt(date)} </span>
			</Link>
			<div className="flex flex-row gap-5 overflow-x-scroll overflow-y-visible p-5">
				{
					images.slice(0, 10).map((image) => {
						const img_url = pb.files.getUrl(album, image);
						return(Gallery_image(img_url, image))
					})
				}
				<a className="rounded-xl hover:rounded-none hover:scale-105 transition-all h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px] aspect-[16/10] shadow-lg shadow-gray-700 dark:shadow-black flex items-center dark:bg-gray-900 bg-gray-200 group" href = {"/gallery/album/" + id} key = "open_album">
					<span className="m-auto text-2xl group-hover:text-accent text-gray-600 transition-all">
						Open the entire album
					</span>
				</a>
			</div>
		</div>
	)
}

function Gallery_image (img_url, img_id) {
	//const BlurDataURL = await getBase64(img_url)
	const [showModal, setShowModal] = useState(false);

	const escFunction = useCallback((event) => {
	if (event.key === "Escape") {
	  setShowModal(false)
	}
	}, []);

	useEffect(() => {
	document.addEventListener("keydown", escFunction, false);

	return () => {
	  document.removeEventListener("keydown", escFunction, false);
	};
	}, [escFunction]);

	return (
		<div 
		className=" h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px] aspect-[16/10]" 
		key = {img_id}>
			<Image
				src={img_url}
				width={600}
				height={400}
				quality={90}
				alt={""}
				onClick={() => setShowModal(true)}
				className="rounded-xl hover:rounded-none hover:scale-105 transition-all object-cover size-full shadow-lg shadow-gray-700 dark:shadow-black"
			/>
			{showModal && <div className="fixed size-full backdrop-brightness-75 backdrop-blur-sm left-0 top-0 p-2 sm:p-10 " onClick={() => setShowModal(false)}>
				<Image
					src={img_url}
					width={900}
					height={600}
					quality={95}
					alt={""}
					className="size-full object-contain"
				/>
			</div>
			}
			
		</div>
	)
}
