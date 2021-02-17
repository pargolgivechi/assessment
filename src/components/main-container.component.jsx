import React from 'react';

import './main-container.styles.scss';

import Parent from './parent.component';

const MainContainer = ({paragraphs}) => {
  return (
    <div>
    {paragraphs.map(paragraph => 
     paragraph.entity.component === 'ParagraphContainer' ? 
     <Parent key={paragraph.entity.uuid} data={paragraphs} containerData={paragraph}/> : ''
    )}
  </div>
  )
}

export default MainContainer;