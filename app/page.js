'use client'

import Image from "next/image";
import { TiCamera, TiCode } from "react-icons/ti";
import { BsMoonStarsFill, BsSunFill, BsGithub, BsMastodon, BsDiscord} from "react-icons/bs";
import { useTheme } from 'next-themes'

export default function Home() {
	return (
<div className="dark:bg-gray-800 bg-gray-300 dark:text-white text-black justify-items-center justify-center text-center font-[family-name:var(--font-geist-sans)] ">
	<div className="min-h-[800] dark:bg-gray-900 bg-gray-200 shadow-md dark:shadow-black shadow-gray-500">
		<div className="flex flex-row max-w-[2000] p-4 justify-between items-center mx-auto">
			<div className="flex flex-row space-x-6 size-min">
				<ThemeChanger/>
			</div>
			<div className="flex flex-row iitems-center justify-center sm:space-x-6 space-x-2 size-max">
				<button className="highlightable hover:text-accent small-button">
					<TiCamera/> <span className="mt-0"> Gallery </span>
				</button>
				<button className="highlightable hover:text-accent small-button">
					<TiCode/> <span className="mt-0"> Projects </span>
				</button>
			</div>
			<div className="flex flex-row-reverse space-x-6 size-min">
				<button className="dark:bg-white dark:text-black hover:bg-accent bg-black text-white small-button">
					Login
				</button>
			</div>
		</div>

		<h1 className="text-5xl sm:text-7xl xl:text-8xl mt-20 mb-2 font-bold">
			Welcome, traveler.
		</h1>
		<p className="text-l sm:text-2xl xl:text-3xl text-accent">
			You may rest here for a while.
		</p>
	</div>

	<div className="flex flex-col items-start font-[family-name:var(--font-geist-mono)] pt-5 dark:text-gray-300 text-gray-800">

		<span className="text-3xl ml-5 sm:ml-10">
			Projects
		</span>

		
		<div className="flex flex-row p-5 gap-5 w-x overflow-scroll">
			{Tile ("/th.webp", "Hi!", "there's a dick on the wall")}
			{Tile ("/th.webp", "1", "there's a dick on the wall")}
			{Tile ("/th.webp", "Hi!", "there's a dick on the wall")}
			{Tile ("/th.webp", "1", "there's a dick on the wall")}
			{Tile ("/th.webp", "Hi!", "there's a dick on the wall")}
			{Tile ("/th.webp", "1", "there's a dick on the wall")}
		</div>

	</div>

	<footer className="flex flex-row justify-between dark:bg-gray-900 bg-gray-200 shadow-md dark:shadow-black shadow-gray-500 font-[family-name:var(--font-geist-mono)] p-6">
		<div className="size-fit">
			a
		</div>
		<div className="flex flex-col size-fit items-end mx-0 sm:mx-2">
			<span className="text-3xl mb-2">
				Socials
			</span>
			<div className="grid gap-2 grid-cols-2 justify-end">
				<a 
					className="highlightable rounded-full size-12 flex justify-center items-center
					text-gray-700"
					href='https://github.com/MHanak1'>
					<BsGithub className="size-8"/>
				</a>
				<a 
					className="highlightable rounded-full flex size-12 justify-center items-center
					text-gray-700"
					href='https://mastodon.social/@mhanak'>
					<BsMastodon className="size-8"/>
				</a>
				
				<div/>
				<a 
					className="highlightable rounded-full flex size-12 justify-center items-center
					text-gray-700"
					href='https://discordapp.com/users/765559340081872906'>
					<BsDiscord className="size-8" />
				</a>
			</div>
		</div>
	</footer>
</div>
  );
}

function Tile (image, title, text) {
	return (
		<div className="flex flex-col min-w-fit h-fit items-center p-4 space-y-4 rounded-xl shadow-lg shadow-gray-500 dark:shadow-black dark:bg-gray-900 bg-gray-200 font-[family-name:var(--font-geist-mono)]">
			<Image
				src={image}
				width={250}
				height={250}
				alt={title}
				className="rounded-xl h-[250] w-max"
			/>
			<span className="font-bold mr-auto text-left">
				{title}
			</span>
		</div>
	)
}


const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
	<button onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}>
	  <div className="highlightable rounded-full flex size-10 justify-center items-center ml-0  hover:text-yellow-500">
		  <BsSunFill className="dark:hidden inline"/>
		  <BsMoonStarsFill className="dark:inline hidden"/>
	  </div>
	</button>
  )
}
