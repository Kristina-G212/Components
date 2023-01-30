const bg = document.querySelector(`body`);

const aHome = document.getElementById(`home`);
const bigHome = document.getElementById(`js-home`);

const aBlogs = document.getElementById(`blogs`);
const bigBlogs = document.getElementById(`js-blogs`);

const aCoding = document.getElementById(`coding`);
const bigCoding = document.getElementById(`js-coding`);

const aSkills = document.getElementById(`skills`);
const bigSkills = document.getElementById(`js-skills`);

const aExtras = document.getElementById(`extras`);
const bigExtras = document.getElementById(`js-extras`);

const aContact = document.getElementById(`contact`);
const bigContact = document.getElementById(`js-contact`);

const spans = document.querySelectorAll(`span`);

var granimInstance = new Granim({
    element: '#canvas-interactive',
    name: 'interactive-gradient',
    elToSetClassOn: '.for_nav',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 500,
    states: {
        "default-state": {
            gradients: [
                ['#000000', '#000000'],
            ]
        },
        "aHome": {
            gradients: [
                ['#5c2774', '#335cc5'],
                ['#637ffd', '#637ffd'],
                ['#335cc5', '#5c2774']
            ],
            transitionSpeed: 1200
        },
        "aBlogs": {
            gradients: [
                ['#3d156b', '#df3562'],
                ['#feb97e', '#feb97e'],
                ['#df3562', '#3d156b']
            ],
            transitionSpeed: 1200
        },
        "aCoding": {
            gradients: [
                ['#276174', '#33c58e'],
                ['#63fd88', '#63fd88'],
                ['#33c58e', '#276174']
            ],
            transitionSpeed: 1200
        },
        "aSkills": {
            gradients: [
                ['#383f75', '#ff723a'],
                ['#ee2e21', '#ee2e21'],
                ['#ff723a', '#383f75']
            ],
            transitionSpeed: 1200
        },
        "aExtras": {
            gradients: [
                ['#8c1bab', '#eb7195'],
                ['#fccd18', '#fccd18'],
                ['#eb7195', '#8c1bab']
            ],
            transitionSpeed: 1200
        },
        "aContact": {
            gradients: [
                ['#fd475e', '#c4659f'],
                ['#7d8afa', '#7d8afa'],
                ['#c4659f', '#fd475e']
            ],
            transitionSpeed: 1200
        }
    }
});

bg.addEventListener(`mouseout`, function (event) {
    event.preventDefault();
    granimInstance.changeState('default-state');
    check_the_index();
});

aHome.addEventListener(`mouseover`, function (event) {
    event.preventDefault();
    granimInstance.changeState('aHome');
    bigHome.style.zIndex = `1`;
    bigHome.style.animation = `text_in 2s ease-in-out forwards`;
})

aBlogs.addEventListener(`mouseover`, function (event) {
    event.preventDefault();
    granimInstance.changeState('aBlogs');
    bigBlogs.style.zIndex = `1`;
    bigBlogs.style.animation = `text_in 2s ease-in-out forwards`;
});

aCoding.addEventListener(`mouseover`, function (event) {
    event.preventDefault();
    granimInstance.changeState('aCoding');
    bigCoding.style.zIndex = `1`;
    bigCoding.style.animation = `text_in 2s ease-in-out forwards`;
});

aSkills.addEventListener(`mouseover`, function (event) {
    event.preventDefault();
    granimInstance.changeState('aSkills');
    bigSkills.style.zIndex = `1`;
    bigSkills.style.animation = `text_in 2s ease-in-out forwards`;
});

aExtras.addEventListener(`mouseover`, function (event) {
    event.preventDefault();
    granimInstance.changeState('aExtras');
    bigExtras.style.zIndex = `1`;
    bigExtras.style.animation = `text_in 2s ease-in-out forwards`;
});

aContact.addEventListener(`mouseover`, function (event) {
    event.preventDefault();
    granimInstance.changeState('aContact');
    bigContact.style.zIndex = `1`;
    bigContact.style.animation = `text_in 2s ease-in-out forwards`;
});

function check_the_index() {
    for (let i of spans) {
        if (i.style.zIndex === `1`) {
            i.style.animation = `text_out 2s ease-in-out forwards`;
        } else {
            console.log(spans)
        }
    }
}
