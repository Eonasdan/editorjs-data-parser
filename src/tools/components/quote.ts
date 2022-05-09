export const quote = (caption: string, text: string) => {
  let quoteValue = `<blockquote class="blockquote">${text}`;

  if(caption) {
      quoteValue += `<footer class="blockquote-footer">${caption}</footer>`;
  }

    quoteValue += '</blockquote>';

  return quoteValue;
};
