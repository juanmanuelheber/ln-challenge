import { Navbar } from '../common/Navbar'
import './stylesLayout.scss'

export const Layout = ({children}) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  )
}
