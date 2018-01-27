import navLinks from './../static/navLinks';
import topics from './../static/topics';
import labels from './../static/labels';

export function translateLink(path) {
  let lang = path.slice(1);
  lang = lang.includes('german')
    ? 'german'
    : 'russian';
  return (lang && path.includes(lang))
    ? navLinks[lang]
    : navLinks.default;
}

export function formatLink(path) {
  const currentLocation = path.includes('german')
    ? path.slice(8)
    : path.slice(9);
  return currentLocation.charAt(0).toUpperCase() + currentLocation.slice(1);
}

export function snakeToTitle(str) {
  return str.split('_').map(function(item) {
    return item.charAt(0).toUpperCase() + item.substring(1);
  }).join(' ');
}

export function translateTopic(language, topic) {
  let currentTopic = topic.includes('quiz') ? topic.split('/')[0] : topic;
  return topics[language][currentTopic];
}

export function translateLabel(language, topic) {
  return labels[language][topic];
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
