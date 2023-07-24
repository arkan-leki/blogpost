import PostContent from '@/components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '@/lib/posts-util'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const PostDetail = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </React.Fragment>
  )
}

export function getStaticProps(props) {
  const {params} = props
  const {slug} = params

  const postData = getPostData(slug)

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }

}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map(filename => filename.replace(/\.md$/, ''))
  return {
    paths: slugs.map(slug => ({params: {slug}})),
    fallback: 'blocking'
  }
}

export default PostDetail