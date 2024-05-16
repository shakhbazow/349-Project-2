// get references to the navbar links
const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const pricingLink = document.getElementById('pricingLink');

// function to update active link class
function updateActiveLink(activeLink) {
    // Remove active class from all links
    homeLink.classList.remove('active');
    aboutLink.classList.remove('active');
    pricingLink.classList.remove('active');

    // add active class to the clicked link
    activeLink.classList.add('active');
}

// event listeners for navbar links
homeLink.addEventListener('click', function(event) {
    updateActiveLink(homeLink);
});

aboutLink.addEventListener('click', function(event) {
    updateActiveLink(aboutLink);
});

pricingLink.addEventListener('click', function(event) {
    updateActiveLink(pricingLink);
});


function decrementHours() {
    var hoursInput = document.getElementById('hours');
    if (parseInt(hoursInput.value) > 1) {
        hoursInput.value = parseInt(hoursInput.value) - 1;
    }
}

function incrementHours() {
    var hoursInput = document.getElementById('hours');
    hoursInput.value = parseInt(hoursInput.value) + 1;
}

function calculatePrice() {
    var hoursInput = document.getElementById('hours');
    var hours = parseInt(hoursInput.value);
    var price = hours * 40; // $40 per hour
    document.getElementById('price').textContent = 'Price: $' + price;
}