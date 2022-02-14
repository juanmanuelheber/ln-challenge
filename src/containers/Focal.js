import { CardArticleWithImage } from '../components/cards/CardArticleWithImage'
import { SectionTitle } from '../components/common/SectionTitle'
import './stylesFocal.scss'

export const Focal = ({section, articles, showSectionTitle=false, linkToSection=false, slug, right}) => {
  return (
      <section className='container'>
        {showSectionTitle && section && <SectionTitle title={section} link={linkToSection ? slug : null} />}
        <div className={`focal focal-${right?'right':'left'}`}>
            <div className='row'>
                {articles[0] &&
                    <div className='col-12 col-md-8 card-foco'>
                        <CardArticleWithImage {...articles[0]} showSubhead reverse size={'lg'} />
                    </div>}
                <div className='col-12 col-md-4'>
                    <div className='row'>
                        {articles[1] &&
                            <div className='col-12 mb-2'>
                                <CardArticleWithImage {...articles[1]} />
                            </div>}
                        {articles[2] &&
                            <div className='col-12'>
                                <CardArticleWithImage {...articles[2]} />
                            </div>}
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}
