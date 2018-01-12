const links = {
  german: { home: 'Startseite', brand: 'Lernkarten', de: 'Deutsch', ru: 'Russisch', url: 'german' },
  russian: { home: 'Главная', brand: 'Флеш Карточки', de: 'Немецкий', ru: 'Русский', url: 'russian' },
  default: { home: '', brand: 'Lernkarten / Флеш Карточки', de: 'Deutsch', ru: 'Русский' }
}

export function translateLink(path){
  let lang = path.slice(1);
  lang = lang.includes('german') ? 'german' : 'russian';
  return (lang && path.includes(lang)) ? links[lang] : links.default;
}
