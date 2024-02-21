// Navigation
function navigateToHenchFaq() {
    window.location.href = "henchfaq.html";
}

function navigateToContactUs() {
    window.location.href = "henchcontact.html";
}

function navigateHome() {
    window.location.href = "henchFinder.html";
}

// FAQ Functions
function toggleAnswer(id) {
    var answer = document.getElementById(id);
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}
// Contact Form Submission
function validateAndSubmitForm(event) {
    event.preventDefault();
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message')
    if(nameInput.value.trim() === '') {
        alert('Please enter your name.');
        return false;
    }
    if(emailInput.value.trim() === '') {
        alert('Please enter your email.');
        return false;
    }
    if(messageInput.value.trim() === '') {
        alert('Message cannot be blank.');
        return false;
    }
    var confirmation = confirm('Are you sure you want to submit the form?');
    if (confirmation) {
    alert('Data submitted successfully!');
    } 
    else {
        document.getElementById('contactForm').reset();
    }
    document.getElementById('contactForm').reset();
    return true;
}