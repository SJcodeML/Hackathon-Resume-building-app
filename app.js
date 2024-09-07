// Selecting the form and resume elements
var resumeForm = document.getElementById('resumeForm');
var outputName = document.getElementById('outputName');
var outputEmail = document.getElementById('outputEmail');
var outputAddress = document.getElementById('outputAddress');
var outputEducation = document.getElementById('outputEducation');
var outputSkills = document.getElementById('outputSkills');
var resumeOutput = document.getElementById('resumeOutput');
var printButton = document.getElementById('printResume');
// Form submission event listener
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from refreshing the page
    // Retrieving form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    // Populating the resume section with form values
    outputName.textContent = name;
    outputEmail.textContent = email;
    outputAddress.textContent = address;
    outputEducation.textContent = education;
    outputSkills.textContent = skills;
    // Display the generated resume
    resumeOutput.classList.remove('hidden');
});
// Print or download resume when the button is clicked
printButton.addEventListener('click', function () {
    window.print(); // This triggers the browser's print dialog for printing/downloading as PDF
});
