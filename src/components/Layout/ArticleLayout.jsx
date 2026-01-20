export const ArticleLayout = ({ title, date, children }) => {
  return (
    <article className="article">
      <h1>{title}</h1>
      <time>{date}</time>
      <section className="article-content">{children}</section>
    </article>
  );
};
