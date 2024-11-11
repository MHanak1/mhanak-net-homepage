"use client";

import { useState } from 'react';
import { POSTS_PER_PAGE, pb } from '@/public/globals.js'
import ProjectTile from './ProjectTile'
//import getBase64 from '@/lib/getLocalBase64'

//=========================================================================================================\\
// Stole most of this from https://blog.logrocket.com/implementing-infinite-scroll-next-js-server-actions/ \\
//=========================================================================================================\\

export default function ProjectList({ initialProjects }) {
  const [offset, setOffset] = useState(POSTS_PER_PAGE);
  const [projects, setProjects] = useState(initialProjects.items);
  const [hasMoreData, setHasMoreData] = useState(true);

  const loadMoreProjects = async () => {
    if (hasMoreData) {
      const apiProjects = 
			await pb.collection('projects').getList(offset+1, POSTS_PER_PAGE, {
				sort: '-date, title',
			});

      if (apiProjects.items.length == 0) {
        setHasMoreData(false);
      }

      setProjects((prevProjects) => [...prevAlbums, ...apiAlbums.items]);
      setOffset((prevOffset) => prevOffset + POSTS_PER_PAGE);
    }
  };

	return(
		<>
		<div className="grid grid-cols-1 xl:grid-cols-2 p-4 gap-6">
			{
				projects.map((project, index) =>{
					const img_url = pb.files.getUrl(project, project.image, {'thumb': '600x600'});
					return (<ProjectTile project={project} key={project.id} img_url={img_url} />)
					//return (project.title)
				})
			}
		</div>
		<div className="hidden">
        {hasMoreData ? (
          <button
            className=""
            onClick={loadMoreProjects}
          >
            Load More Projects
          </button>
        ) : (
          <p className="">No more projects to load</p>
        )}
      </div>
		</>
	)
}

