import navLinks from './navLinks';
import topics from './topics';
import labels from './labels';

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
  return topics[language][topic];
}

export function translateLabel(language, topic) {
  return labels[language][topic];
}
