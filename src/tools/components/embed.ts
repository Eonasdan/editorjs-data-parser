export const embed = (param: { height: number; embed: any }) => {
  let embedValue = '';
  embedValue += `<div class="ratio ratio-1x1"><iframe loading="lazy" src='${param.embed}'></iframe></div>`;
  return embedValue;
};
