import './stylesCards.scss'
import { Marquee } from '../articles/Marquee'
import { ArticleTitle } from '../articles/ArticleTitle'
import { ArticleText } from '../articles/ArticleText'

export const CardArticleWithSubhead = ({...article}) => {
  return (
    <article className={`col-12 col-md-4 card${article.reverse ? ' reverse' : ''}`}>
      <section className='article-body'>
        <ArticleTitle lead={article.lead} title={article.title} size={article.size} />
        <ArticleText text={article.subhead} />
        <Marquee text={article.author.name} />
      </section>
    </article>
  )
}
