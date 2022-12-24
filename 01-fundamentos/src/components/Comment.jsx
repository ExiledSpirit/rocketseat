import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/ExiledSpirit.png'/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Gonçalves</strong>
              <time title='11 de Maio às 08:13' dateTime='2022-05-11 08:13:30'>Cercade 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash onClick={handleDeleteComment} size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
