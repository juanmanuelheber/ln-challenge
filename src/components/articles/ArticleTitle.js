import './stylesArticleTitle.scss'
import { Lead } from '../common/Lead'

export const ArticleTitle = ({lead,title,size='sm'}) => {
  const cardSize = {
    sm: 'size-sm',
    md: 'size-md',
    lg: 'size-lg'
  }
  return (
    <h2 className={`article-title ${cardSize[size]}`}>
      {lead && <Lead lead={lead} />}{title}
    </h2>
  )
}
