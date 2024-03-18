
console.error();
function logout() {
// Add logout logic here
// Redirect to the logout page
window.location.href = '/session/logout';
}

// Upload Validation
document.addEventListener('DOMContentLoaded', function () {
    const uploadbtnEl = document.querySelector('.upload__button');
    const uploadForm = document.getElementById('uploadForm');
    const errorDiv = document.querySelector('.upload__error');
    const successDiv = document.querySelector('.upload__success');

    uploadbtnEl.addEventListener('click', function (event) {
        event.preventDefault(); 

        const fileInput = document.getElementById('fileToUpload');
        if (fileInput.files.length === 0) {
            errorDiv.textContent = 'Please choose a file to upload.';
            errorDiv.style.display = 'block';
            
            successDiv.textContent = ''; 
            setTimeout(function () {
                errorDiv.textContent = '';
                errorDiv.style.display = 'none';
            }, 2000);
        } else {
            errorDiv.textContent = '';
            successDiv.textContent = 'File uploaded successfully.';
            successDiv.style.display = 'block';
            setTimeout(function () {
                successDiv.textContent = ''; 
                successDiv.style.display = 'none';
            }, 2000);
            // uploadForm.submit();
        }
    });
});

const btnControlsEl = document.querySelector(".btn__controls");
const permissionsControlsEl = document.querySelector(".permissions__controls");
const importControlsEl = document.querySelector(".import__controls");

btnControlsEl.addEventListener("click", function(){
    permissionsControlsEl.classList.remove("hidden");
    importControlsEl.classList.add("hidden");
});


/*------------------------------  Select Dropdown Functionality  --------------------------- */

const dd = document.querySelector('#dropdown-wrapper');
const links = document.querySelectorAll('.dropdown-list a');
const span = document.querySelector('.dropdown__span');

dd.addEventListener('click', function(event) {
  event.stopPropagation();
  this.classList.toggle('is-active');
});

// Add click event listeners to the links
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(evt) {
    evt.stopPropagation();
    span.innerHTML = evt.currentTarget.textContent;
    dd.classList.remove('is-active'); // Hide the dropdown after selecting an element
  });
}

// Add a click event listener to the document
document.addEventListener('click', function() {
  dd.classList.remove('is-active');
});
