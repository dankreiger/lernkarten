import React from 'react';
import ListItem from '../ListItem/ListItem';

const sites = ['Greetings'];

const Lessons = ({vocabulary, currentLanguageRoute}) => {
  const links = sites.map(site => {
    let topic = site.replace(/ /g,"_").toLowerCase();
    return(
      <ListItem key={topic} link={`${currentLanguageRoute}/${topic}`} text={site} />
    )
  });
  return (
    <div>{links}</div>
  )
}

export default Lessons;
