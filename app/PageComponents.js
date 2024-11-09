import { BsGithub, BsMastodon, BsDiscord} from "react-icons/bs";

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
			</div>
			<div className="flex flex-col size-fit sm:items-end items-start mx-0 sm:mx-2">
				<span className="text-3xl mb-2">
					Socials
				</span>
				<div className="grid gap-2 grid-cols-3 justify-end">
					<a 
						className="highlightable rounded-full size-12 flex justify-center items-center
						text-gray-700 hover:text-accent"
						href='https://github.com/MHanak1'>
						<BsGithub className="size-8"/>
					</a>
					<a 
						className="highlightable rounded-full flex size-12 justify-center items-center
						text-gray-700 hover:text-accent"
						href='https://mastodon.social/@mhanak'>
						<BsMastodon className="size-8"/>
					</a>
					<a 
						className="highlightable rounded-full flex size-12 justify-center items-center
						text-gray-700 hover:text-accent"
						href='https://discordapp.com/users/765559340081872906'>
						<BsDiscord className="size-8" />
					</a>
				</div>
			</div>
		</footer>
	);
}
