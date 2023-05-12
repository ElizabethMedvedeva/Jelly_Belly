/**
 * @typedef {Object} Options - настройки для создания тега
 * @property {string} name тип тега
 * @property {string[]} [classList] список классов для тега
 * @property {object} [attributes] набор аттрибутов для тега
 * @property {string} [text] текст тега
 * @property {Options[]} [childrens]  дочерние элементы тега
 *
 */

/**
 * создает тег по заданным настройкам
 * @param {Options} options
 * @returns {HTMLElement}
 */
export function createElement({
  name,
  classList,
  attributes,
  text,
  childrens,
}) {
  const element = document.createElement(name);

  classList?.forEach((className) => {
    element.classList.add(className);
  });

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  if (text) {
    element.innerText = text;
  }

  childrens?.forEach((childrenOptions) => {
    element.appendChild(createElement(childrenOptions));
  });

  return element;
}
