// Работа с классами
// 1.
//document.querySelector('#elem').classList.add('www');
// 2.
// document.querySelector('#elem').classList.remove('www');
// 3.
// if (document.querySelector('#elem').classList.contains('www')) {
//   } else {
//   }
// 4.
// document.querySelector('#elem').classList.toggle('www');
// 5.
// var count = document.querySelector('#elem').classList.length;
// 6. 
// var classes = document.querySelector('#elem').classList;
// classes.forEach(function(className) {
//   alert(className);
// });

// Работа с CSS
// document.querySelector('#elem').style.cssText = "color: red; font-size: 30px; border: 1px solid black;"; 

// Свойства tagName
// 1.
// document.querySelector('#elem').addEventListener('click', function() {
//     alert(this.tagName);
//   });
// 2.
// document.querySelector('#elem').addEventListener('click', function() {
//     alert(this.tagName.toLowerCase());
//   });
// 3.
// var elements = document.querySelectorAll('.www');
// elements.forEach(function(element) {
//   var tagName = element.tagName.toLowerCase();
//   element.textContent = element.textContent + tagName;
// });

// Вставка элементов через appendChild
// 1.
// const ol = document.querySelector('ol');

// const li = document.createElement('li');
// li.textContent = 'пункт';

// ol.appendChild(li);
// 2.
// const ul = document.querySelector('ul');

// const items = ['элемент1', 'элемент2', 'элемент3'];

// items.forEach(item => {
//   const li = document.createElement('li');
//   li.textContent = item;

//   ul.appendChild(li);
// });

// Вставка элементов через insertAdjacentHTML
// 1.
// const elem = document.querySelector('#elem');

// elem.insertAdjacentHTML('beforebegin', '<span>!!!</span>');
// 2.

// const elem = document.querySelector('#elem');

// elem.insertAdjacentHTML('afterend', '<span>!!!</span>');
// 3.
// const elem = document.querySelector('#elem');

// elem.insertAdjacentHTML('afterbegin', '<span>!!!</span>');
// 4.
// const elem = document.querySelector('#elem');

// elem.insertAdjacentHTML('beforeend', '<span>!!!</span>');

// Удаление и клонирование
// 1.
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   parent.removeChild(child);
// });
// 2.
// const ol = document.querySelector('ol')
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   const lastChild = ol.lastElementChild;
//   ol.removeChild(lastChild);
// });
// 3.
// const element = document.querySelector('.element');
// element.addEventListener('click', () => {
//   element.remove();
// });
// 4.
// const ol = document.querySelector('ol');
// const liList = document.querySelectorAll('ol li');
// liList.forEach(li => {
//   li.addEventListener('click', () => {
//     li.remove();
//   });
// });
// 5.
// const input = document.querySelector('input');
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   const clonedInput = input.cloneNode(true);
//   input.parentNode.insertBefore(clonedInput, input.nextSibling);
// });

// Потомки
// 1.
// const elem = document.querySelector('#elem');
// const firstChild = elem.firstElementChild;
// firstChild.style.color = 'red';
// 2.
// const elem = document.querySelector('#elem');
// const lastChild = elem.lastElementChild;
// lastChild.style.color = 'red';
// 3.
// const elem = document.querySelector('#elem');
// const children = elem.children;
// for (let i = 0; i < children.length; i++) {
//   children[i].textContent += '!';
// }

// Соседи
// 1.
// const elem = document.querySelector('#elem');
// const nextSibling = elem.nextElementSibling;
// if (nextSibling) {
//   const secondNextSibling = nextSibling.nextElementSibling;
//   if (secondNextSibling) {
//     secondNextSibling.textContent += '!';
//   }
// }
// 2.
// const elem = document.querySelector('#elem');
// const nextSibling = elem.nextElementSibling;
// if (nextSibling) {
//   nextSibling.textContent += '!';
// }
// 3.
// const elem = document.querySelector('#elem');
// const nextSibling = elem.nextElementSibling;
// if (nextSibling) {
//   const secondNextSibling = nextSibling.nextElementSibling;
//   if (secondNextSibling) {
//     secondNextSibling.textContent += '!';
//   }
// }

// Родители
// 1.
// const elem = document.querySelector('#elem');
// const parent = elem.parentElement;
// if (parent) {
//   parent.style.color = 'red';
// }
// 2.
// const elem = document.querySelector('#elem');
// const parent = elem.parentElement;
// if (parent) {
//   parent.style.color = 'red';
// }

// На полный размер элемента
// 1,2
// var elem = document.getElementById('elem');
// function showWidth() {
//   var width = elem.offsetWidth;
//   alert('Полная ширина элемента: ' + width + 'px');
// }
// function showHeight() {
//   var height = elem.offsetHeight;
//   alert('Полная высота элемента: ' + height + 'px');
// }

// На размер элемента без границ, но с padding 
// 1,2
// var elem = document.getElementById('elem');
// function showWidth() {
//   var width = elem.clientWidth;
//   alert('Полная ширина элемента без учета границы, но с padding: ' + width + 'px');
// }
// function showHeight() {
//   var height = elem.clientHeight;
//   alert('Полная высота элемента без учета границы, но с padding: ' + height + 'px');
// }

// Работа с getComputedStyle
// var elem = document.getElementById('elem');
// var styles = window.getComputedStyle(elem);
// var width = parseFloat(styles.width) - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
// var height = parseFloat(styles.height) - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);
// console.log('Ширина элемента без учета границы и padding: ' + width + 'px');
// console.log('Высота элемента без учета границы и padding: ' + height + 'px');

// Прокрутка элемента
// 1,2,3,4
// var elem = document.getElementById('elem');
// function showScrollTop() {
//   var scrollTop = elem.scrollTop;
//   alert('Прокрутка сверху: ' + scrollTop + 'px');
// }
// function showScrollLeft() {
//   var scrollLeft = elem.scrollLeft;
//   alert('Прокрутка слева: ' + scrollLeft + 'px');
// }
// function scrollToTop() {
//   elem.scrollTop = 100;
// }
// function scrollDown() {
//   elem.scrollTop += 100;
// }

// Прокрутка элемента
//1,2,3
// var elem = document.getElementById('elem');
// function showRealHeight() {
//   var realHeight = elem.scrollHeight;
//   alert('Реальная высота элемента с учетом прокрутки: ' + realHeight + 'px');
// }
// function showRealWidth() {
//   var realWidth = elem.scrollWidth;
//   alert('Реальная ширина элемента с учетом прокрутки: ' + realWidth + 'px');
// }
// function scrollToBottom() {
//   elem.scrollTop = elem.scrollHeight - elem.clientHeight - 100;
// }

// Проктрутка страницы
// 1,2
// function showScrollTop() {
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     alert('Прокрутка страницы по вертикали: ' + scrollTop + 'px');
//   }
//   function showScrollLeft() {
//     var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     alert('Прокрутка страницы по горизонтали: ' + scrollLeft + 'px');
//   }

// Прокрутка страницы
// function scrollToPosition() {
//     window.scrollTo(300, 500);
//   }
//   function scrollDown() {
//     window.scrollBy(0, 300);
//   }
  
  





