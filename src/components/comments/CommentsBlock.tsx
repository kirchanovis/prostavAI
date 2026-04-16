import { useMemo } from 'react';

import styles from './CommentsBlock.module.scss';

import type { CommentItem } from '../../mocks/comments';

export function CommentsBlock({ items }: { items: CommentItem[] }) {
  const { root, repliesByParent } = useMemo(() => {
    const rootComments = items.filter((c) => !c.parentId);
    const replies = items.filter((c) => Boolean(c.parentId));

    const map = new Map<string, CommentItem[]>();
    replies.forEach((r) => {
      const key = r.parentId as string;
      map.set(key, [...(map.get(key) ?? []), r]);
    });

    return { root: rootComments, repliesByParent: map };
  }, [items]);

  return (
    <div className={styles.comments}>
      <div className={styles.title}>Комментарии</div>

      <div className={styles.list}>
        {root.map((c) => (
          <div key={c.id} className={`${styles.comment} _comment`}>
            <div className={styles.commentRow}>
              <img className={styles.avatar} src={c.author.avatarUrl} alt={c.author.name} />
              <div className={styles.bubble}>
                <div className={styles.meta}>
                  <span className={styles.author}>{c.author.name}</span>
                  <span className={styles.date}>{new Date(c.createdAt).toLocaleString()}</span>
                </div>
                <p className={styles.text}>{c.text}</p>
                <div className={styles.actions}>
                  <button
                    type="button"
                    className={styles.replyBtn}
                    onClick={() => {
                      // Only replies to first-level comments (future: open reply input)
                      void c.id;
                    }}
                  >
                    Ответить
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.replies}>
              {(repliesByParent.get(c.id) ?? []).map((r) => (
                <div key={r.id} className={styles.commentRow}>
                  <img className={styles.avatar} src={r.author.avatarUrl} alt={r.author.name} />
                  <div className={styles.bubble}>
                    <div className={styles.meta}>
                      <span className={styles.author}>{r.author.name}</span>
                      <span className={styles.date}>{new Date(r.createdAt).toLocaleString()}</span>
                    </div>
                    <p className={styles.text}>{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
