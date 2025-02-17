const value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const dropItem = document.querySelectorAll('.dropdown__item');
const currentValue = function() {
    dropItem.forEach((item) => {
        item.addEventListener('click', (event) => {
            value.textContent = item.textContent;
            list.classList.remove('dropdown__list_active');
            event.preventDefault();
        })
    })
};
const activeList = function() {
    list.classList.toggle('dropdown__list_active');
    currentValue();
}
value.addEventListener('click', activeList);