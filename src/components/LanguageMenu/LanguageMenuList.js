import React from 'react';
import { Link } from 'react-router-dom';
import { translateTopic } from '../../static/helpers';
import vocabulary from '../../static/vocabulary';


const LanguageMenuList = ({currentLocation, subPaths, language, currentSubpath}) => {
  const shit = subPaths.length > 2 ? vocabulary[language][currentSubpath] : vocabulary[language];
  return (
    Object.entries(shit).map(([topic, words]) => {
      // console.log(, currentLocation)
      return (
        <div className="menuLinkRow" key={topic}>
          <Link className='menuLink' to={`${currentSubpath}/${topic}`}>{translateTopic(subPaths, topic)}</Link>
        </div>
      );
    }
  ))

}

export default LanguageMenuList;
