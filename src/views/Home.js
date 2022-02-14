import data from '../data/articles.json'
import { NotesX3 } from '../containers/NotesX3'
import { RenderSection } from '../components/RenderSection'

export const Home = () => {
  const { dataDummy, fullArticle } = data

  return (
    <main className='container'>
        {/* Show three different Renders from the same article */}
        {Object.keys(fullArticle).length>0 && <NotesX3 articles={[fullArticle, fullArticle, fullArticle]} />}

        {/* Render each section of the articles.json data */}
        {dataDummy.length>0 && dataDummy.map(data=>(
          <RenderSection key={`section-${data.section}`} {...data} />
        ))}
    </main>
  )
}