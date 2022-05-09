let value = '';
export const checklist = (param: { checked: boolean; text: string }[]) => {
  value = '';
  param.forEach((items: { checked: boolean; text: string }) => {
    value += `<div class="form-check"><input class="form-check-input" type="radio" ${
      items.checked ? 'checked' : ''
    }><label class="form-check-label">${
      items.text
    }</label></div>`;
  });

  return value;
};
