import { BiChevronDown, BiSolidImageAlt, BiLandscape } from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import Image from "next/image";
import { pb } from '@/public/globals.js'


export default function ProjectTile ( { project, img_url }) {
	const { id, title, description, image, repository, link, created, updated } = project || {}

	return (
		<div className="flex flex-col min-w-fit h-fit items-center p-4 space-y-2 rounded-xl shadow-lg transition-all group
		shadow-gray-500 dark:shadow-black dark:bg-gray-900 bg-gray-200 font-[family-name:var(--font-geist-mono)]">
			<div className="size-full flex content-between flex-row items-center flex-wrap gap-2">
				<span className="font-bold mr-auto text-left transition-all m-2 text-xl">
					{title}
				</span>
				<div className="flex flex-row">
					{link && 
						<a href={link} className="highlightable rounded-full flex h-10 px-3 gap-2 justify-center items-center hover:text-accent">
						    <AiOutlineLink className="size-5"/> <span className="hidden sm:inline-block"> Page </span>
						</a>
					}
					{repository && 
						<a href={repository} className="highlightable rounded-full flex h-10 px-3 gap-2 justify-center items-center hover:text-accent">
						    <BsGit className="size-5"/> <span className="hidden sm:inline-block"> Git </span>
						</a>
					}
				</div>
			</div>
			<div className="flex flex-col md:flex-row size-full items-start gap-4">
				{img_url &&
					<Image
						src={img_url}
						width={400}
						height={250}
						quality={95}
						alt={description}
						className="rounded-xl h-full md:h-[250px] w-full md:w-max shadow-md shadow-gray-700 dark:shadow-black"
					/>
				}
				{!img_url &&
					<div className = "rounded-xl h-[250px] w-full md:w-[250px] shadow-md shadow-gray-700 dark:shadow-black dark:bg-gray-800 bg-gray-300 flex items-center">
						<BiSolidImageAlt className="size-20 dark:text-gray-700 text-gray-400 mx-auto my-auto"/>
					</div>
				}
				{description && 
					<span>
						{description}
					</span>
				}
				{!description &&
					<span className="dark:text-gray-400 text-gray-600">
						no description.
					</span>
				}
			</div>
		</div>
	)
}
