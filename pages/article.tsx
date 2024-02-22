import fs from 'fs' // for reading files
import matter from 'gray-matter' // for parsing markdown files
import Link from 'next/link' // for linking to other pages
import { GetStaticProps } from 'next';

type ArticleMatter = {
    title: string;
    date: string;
    description: string;
};

type Article = {
    article: ArticleMatter[];
};

export const getStaticProps: GetStaticProps = () => {
    const mdfiles = fs.readdirSync('_article') // read all files in _article directory
    const article = mdfiles.map((filename) => { // map all files in _article directory
        const slug = filename.replace('.md', ''); // for site url ex: ${domain}/article/${slug}
        const fileContent = fs.readFileSync(`_article/${filename}`, 'utf-8'); // read file content
        const { data } = matter(fileContent); // parse file content
        return {
            matter: data,
            slug
        };
    });
    return {
        props: {
            article,
        },
    };
};

const Article: React.FC<Article> = ({ article }) => {
    return (
        <div className=" w-screen h-screen bg-white">
            {article.map((article: any) => (
                <div key={article.slug} className=' text-black text-center m-10'>
                    <Link href={`/article/${article.slug}`}>
                        <h1>{article.matter.title}</h1>
                        <h2>{article.matter.date}</h2>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Article