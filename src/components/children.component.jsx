import React, { Fragment } from 'react';

import './children.styles.scss';

const Children = ({ childData }) => (
  <Fragment>
    {
      childData.entity.layout.split('"')[5] === 'row' ?
        <div className='row'>
          <h3>Title: {childData.entity.title && childData.entity.title}</h3>
          <h5>Text: {childData.entity.text && childData.entity.text.value} </h5>
          <p>{childData.entity.image && childData.entity.image.entity.media.url}</p>
          <div className='image' style={{ backgroundImage: `url(${childData.entity.image && childData.entity.image.entity.media[0].url})` }}>TEST IMAGE</div>
        </div>
        :
        <div className='column'>
          <h3>Title: {childData.entity.title && childData.entity.title}</h3>
          <h5>Text: {childData.entity.text && childData.entity.text.value} </h5>
          <p>{childData.entity.image && childData.entity.image.entity.media.url}</p>
          <div className='image' style={{ backgroundImage: `url(${childData.entity.image && childData.entity.image.entity.media[0].url})` }}>TEST IMAGE</div>
        </div>
    }
  </Fragment>
)

export default Children;
