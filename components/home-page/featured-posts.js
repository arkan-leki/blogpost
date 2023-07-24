import PostsGrid from '../posts/posts-grid'
import classes from './featured-posts.module.css'

function FeaturedPosts(props) {

  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <div className={classes.posts}>
        <PostsGrid posts={props.posts} />
      </div>
    </section>
  )
}

export default FeaturedPosts