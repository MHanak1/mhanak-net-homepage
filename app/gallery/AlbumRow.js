import Image from 'next/image'
//import getBase64 from '@/lib/getLocalBase64'
import { POSTS_PER_PAGE, pb } from '@/public/globals.js'
import { BiSolidImageAlt } from "react-icons/bi";

export default function Gallery_list (album) {
	const { id, title, description, images, date, created, updated } = album || {}

	return (
		<div className="flex flex-col" key = {id}>
			<span className="text-3xl ml-5 sm:ml-10 mt-4">
				<strong> {title} </strong> <span className="dark:text-gray-400 text-gray-600"> {", " + parseInt(date)} </span>
			</span>
			<div className="flex flex-row gap-5 overflow-scroll py-5 pr-5">
				{
					images.map((image) => {
						const img_url = pb.files.getUrl(album, image);
						return(Gallery_image(img_url, image))
					})
				}
			</div>
		</div>
	)
}

function Gallery_image (img_url, img_id) {
	//const BlurDataURL = await getBase64(img_url)

	return (
		<Image
			src={img_url}
			width={600}
			height={400}
			quality={95}
			key={img_id}
			alt={""}
			className="rounded-xl h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px]  w-max shadow-md shadow-gray-700 dark:shadow-black"
		/>

	)
}
