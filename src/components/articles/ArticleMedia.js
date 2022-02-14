import { Badge } from '../common/Badge'
import './stylesArticleMedia.scss'

export const ArticleMedia = ({image, alt, badge}) => {
  return (
    <div className='article-media-container'>
        <img className='article-image' src={image} alt={alt} />
        {badge && <Badge text={badge} />}
    </div>
  )
}
