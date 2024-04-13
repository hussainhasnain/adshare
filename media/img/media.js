
document.addEventListener("DOMContentLoaded", function() {
  const fileInput = document.getElementById("imageFile");
  const browseLink = document.querySelector(".btn__browse");
  const browseLinkAgain = document.querySelector(".btn__browse--again");
  const btnMediaEl = document.querySelector(".btn__media");
  const cloudIcon = document.querySelector(".media__drop--img");
  const imageDisplayContainer = document.querySelector(".imageDisplayContainer");
  const mediaContainer = document.querySelector('.media__container');
  const photoContent = document.querySelector('.photo__content');
  const backBtnEl = document.querySelector(".photo__content--back-button");
  const importContainer = document.querySelector(".import__container");
  const uploadImagesSpan = document.querySelector(".imageDisplayContainer__textbox--text-span");
  const uploadImagesTextbox = document.querySelector(".imageDisplayContainer__textbox");
  const maxFileCount = 7;
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  const maxFileSize = 2 * 1024 * 1024; // 2MB in bytes

  const uploadAllButton = document.querySelector(".btn__uploadAll");


   /** Upload Images in Media Container Functionality */
 uploadImagesSpan.addEventListener("click", function(){
  fileInput.click();
  
});

   // Function to update the visibility of the imageDisplayContainer__textbox
  // function updateImageDisplayTextVisibility() {
  //   const imageDisplayText = document.querySelector(".imageDisplayContainer__textbox");
  //   if (imageDisplayContainer.children.length > 0) {
  //     imageDisplayText.style.display = "none"; // Hide the text if there are images
  //   } else {
  //     imageDisplayText.style.display = "block"; // Show the text if there are no images
  //   }
  // }


  // Function to update the visibility of the imageDisplayContainer__textbox
  function updateImageDisplayTextVisibility() {
    if (imageDisplayContainer.querySelectorAll(".photo__box").length > 0) {
      uploadImagesTextbox.style.display = "none"; // Hide the text if there are images
    } else {
      uploadImagesTextbox.style.display = "block"; // Show the text if there are no images
    }
  }
 


  /** Media gallery link that redirects to gallery */
  btnMediaEl.addEventListener("click", function(){
    mediaContainer.style.display = "none";
    importContainer.style.display = 'none';
    photoContent.style.display = "block";
  });

 

  /** Back button to main page */
  backBtnEl.addEventListener("click", function(){
    mediaContainer.style.display = "block";
    importContainer.style.display = 'block';
    photoContent.style.display = "none";
  });


  browseLink.addEventListener("click", function() {
    fileInput.click();
  });

  
  const selectImagesButton = document.querySelector(".btn__selectImages");
  const deleteSelectedButton = document.querySelector(".btn__deleteSelected");
  const deleteAllButton = document.querySelector(".btn__deleteAll");
  const checkboxEl = document.querySelector(".image-checkbox");

  fileInput.style.display = 'none';

  


  /** Function to display images */
  let selectedImages = [];
  function displayImages(files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (allowedFileTypes.includes(file.type) && file.size <= maxFileSize) {

        /**Create a div with the class of photo__box inside imageDisplayContainer of our HTML Markup */
        const photoBox = document.createElement("div");
        photoBox.classList.add("photo__box");

        /**Checkbox created */
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("image-checkbox");
        checkbox.style.display = "none";

        /**Image created */
        const imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(file);
        imgElement.classList.add("uploaded-image");
        
        photoBox.appendChild(checkbox);
        photoBox.appendChild(imgElement); 

        photoBox.dataset.file = file;

        imageDisplayContainer.appendChild(photoBox);
        mediaContainer.style.display = 'none';
        importContainer.style.display = 'none';
        photoContent.style.display = 'block';

        // Add the newly selected images to the selectedImages array
        selectedImages.push(file);
        console.log(selectedImages);

        // Update the visibility of the "Browse Again" button
        updateUploadButtonVisibility();
        // After displaying images, update the visibility of the text
        updateImageDisplayTextVisibility();
      } else {
        alert("Invalid file type or size. Please upload PNG, JPEG, or JPG images.");
        fileInput.value = "";
        return;
      }
    }
  }



  selectImagesButton.addEventListener("click", function(){
    const checkboxes = document.querySelectorAll(".image-checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.style.display = checkbox.style.display === 'none' ? "block" : "none";
    });
  });

  function updateUploadButtonVisibility() {
    const totalSelectedImages = selectedImages.length;
    const remainingSlots = maxFileCount - totalSelectedImages;
    
    if (remainingSlots > 0) {
      browseLinkAgain.style.display = "block";
    } else {
      browseLinkAgain.style.display = "none";
    }
  }

  // browseLinkAgain.style.display = "none";

  browseLinkAgain.addEventListener("click", function() {
    const totalSelectedImages = selectedImages.length;

    if (totalSelectedImages >= maxFileCount) {
      alert("You have already selected the maximum allowed number of images (7).");
      return;
    }

    const remainingSlots = maxFileCount - totalSelectedImages;

    if (remainingSlots > 0) {
      fileInput.multiple = remainingSlots > 1;
      fileInput.click();
    } else {
      alert("You have already selected the maximum allowed number of images (7).");
    }
     // Hide checkboxes
     const checkboxes = document.querySelectorAll(".image-checkbox");
     checkboxes.forEach((checkbox) => {
       checkbox.style.display = "none";
     });
  });



  // Delete selected image functionality

  // Function to update the selectedImages Array
  function updateSelectedImagesArray(){
    
    selectedImages = [];
    const photoBoxes = document.querySelectorAll(".photo__box");
    photoBoxes.forEach((photoBox) => {
      const file = photoBox.dataset.file;
      selectedImages.push(file);
    });
    console.log("Updated selectedImages array:", selectedImages);
    // After updating the array, check if it's empty and update the visibility of the text
    if (selectedImages.length === 0) {
      uploadImagesTextbox.style.display = "block"; // Show the text if there are no selected images
    } else {
      uploadImagesTextbox.style.display = "none"; // Hide the text if there are selected images
    }
  }

  deleteSelectedButton.addEventListener("click", function() {
    const checkboxes = document.querySelectorAll(".image-checkbox");

    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        const photoBox = checkbox.parentElement;
        const fileToRemove = photoBox.dataset.file;

        // const fileIndex = selectedImages.indexOf(fileToRemove);
        const fileIndex = selectedImages.findIndex((image) => image === fileToRemove);
        if (fileIndex !== -1) {
          selectedImages.splice(fileIndex, 1);
        }

        photoBox.remove();
        updateImageDisplayTextVisibility();
      }
    });

    // Hide checkboxes
    checkboxes.forEach((checkbox) => {
      checkbox.style.display = "none";
    });


    // Update the selectedImages array and display it in the console
    updateSelectedImagesArray();

    // calculate the number of selected images after deletion
    const totalSelectedImages = selectedImages.length;
    // Update the visibility of the "Plus" button
    if(totalSelectedImages < maxFileCount){
      browseLinkAgain.style.display = "block";
    } else{
      browseLinkAgain.style.display = "none";
    }    
  });



