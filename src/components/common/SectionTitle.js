import './stylesSectionTitle.scss'
import { Link } from 'react-router-dom'

export const SectionTitle = ({title,link}) => {
    return (
        <section className='container'>
            <h3 className='section-title'>
                { link 
                ? <Link to={`/${link}`}>{title}</Link> 
                : title 
            }</h3>
        </section>
    )
}
