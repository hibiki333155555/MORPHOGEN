import fs from 'fs' // for reading files
import matter from 'gray-matter' // for parsing markdown files
import { marked } from 'marked' // for rendering markdown as html
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

type ArticleMatter = {
    title: string;
    date: string;
    description: string;
};

type ArticleProps = {
    matter: ArticleMatter;
    content: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync('_article');
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', '')
        },
    }
    ));
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const file = fs.readFileSync(`_article/${params?.slug}.md`, 'utf-8');
    const { data, content } = matter(file);
    return {
        props: {
            matter: data,
            content
        }
    };
}


const Article: React.FC<ArticleProps> = ({ matter, content }) => {
    return (
        <div className=' w-screen h-screen text-black relative'>
            <div className='absolute top-10 left-[42%] prose m-10'>
                <h1 className='text-cyan-500 mb-16 text-5xl'>{matter.title}</h1>
                <span className=' mb-16 text-1xl font-bold'>{matter.date}</span>
                <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
        </div>
    )
}

export default Article