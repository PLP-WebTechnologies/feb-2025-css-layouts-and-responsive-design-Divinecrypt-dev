// Change text content dynamically
const heading = document.getElementById('mainHeading');
heading.textContent = 'Updated Heading via JavaScript';

// Modify CSS styles via JavaScript
const paragraph = document.getElementById('mainParagraph');
paragraph.style.color = 'blue';
paragraph.style.fontWeight = 'bold';

// Add or remove an element when a button is clicked
const toggleButton = document.getElementById('toggleButton');
let extraElement = null;

toggleButton.addEventListener('click', () => {
    if (!extraElement) {
        extraElement = document.createElement('p');
        extraElement.textContent = 'This is a dynamically added element.';
        extraElement.style.color = 'green';
        document.body.appendChild(extraElement);
        toggleButton.textContent = 'Remove Element';
    } else {
        document.body.removeChild(extraElement);
        extraElement = null;
        toggleButton.textContent = 'Add Element';
    }
});
