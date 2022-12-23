import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({content, onDeleteComment}) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={true} src='https://github.com/ExiledSpirit.png'/>

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
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
