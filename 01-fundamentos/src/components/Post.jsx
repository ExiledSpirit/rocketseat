import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, content, publishedAt}) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!',
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    }
  );

  const publishedDateRelativaToNow = formatDistanceToNow(
    publishedAt,
    {
      locale: ptBR,
      addSuffix: true
    }
  );

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativaToNow}</time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type === 'paragraph') {
              return <p>{line.content}</p>
            }
            if (line.type === 'link') {
              return <p><a href='#'>{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder='Deixe seu comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return <Comment content={comment} />
          })
        }
      </div>
    </article>
  );
}
