import { CardArticleWithImage } from '../components/cards/CardArticleWithImage'
import { SectionTitle } from '../components/common/SectionTitle'
import './stylesNotesX2.scss'

export const NotesX2 = ({section, articles, showSectionTitle=false, linkToSection=false, slug}) => {
  return (
    <section className='container'>
        {showSectionTitle && section && <SectionTitle title={section} link={linkToSection ? slug : null}/>}
        <div className='notes-x2'>
            <div className='row'>
                {articles[0] &&
                    <div className='col-12 col-md-6'>
                        <CardArticleWithImage {...articles[0]} size='md' />
                    </div>}
                {articles[1] &&
                    <div className='col-12 col-md-6'>
                        <CardArticleWithImage {...articles[1]} size='md' />
                    </div>}
            </div>
        </div>
    </section>
  )
}
