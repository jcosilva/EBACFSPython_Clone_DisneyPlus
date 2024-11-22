document.addEventListener('DOMContentLoaded', function() {
    const Buttons = document.querySelectorAll('[data-tab-button]');
    const QuestionButtonClose = document.querySelectorAll('[data-btn-close]');
    const QuestionButtonOpen = document.querySelectorAll('[data-btn-open]');

    const HeroSection = document.querySelector('.hero');
    const AlturaHero = HeroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const PosicaoAtual = window.scrollY;
        if (PosicaoAtual < AlturaHero) {
            OcultarElementosDoHeader()
        } else {
            ExibeElementosDoHeader()
        }
    })

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

    for (let i = 0; i < QuestionButtonClose.length; i++) {
        QuestionButtonClose[i].addEventListener('click', function(botao) {
            const TargetNumber = botao.target.dataset.btnClose;

            const AnswerBox = document.querySelector(`[data-answer-box=${TargetNumber}]`);
            AnswerBox.classList.remove('faq__questions__item__answer-opened');
            AnswerBox.classList.add('faq__questions__item__answer-closed');

            const AnswerCloseSign = document.querySelector(`[data-btn-close=${TargetNumber}]`);
            AnswerCloseSign.style.display = 'none';

            const AnswerOpenSign = document.querySelector(`[data-btn-open=${TargetNumber}]`);
            AnswerOpenSign.style.display = '';
        })
    }

    for (let i = 0; i < QuestionButtonOpen.length; i++) {
        QuestionButtonOpen[i].addEventListener('click', function(botao) {
            const TargetNumber = botao.target.dataset.btnOpen;

            const AnswerBox = document.querySelector(`[data-answer-box=${TargetNumber}]`);
            AnswerBox.classList.remove('faq__questions__item__answer-closed');
            AnswerBox.classList.add('faq__questions__item__answer-opened');

            const AnswerCloseSign = document.querySelector(`[data-btn-close=${TargetNumber}]`);
            AnswerCloseSign.style.display = '';

            const AnswerOpenSign = document.querySelector(`[data-btn-open=${TargetNumber}]`);
            AnswerOpenSign.style.display = 'none';
        })
    }
})

function OcultarElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function ExibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

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