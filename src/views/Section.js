import { useParams } from "react-router-dom"
import { RenderSection } from "../components/RenderSection"
import data from '../data/articles.json'

export const Section = () => {
  const { section } = useParams()

  // Filter the articles.json data using the section param from above to render the correct section
  const renderSection = data.dataDummy.filter(data=>data.slug===section)[0]

  return (
    <RenderSection {...renderSection} />
  )
}
