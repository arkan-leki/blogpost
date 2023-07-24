import FeaturedPosts from '@/components/home-page/featured-posts'
import Hero from '@/components/home-page/hero'
import { getFeaturedPosts } from '@/lib/posts-util';
import Head from 'next/head';
import React from 'react'

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
];

const HomePage = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="I post about web development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <FeaturedPosts posts={props.posts} />
      </main>
    </React.Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts =  getFeaturedPosts();
  return {
    props: {
      posts : featuredPosts,
    },
    revalidate: 60
  }
}

export default HomePage