import { TiImage, TiCamera, TiPencil, TiCode } from "react-icons/ti";
import { BiChevronDown, BiSolidImageAlt } from "react-icons/bi";
import { useTheme } from 'next-themes'
import { pocketbase_url, pb } from '../public/globals'
import { ThemeChanger } from './UIComponents'
import { Footer } from './PageComponents'

import Image from "next/image";
import PocketBase from 'pocketbase';



export const dynamic = 'auto',
   dynamicParams = true,
   revalidate = 0, //setting this to anything other than 0 causes the build to fail. why? :shrug:
   fetchCache = 'default-no-store'

export default async function Home() {

	const projects = await pb.collection('projects').getList(1, 10, {
		sort: '-created,title',
	});

	return (
<div className="dark:bg-gray-800 bg-gray-300 dark:text-white text-black justify-items-center justify-center text-center font-[family-name:var(--font-geist-sans)] ">
	<div className="min-h-[800px] dark:bg-gray-900 bg-gray-200 shadow-md dark:shadow-black shadow-gray-500">
		<div className="grid grid-cols-3 max-w-[2000px] p-4 justify-center items-center mx-auto">
			<div className="flex flex-row space-x-6 size-min self-end">
				<ThemeChanger/>
			</div>
			<div className="flex flex-row iitems-center justify-center sm:space-x-6 space-x-2">
				<a href="/projects">
					<button className="highlightable hover:text-accent small-button">
						<TiCode/> <span className="mt-0"> Projects </span>
					</button>
				</a>	
				<button className="highlightable hover:text-accent small-button group">
					<TiImage/> <span className="mt-0"> Gallery </span> <BiChevronDown className="ml-[-4px] animate-flip" />
					<div className="dropdown self-start dark:text-white text-black border-gray-500 mt-12 ml-[-8px]">
						<a className="highlightable flex flex-row items-center gap-1 px-2 rounded-xl w-fit" href="/gallery"> <TiCamera/> Photos </a>
						<a className="              flex flex-row items-center gap-1 px-2 rounded-xl w-fit text-gray-500"> <TiPencil/> Drawings </a>
					</div>
				</button>
			</div>
			<div className="flex flex-row-reverse space-x-6 size-min ml-auto">
				{<button className="dark:bg-white dark:text-black hover:bg-accent bg-black text-white small-button invisible">
					Login
				</button>}
			</div>
		</div>

		<h1 className="text-5xl sm:text-7xl xl:text-8xl mt-20 mb-2 font-bold">
			Welcome, traveler.
		</h1>
		<p className="text-l sm:text-2xl xl:text-3xl text-accent">
			You may rest here for a while.
		</p>
	</div>

	<div className="flex flex-col items-start font-[family-name:var(--font-geist-mono)] pt-5">

		<span className="text-3xl ml-5 sm:ml-10">
			Projects
		</span>

		
		<div className="flex flex-row p-5 gap-5 w-x overflow-scroll">
			{
				projects.items.map((project, index) =>{
					return (Tile (project))
				})

			}
		</div>

	</div>
	<Footer/>

</div>
  );
}

function Tile (project) {
	const { id, title, description, image, created, updated } = project || {}
	const img_url = pb.files.getUrl(project, image, {'thumb': '250x500'});
	return (
		<div className="flex flex-col min-w-fit h-fit items-center p-4 space-y-4 rounded-xl shadow-lg transition-all
		shadow-gray-500 dark:shadow-black hover:shadow-accent dark:bg-gray-900 bg-gray-200 font-[family-name:var(--font-geist-mono)]"
		key = {id}>
			{img_url &&
				<Image
					src={img_url}
					width={500}
					height={250}
					quality={95}
					alt={description}
					className="rounded-xl h-[150px] sm:h-[250px] w-max shadow-md shadow-gray-700 dark:shadow-black"
				/>
			}
			{
			!img_url &&
				<div className = "rounded-xl size-[150px] sm:size-[250px] shadow-md shadow-gray-700 dark:shadow-black dark:bg-gray-800 bg-gray-300 flex items-center">
					<BiSolidImageAlt className="size-20 dark:text-gray-700 text-gray-400 mx-auto my-auto"/>
				</div>
			}
			<span className="font-bold mr-auto text-left">
				{title}
			</span>
		</div>
	)
}


