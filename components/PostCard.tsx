
import Link from 'next/link';

interface IEntryMetadata {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
}

export const PostCard = ({title, subtitle, date, slug}:IEntryMetadata) => {
  return (
    <div className='border border-slate-300 p-4 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-non'>
      <div className='flex flex-col justify-between'>
        <Link href={`/post/${slug}`}> <h3 className='text-slate-900 text-2xl'>{title}</h3> </Link>
        <span className='text-slate-400'>{date}</span>
      </div>
      <div>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}