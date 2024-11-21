document.addEventListener('DOMContentLoaded', function() {
    const Buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < Buttons.length; i++) {
        Buttons[i].addEventListener('click', function(botao) {
            const TabTarget = botao.target.dataset.tabButton;

            const Tab = document.querySelector(`[data-tab-id=${TabTarget}]`);
            TabHideAll();
            Tab.classList.add('shows__list--is-active');

            const Button = document.querySelector(`[data-tab-button=${TabTarget}]`);
            ButtonHideAll();
            Button.classList.add('shows__tabs__button--is-active');
        })
    }
})

function ButtonHideAll() {
    const ButtonContainer = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < ButtonContainer.length; i++) {
        ButtonContainer[i].classList.remove('shows__tabs__button--is-active');
    }
}

function TabHideAll() {
    const TabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < TabsContainer.length; i++) {
        TabsContainer[i].classList.remove('shows__list--is-active');
    }
}