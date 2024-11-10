import Link from 'next/link'
import { POSTS_PER_PAGE, pb } from '@/public/globals.js'
import { BiSolidImageAlt } from "react-icons/bi";
import Gallery_image from './GalleryImage'

export default function Gallery_list (album) {
	const { id, title, description, images, date, created, updated } = album || {}

	return (
		<div className="flex flex-col" key = {id}>
			<Link className="text-3xl ml-5 sm:ml-10 mt-4 group size-fit flex flex-row" href = {"/gallery/album/" + id}>
				<strong className="transition-all group-hover:text-accent"> {title} </strong> <span className="dark:text-gray-400 text-gray-600"> {", " + parseInt(date)} </span>
			</Link>
			<div className="flex flex-row gap-5 overflow-x-scroll overflow-y-visible p-5">
				{
					images.slice(0, 10).map((image) => {
						const img_url = pb.files.getUrl(album, image);
						return(<Gallery_image img_url={img_url} image={image} key={image} props="h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px] aspect-[16/10]"/>)
					})
				}
				<a className="rounded-xl hover:rounded-none hover:scale-105 transition-all h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px] aspect-[16/10] shadow-lg shadow-gray-700 dark:shadow-black flex items-center dark:bg-gray-900 bg-gray-200 group font-[family-name:var(--font-geist-mono)]" href = {"/gallery/album/" + id} key = "open_album">
					<span className="m-auto text-lg sm:text-2xl group-hover:text-accent text-gray-600 transition-all">
						Open the entire album
					</span>
				</a>
			</div>
		</div>
	)
}

