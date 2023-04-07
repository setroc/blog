
import { getPostMetadata } from '@/functions/getPostMetadata';
import { PostCard } from '@/components';

const Home = () => {
  const postMetadata = getPostMetadata();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {
        postMetadata.map(entry=> <PostCard key={entry.slug} {...entry} />)
      }
    </div>
  )
}
export default Home;