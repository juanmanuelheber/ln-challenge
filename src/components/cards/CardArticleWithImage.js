import './stylesCards.scss'
import { Marquee } from '../articles/Marquee'
import { ArticleTitle } from '../articles/ArticleTitle'
import { ArticleMedia } from '../articles/ArticleMedia'

export const CardArticleWithImage = ({...article}) => {
  return (
    <article className={`col-12 col-md-4 card${article.reverse ? ' reverse' : ''}`}>
      {article.image && <ArticleMedia image={article.image} alt={article.marquee} badge={article.badge} />}
      <section className='article-body'>
        <ArticleTitle lead={article.lead} title={article.title} size={article.size} />
        <Marquee text={article.author.name} />
      </section>
    </article>
  )
}
