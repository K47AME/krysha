/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// Фильтр для адаптива
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper')
const menuIcon = document.querySelector('.menu-icon')
const sidebar = document.querySelector('.sidebar')

sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};

// Кнопка "Показать еще"

const btnShowMore = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden')
btnShowMore.addEventListener('click', function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');
    })
})

// Показ/Скрытие виджетов

// Нахождение всех виджетов
const widgets = document.querySelectorAll('.widget')
// Проходимся по всем виджетам
widgets.forEach(function (widget) {
    // Слушаем клик внутри виджетов
    widget.addEventListener('click', function (event) {
        // Если клик был по заголовку -> показываем или скрываем тело виджета
        if (event.target.classList.contains('widget__title')) {
            event.target.classList.toggle('widget__title--active')
            event.target.nextElementSibling.classList.toggle('widget__body--hidden')
        }
    })
})

// Выбор кнопки "Любая" и отключение других параметров

const checkboxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

checkboxAny.addEventListener('change', function () {
    if (checkboxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
            item.checked = false;
        });
    }
})

// Отключение кнопки "Любая", при выборе других параметров
topLocationCheckboxes.forEach(function (item) {
    item.addEventListener('change', function () {
        if (checkboxAny.checked) {
            checkboxAny.checked = false;
        }
    })
})





// Показ дополнительных опций
const showMoreOptions = document.querySelector('.widget__btn-show-hidden')
const hiddenCheckboxes = document.querySelectorAll('.checkbox--hidden')

showMoreOptions.onclick = function (e) {
    e.preventDefault();
    if (showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckboxes.forEach(function (item) {
            item.style.display = "block";
        })
        showMoreOptions.innerText = "Скрыть"
        showMoreOptions.dataset.options = 'visible'
    } else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheckboxes.forEach(function (item) {
            item.style.display = "none";
        })
        showMoreOptions.innerText = "Показать еще"
        showMoreOptions.dataset.options = 'hidden'
    }
}