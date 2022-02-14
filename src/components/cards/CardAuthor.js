import './stylesCards.scss'
import { AvatarAuthor } from '../articles/AvatarAuthor'
import { ArticleTitle } from '../articles/ArticleTitle'

export const CardAuthor = ({lead, title, author}) => {
  return (
    <article className='col-12 col-md-4 card card-autor'>
      <section className='article-body'>
        <ArticleTitle lead={lead} title={title} />
        <AvatarAuthor image={author.profile} author={author.name} />
      </section>
    </article>
  )
}
