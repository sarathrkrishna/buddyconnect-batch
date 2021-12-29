export const snakeToCamelcase = (text: string): string => {
  return text
    .split('_')
    .map((word, index) => {
      if (index !== 0) {
        return word.replace(word[0], word[0].toUpperCase());
      } else {
        return word;
      }
    })
    .join('');
};

export const snakeCaseObjectTocamelCase = <RetDto>(object: unknown): RetDto => {
  let init: RetDto;
  return Object.keys(object).reduce((final, key) => {
    final[snakeToCamelcase(key)] = object[key];
    return final;
  }, init);
};
