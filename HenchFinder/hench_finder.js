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

function navigateToGallery() {
    window.location.href = "henchgallery.html";
}

function navigateToHire() {
    window.location.href = "henchHire.html"
}

// FAQ Functions
$(document).ready(function() {
    
    $('h3').click(function() { 
      var answer = $(this).next('p');
      
      answer.slideToggle();
  
      $(this).toggleClass('active-question');
  
      if(answer.is(':visible')) {
        answer.addClass('active-answer');
      } else {
        answer.removeClass('active-answer');
      }
    });
  });
// Contact Form Submission
function validateAndSubmitForm(event) {
  event.preventDefault();
  var nameInput = $('#name');
  var emailInput = $('#email');
  var messageInput = $('#message');

  // Regex patterns
  var namePattern = /^[a-zA-Z ]+$/; // Regex for name
  var emailPattern = /^[^@]+@[^@]+\.[^@]+$/; // Regex for email format

  // Validation checks
  if (!namePattern.test(nameInput.val().trim())) {
    alert('Please enter a valid name.');
    return false;
  }
  if (!emailPattern.test(emailInput.val().trim())) {
    alert('Please enter a valid email.');
    return false;
  }
  if (messageInput.val().trim() === '') {
    alert('Message cannot be blank.');
    return false;
  }

  // Confirm submission
  var confirmation = confirm('Are you sure you want to submit the form?');
  if (confirmation) {
    alert('Data submitted successfully!');
    $('#contactForm').reset();
  } else {
    $('#contactForm').reset();
  }
  return true;
}

// Datepicker 
$(function() {
    // Initialize the datepicker
    $('#datePicker').datepicker({
      minDate: 0, // Disallow past dates
      onSelect: function() {
        // When a date is selected, reveal the additional details
        $('#additionalDetails').show();
      }
    });
  
    // Check if all fields are filled in to enable the submit button
    $('#appointmentForm input, #appointmentForm textarea').on('input', function() {
      var dateSelected = $('#datePicker').val().length > 0;
      var numPeoplePattern = /^[1-9]\d*$/; // Regex for positive integers
      var jobDescriptionPattern = /.+/; // Regex for non-empty string
    
      var numPeopleValid = numPeoplePattern.test($('#numPeople').val().trim());
      var jobDescriptionValid = jobDescriptionPattern.test($('#jobDescription').val().trim());
    
      // Enable the submit button if all conditions are met
      $('#submitBtn').prop('disabled', !(dateSelected && numPeopleValid && jobDescriptionValid));
    });
  
    // Handle form submission
    $('#appointmentForm').submit(function(event) {
      event.preventDefault();
      // Perform form submission tasks here
      alert('Form submitted!');
    });
  });
