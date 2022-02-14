import './stylesMarquee.scss'

export const Marquee = ({text, center }) => {
  return (
    <div className={`marquee ${center ? 'centered' : ''}`}>
        {text && <p>Por {text}</p>}
    </div>
  )
}
