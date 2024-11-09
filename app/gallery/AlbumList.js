"use client";
import { useState } from 'react';
import { POSTS_PER_PAGE, pb } from '@/public/globals.js'
import Gallery_list from './AlbumRow'
//import getBase64 from '@/lib/getLocalBase64'

//=========================================================================================================\\
// Stole most of this from https://blog.logrocket.com/implementing-infinite-scroll-next-js-server-actions/ \\
//=========================================================================================================\\

export default function AlbumList({ initialAlbums }) {
  const [offset, setOffset] = useState(POSTS_PER_PAGE);
  const [albums, setAlbums] = useState(initialAlbums.items);
  const [hasMoreData, setHasMoreData] = useState(true);

  const loadMoreAlbums = async () => {
    if (hasMoreData) {
      const apiAlbums = 
			await pb.collection('albums').getList(offset+1, POSTS_PER_PAGE, {
				sort: '-date, title',
			});

      if (apiAlbums.items.length == 0) {
        setHasMoreData(false);
      }

      setAlbums((prevAlbums) => [...prevAlbums, ...apiAlbums.items]);
      setOffset((prevOffset) => prevOffset + POSTS_PER_PAGE);
    }
  };

	return(
		<>
		<div className="flex flex-col pl-5 py-5 gap-5 w-screen overflow-scroll">
			{
				albums.map((album, index) =>{
					return (Gallery_list (album))
				})
			}
		</div>
		<div className="hidden">
        {hasMoreData ? (
          <button
            className=""
            onClick={loadMoreAlbums}
          >
            Load More Albums
          </button>
        ) : (
          <p className="">No more albums to load</p>
        )}
      </div>
		</>
	)
}

