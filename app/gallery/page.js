import AlbumList from './AlbumList'
import Link from 'next/link'
import { POSTS_PER_PAGE, pb } from '@/public/globals.js'
import { TiCamera, TiImage, TiPencil, TiCode } from "react-icons/ti";
import { BiChevronDown, BiSolidImageAlt, BiLandscape } from "react-icons/bi";
import { Footer } from '../PageComponents'

export default async function AlbumPage() {
	const albums = await pb.collection('albums').getList(1, POSTS_PER_PAGE, {
		sort: '-date, title',
	});

	//return (<div> hello </div>)
	return( 
		<div className="dark:bg-gray-800 bg-gray-300 dark:text-white text-black overflow-hidden">

		<div className="grid grid-cols-3 max-w-[2000px] p-4 justify-center it

This won't work for the red links, because the selectors inside :is() cems-center mx-auto font-[family-name:var(--font-geist-sans)]">
			<div className="flex flex-row space-x-6 size-min self-end">
				<Link href="/">
					<button className="dark:bg-white dark:text-black hover:bg-accent bg-black text-white small-button">
						Home
					</button>
				</Link>
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
				<button className="dark:bg-white dark:text-black hover:bg-accent bg-black text-white small-button invisible">
					Login
				</button>
			</div>
		</div>

		<AlbumList initialAlbums={albums} />
		<Footer />
	</div>
	)
}
