import React from 'react';
import ListItem from './ListItem';

const sites = ['Greetings'];


const Lessons = props => {

  const links = sites.map(site => {
    let topic = site.replace(/ /g,"_").toLowerCase();
    return(
      <ListItem key={topic} link={`russian/${topic}`} text={site} />
    )
  });
  return (
    <div>{links}</div>
  )
}

export default Lessons;
