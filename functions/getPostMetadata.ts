import fs from 'fs';
import matter from 'gray-matter';

interface IEntryMetadata {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
}

export const getPostMetadata = ():IEntryMetadata[] => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter(file=>file.endsWith('.md'));
  const posts = markdownPosts.map( fileName => {
    const fileContent = fs.readFileSync(`${folder}${fileName}`,'utf8');
    const matterResult = matter(fileContent);
    return {
      title : matterResult.data.title,
      subtitle : matterResult.data.subtitle,
      date : matterResult.data.date,
      slug : fileName.replace('.md','') 
    }
  });
  return posts;
}