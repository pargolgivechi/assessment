import React from 'react';

import './parent.styles.scss';

import Children from './children.component';

const Parent = ({containerData, data}) => (
  <div className='parent'>
  <h1>Container number: {containerData.entity.id}</h1>
  
  {data.map(paragraph => 
     paragraph.entity.component !== 'ParagraphContainer' &&  paragraph.entity.layout &&  paragraph.entity.layout.split('"')[9] === containerData.entity.uuid ? 
     <Children key={paragraph.entity.uuid} childData={paragraph}/> : ''
     
    )}
  </div>
)

export default Parent;


