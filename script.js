const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  // Check if the shift key was down
  // And check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // Loop over every checkbox
    checkboxes.forEach((checkbox) => {
      // Check if this is the first or last checkbox that was checked
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      // If the checkboxes are in between the two checked boxes, check them
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  // Set the last checked box
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);


// or

// const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// let lastChecked;

// function handleCheck(e) {
//     let inBetween = false;
//     if(e.shiftKey && this.checked){
//         checkboxes.forEach(checkbox => {
//             if(checkbox === this || checkbox === lastChecked){
//                 inBetween = !inBetween;
//             }
//             if (inBetween){
//                 checkbox.checked = true;
//             }
//         })
//     }

//     lastChecked = this;
// }

// checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
