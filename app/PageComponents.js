import { BsGithub, BsMastodon, BsDiscord} from "react-icons/bs";
import { TiCamera, TiImage, TiPencil, TiCode } from "react-icons/ti";
import { BiChevronDown, BiSolidImageAlt, BiLandscape } from "react-icons/bi";
import { TiHome } from "react-icons/ti";
import Link from 'next/link'

export const Navbar = () => {
	return (
		<div className="grid grid-cols-3 max-w-[2000px] p-4 justify-center items-center mx-auto">
			<div className="flex flex-row space-x-6 size-min self-end">
				<Link href="/">
					  <div className="highlightable rounded-full flex size-10 justify-center items-center ml-0  hover:text-accent">
						  <TiHome className="size-5"/>
					  </div>
				</Link>
			</div>
			<div className="flex flex-row iitems-center justify-center sm:space-x-6 space-x-2">
				<Link href="/projects">
					<button className="highlightable hover:text-accent small-button">
						<TiCode/> <span className="mt-0"> Projects </span>
					</button>
				</Link>	
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
	)
}

export const Footer = () => {
	return (
		<footer className="flex sm:flex-row w-screen flex-col-reverse justify-between gap-2 dark:bg-gray-900 bg-gray-200 shadow-md dark:shadow-black shadow-gray-500 font-[family-name:var(--font-geist-mono)] p-6">
			<div className="flex flex-col gap-1 size-fit items-start mx-0 sm:mx-2">
				<span className="text-3xl mb-1">
					Contact
				</span>
				<a href="mailto:michal.hanak@lo5.wroclaw.pl" className="hover:text-accent">
					michal.hanak@lo5.wroclaw.pl
				</a>
				<a href="https://github.com/MHanak1/mhanak-net-homepage" className="hover:text-accent">
					View this page&apos;s source
				</a>
				 <p xmlnscc="http://creativecommons.org/ns#" xmlnsdct="http://purl.org/dc/terms/" className="flex flex-row gap-2 text-sm">
					<span property="dct:title">MHanak.net</span> © 2024 by <span property="cc:attributionName">Michał Hanak</span> is licensed under
					<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" className="flex flex-row hover:text-accent">CC BY-NC-SA 4.0 
						<img className="h-[22px] ml-[4px] align-text-bottom" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="" />
						<img className="h-[22px] ml-[4px] align-text-bottom" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="" />
						<img className="h-[22px] ml-[4px] align-text-bottom" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt="" />
						<img className="h-[22px] ml-[4px] align-text-bottom" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt="" />
					</a>
				</p>
			</div>
			<div className="flex flex-col size-fit sm:items-end items-start mx-0 sm:mx-2">
				<span className="text-3xl mb-2">
					Socials
				</span>
				<div className="grid gap-2 grid-cols-3 justify-end">
					<a 
						className="highlightable rounded-full size-12 flex justify-center items-center
						text-gray-600 hover:text-accent"
						href='https://github.com/MHanak1'>
						<BsGithub className="size-8"/>
					</a>
					<a 
						className="highlightable rounded-full flex size-12 justify-center items-center
						text-gray-600 hover:text-accent"
						href='https://mastodon.social/@mhanak'>
						<BsMastodon className="size-8"/>
					</a>
					<a 
						className="highlightable rounded-full flex size-12 justify-center items-center
						text-gray-600 hover:text-accent"
						href='https://discordapp.com/users/765559340081872906'>
						<BsDiscord className="size-8" />
					</a>
				</div>
			</div>
		</footer>
	);
}
