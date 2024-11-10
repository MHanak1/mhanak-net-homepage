'use client'

import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react';

export default function Gallery_image ({img_url, img_id, props}) {
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
		className={props}>
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
