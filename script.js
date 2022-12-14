// Main component and Thank You component
const mainComponent = document.querySelector('.component');
const thanksComponent = document.querySelector('.component-thanks');

// Submit and Return to Main buttons
const submitButton = document.getElementById('submit-btn');
const returnButton = document.getElementById('return-btn');

// Rating buttons
const ratingButton = document.querySelectorAll('.rating-btn');

// Rating text for Thank You component
const rating = document.getElementById('rating');


// Make buttons go between components

submitButton.addEventListener('click', () => {
    thanksComponent.classList.remove('hidden');
    mainComponent.style.display = 'none';
})

returnButton.addEventListener('click', () => {
    thanksComponent.classList.add('hidden');
    mainComponent.style.display = 'block';
})


// Change #rating value to user rating

ratingButton.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML;
    })
})