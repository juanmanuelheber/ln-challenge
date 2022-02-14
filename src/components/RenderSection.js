import React from 'react'
import { Focal } from '../containers/Focal'
import { NotesX2 } from '../containers/NotesX2'
import { NotesX3 } from '../containers/NotesX3'

export const RenderSection = ({...section}) => {
  const sectionType = {
    "focal": <Focal {...section} />,
    "focal-right": <Focal {...section} right />,
    "notes-x2": <NotesX2 {...section} />,
    "notes-x3": <NotesX3 {...section} />,
    "default": <NotesX3 {...section} />,
  }

  return (
    <>
      {sectionType[section.renderDisplay] || sectionType['default']}
    </>
  )
}
