import React from 'react';
import ListItem from './ListItem';
import vocabulary from './static/vocabulary';

const sites = ['Greetings'];

const Lessons = (props) => {
  const links = sites.map(site => {
    let topic = site.replace(/ /g,"_").toLowerCase();
    return(
      <ListItem key={topic} link={`/german/${topic}`} text={site} />
    )
  });
  return (
    <div>{links}</div>
  )
}

export default Lessons;
