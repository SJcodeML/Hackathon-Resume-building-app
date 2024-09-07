// Selecting the form and resume elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const outputName = document.getElementById('outputName') as HTMLSpanElement;
const outputEmail = document.getElementById('outputEmail') as HTMLSpanElement;
const outputAddress = document.getElementById('outputAddress') as HTMLSpanElement;
const outputEducation = document.getElementById('outputEducation') as HTMLParagraphElement;
const outputSkills = document.getElementById('outputSkills') as HTMLParagraphElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const printButton = document.getElementById('printResume') as HTMLButtonElement;

// Form submission event listener
resumeForm.addEventListener('submit', (event: Event) => {
  event.preventDefault();  // Prevents the form from refreshing the page

  // Retrieving form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const address = (document.getElementById('address') as HTMLTextAreaElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

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
printButton.addEventListener('click', () => {
  window.print();  // This triggers the browser's print dialog for printing/downloading as PDF
});
