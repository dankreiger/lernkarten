import links from './links';
import topics from './topics';

export function translateLink(path) {
  let lang = path.slice(1);
  lang = lang.includes('german')
    ? 'german'
    : 'russian';
  return (lang && path.includes(lang))
    ? links[lang]
    : links.default;
}

export function formatLink(path) {
  const currentTopic = path.split('/')[path.split('/').length - 1];
  //
  // const currentLocation = path.includes('german')
  //   ? path.slice(8)
  //   : path.slice(9);
  return currentTopic.charAt(0).toUpperCase() + currentTopic.slice(1);
}

export function snakeToTitle(str) {
  return str.split('_').map(function(item) {
    return item.charAt(0).toUpperCase() + item.substring(1);
  }).join(' ');
}

export function translateTopic(subPaths, topic) {
  const language = subPaths[1];
  // console.log('translateTopic', topics[language], topics[language][topic], language, topic);

  return subPaths.length > 3 ? `${topics[language][subPaths[2]]}_${topic}` : topics[language][topic];
}
