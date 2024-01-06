import Categories from "./Categories"
import PostBase from "./Post/PostBase"

const FeedBase = () => {
  return (
    <section className="basis-3/4 mr-4">
      <Categories/> 
      <PostBase />

    </section>
  )
}

export default FeedBase