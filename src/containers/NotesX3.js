import { CardArticleWithSubhead } from '../components/cards/CardArticleWithSubhead'
import { CardArticleWithImage } from '../components/cards/CardArticleWithImage'
import { CardAuthor } from '../components/cards/CardAuthor'
import { SectionTitle } from '../components/common/SectionTitle'
import './stylesNotesX3.scss'

export const NotesX3 = ({section, articles, showSectionTitle=false, linkToSection=false, slug}) => {
  return (
    <section className='container'>
        {showSectionTitle && section && <SectionTitle title={section} link={linkToSection ? slug : null}/>}
        <div className='notes-x3'>
            <div className='row'>
                {articles[0] &&
                    <div className='col-12 col-md-4'>
                        <CardArticleWithImage {...articles[0]} />
                    </div>}
                {articles[1] &&
                    <div className='col-12 col-md-4'>
                        <CardArticleWithSubhead {...articles[1]} />
                    </div>}
                {articles[2] && 
                    <div className='col-12 col-md-4'>
                        <CardAuthor {...articles[2]} />
                    </div>}
            </div>
        </div>
    </section>
  )
}
