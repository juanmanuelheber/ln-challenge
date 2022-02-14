import { Marquee } from './Marquee'
import './stylesAvatarAuthor.scss'

export const AvatarAuthor = ({image, author}) => {
  return (
    <div className='avatar-container'>
        <img className='avatar-image' src={image} alt={author}/>
        <Marquee text={author} center />
    </div>
  )
}
