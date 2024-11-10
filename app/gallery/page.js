import AlbumList from './AlbumList'
import { POSTS_PER_PAGE, pb } from '@/public/globals.js'
import { Footer, Navbar } from '@/app/PageComponents'

export const dynamic = 'auto',
   dynamicParams = true,
   revalidate = 0, //setting this to anything other than 0 causes the build to fail. why? :shrug:
   fetchCache = 'default-no-store'

export default async function AlbumPage() {

	const albums = await pb.collection('albums').getList(1, POSTS_PER_PAGE, {
		sort: '-date, title',
	});

	//return (<div> hello </div>)
	return( 
		<>
			<Navbar />
			<AlbumList initialAlbums={albums} />
			<Footer />
		</>
	)
}