// Declare a global variable to store selected File objects
let selectedFiles = [];


fileInput.addEventListener("change", function() {
  const selectedFilesArray = Array.from(this.files);

  const totalSelectedImages = selectedImages.length + selectedFilesArray.length;

  if (totalSelectedImages <= maxFileCount) {
    // Add the newly selected File objects to the selectedFiles array
    selectedFiles = selectedFiles.concat(selectedFilesArray);

    displayImages(selectedFilesArray);

    // Update the visibility of the "Browse Again" button
    updateUploadButtonVisibility();
  } else {
    alert("You can only upload a maximum of 7 images.");
    this.value = "";
  }
});


uploadAllButton.addEventListener("click", function() {
  const imageDisplayContainer = document.querySelector(".imageDisplayContainer");
  const uploadedImages = imageDisplayContainer.querySelectorAll(".uploaded-image");

  if (uploadedImages.length > 0) {
    uploadAllButton.textContent = "Processing...";

    // selectedImages = [];
    // uploadAllButton.textContent = "Upload";

    // Print the selected File objects to the console
    console.log(selectedFiles);

    /** Please add PHP logic here to upload images to the database */
  } else {
    alert("There are no images to be uploaded, please upload images");
  }
});






deleteAllButton.addEventListener("click", function() {
  imageDisplayContainer.innerHTML = "";
  selectedImages = [];
  updateUploadButtonVisibility();
  // Update the selectedImages array and display it in the console
    updateSelectedImagesArray();
});

  // Initial call to set the visibility when the page loads
  updateImageDisplayTextVisibility();
  // Update the selectedImages array and display it in the console
    updateSelectedImagesArray();
});




