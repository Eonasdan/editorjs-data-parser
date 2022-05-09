export const code = (param: { data: { code: any, languageCode: string } }) => {
  return `<pre><code class="${param.data.languageCode}">${sanitizeHtml(param.data.code)}</code></pre>`;
};

const sanitizeHtml = (markup: string) => {
  markup = markup.replace(/&/g, "&amp;");
  markup = markup.replace(/</g, "&lt;");
  markup = markup.replace(/>/g, "&gt;");
  return markup;
};
