import React from 'react';
import PageTitle from './PageTitle';

export default function PageHeading(props) {
  return (
    <div className='page-Heading-container'>
    <PageTitle title="Explore Eazy Stickers"/>
    <p className='page-heading-paragraph'>{props.children}</p>
    </div>
  );
};
