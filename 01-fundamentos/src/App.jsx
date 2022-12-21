import { Post } from './Post'
import { Header } from './components/Header'

import './global.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Post
        author="Gabriel"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor ex veniam beatae labore ullam excepturi asperiores illo iusto similique laboriosam praesentium soluta distinctio voluptate sequi, culpa animi eum aliquam!"
      />
      <Post
        author="Gabriel"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor ex veniam beatae labore ullam excepturi asperiores illo iusto similique laboriosam praesentium soluta distinctio voluptate sequi, culpa animi eum aliquam!"
      />
      <Post
        author="Gabriel"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor ex veniam beatae labore ullam excepturi asperiores illo iusto similique laboriosam praesentium soluta distinctio voluptate sequi, culpa animi eum aliquam!"
      />
    </div>
  )
}

export default App
