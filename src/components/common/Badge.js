import './stylesBadge.scss'

export const Badge = ({text}) => {
  return (
    <div className='badge'>
      <span>{text}</span>
    </div>
  )
}
