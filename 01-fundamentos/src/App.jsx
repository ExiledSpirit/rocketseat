import { Post } from './components/Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gabriel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor ex veniam beatae labore ullam excepturi asperiores illo iusto similique laboriosam praesentium soluta distinctio voluptate sequi, culpa animi eum aliquam!"
          />
          <Post
            author="Gabriel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor ex veniam beatae labore ullam excepturi asperiores illo iusto similique laboriosam praesentium soluta distinctio voluptate sequi, culpa animi eum aliquam!"
          />
        </main>
      </div>
    </div>
  )
}

export default App
