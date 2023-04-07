import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

import { getPostMetadata } from '@/functions/getPostMetadata';

interface IParams {
  params: {
    slug:string
  }
}
const getPostContent = (slug:string) => {
  const dir = `posts/${slug}.md`; 
  const content = fs.readFileSync(dir, 'utf-8');
  const result = matter(content);
  return result;
}

export async function generateStaticParams() {
  const postMetadata = getPostMetadata();
  return postMetadata.map(post=>({
    slug: post.slug
  }))
}
const Post = ({ params }:IParams) => {
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <div className="flex justify-between my-12 text-center">
        <h1 className="text-xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400">{post.data.date}</p>
      </div>
      <article className='prose lg:prose-xl'>
        <Markdown>{post.content}</Markdown>
      </article>
    </>
  )
}

export default Post;