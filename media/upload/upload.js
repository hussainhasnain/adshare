
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
    const successMsgEl = document.querySelector(".successMsg");
  
    const maxFileCount = 7;
    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
    const maxFileSize = 2 * 1024 * 1024; // 2MB in bytes
  
    const uploadAllButton = document.querySelector(".btn__uploadAll");

    photoContent.style.display = "block";
  
  
   // Function to update the visibility of the imageDisplayContainer__textbox
   function updateImageDisplayTextVisibility() {
    if (imageDisplayContainer.querySelectorAll(".photo__box").length > 0) {
      uploadImagesTextbox.style.display = "none"; // Hide the text if there are images
    } else {
      uploadImagesTextbox.style.display = "block"; // Show the text if there are no images
    }
  }
  
  
    /** Media gallery link that redirects to gallery */ //////////////////////////////////////////
    // btnMediaEl.addEventListener("click", function(){
    //   mediaContainer.style.display = "none";
    //   importContainer.style.display = 'none';
    //   photoContent.style.display = "block";
    // });
  
   
  
    /** Back button to main page */ //////////////////////////////////////////////////////////////////////
    // backBtnEl.addEventListener("click", function(){
    //   mediaContainer.style.display = "block";
    //   importContainer.style.display = 'block';
    //   photoContent.style.display = "none";
    // });
  
  
    // browseLink.addEventListener("click", function() {
    //   fileInput.click();
    // });
  
    
    const selectImagesButton = document.querySelector(".btn__selectImages");
    const deleteSelectedButton = document.querySelector(".btn__deleteSelected");
    const deleteAllButton = document.querySelector(".btn__deleteAll");
    const checkboxEl = document.querySelector(".image-checkbox");
  
    fileInput.style.display = 'none';
  
    
  
  
    /** Function to display images */
  
    let selectedImages = [];
    let deletedImages = []; 
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
        //   mediaContainer.style.display = 'none';
        //   importContainer.style.display = 'none';
          photoContent.style.display = 'block';
  
          // Add the newly selected images to the selectedImages array
          // selectedImages.push(file);
          selectedImages.push(file);
  
          console.log(selectedImages);
          // console.log(selectedImages);
  
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
  
    fileInput.addEventListener("change", function() {
      
      const selectedFilesArray = Array.from(this.files);
    
      const totalSelectedImages = selectedImages.length + selectedFilesArray.length;
    
      if (totalSelectedImages <= maxFileCount) {
        // Add the newly selected File objects to the selectedFiles array
        // selectedFiles = selectedFiles.concat(selectedFilesArray);
  
        // Log the names of the selected files to the console
        selectedFilesArray.forEach(function(file){
          console.log(file.name);
        });
    
        displayImages(selectedFilesArray);
    
        // Update the visibility of the "Browse Again" button
        updateUploadButtonVisibility();
        // updateSelectedFilesArray();
        console.log(selectedImages);
      } else {
        alert("You can only upload a maximum of 7 images.");
        this.value = "";
      }
    });
  
  
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
  
  
  deleteSelectedButton.addEventListener("click", function() {
    const checkboxes = document.querySelectorAll(".image-checkbox");
  
    // Filter out the images that were not selected for deletion
    selectedImages = selectedImages.filter((image, index) => {
      const checkbox = checkboxes[index];
      return !checkbox.checked;
    });
  
  
    // Remove the selected images from the DOM
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        const photoBox = checkbox.parentElement;
        photoBox.remove();
      }
    });
  
    // Hide checkboxes
    checkboxes.forEach((checkbox) => {
      checkbox.style.display = "none";
    });
  
    // Calculate the number of remaining selected images
    const totalSelectedImages = selectedImages.length;
    
    // Update the visibility of the "Plus" button
    updateUploadButtonVisibility();
    
    // Log the remaining selected images (File objects) to the console
    console.log("Remaining selected images:", selectedImages);
    
    // calculate the number of selected images after deletion
    console.log("Total selected images after deletion:", totalSelectedImages);
  
    // Update the visibility of the "Browse Again" button
    if (totalSelectedImages < maxFileCount) {
      browseLinkAgain.style.display = "block";
      
    } else {
      browseLinkAgain.style.display = "none";
    }
  
    if(totalSelectedImages === 0){
      uploadImagesTextbox.style.display = "block";
    } else{
      uploadImagesTextbox.style.display = "none";
    }
  
  });
  
    uploadAllButton.addEventListener("click", function() {
      const imageDisplayContainer = document.querySelector(".imageDisplayContainer");
      const uploadedImages = imageDisplayContainer.querySelectorAll(".uploaded-image");
    
      if (uploadedImages.length > 0) {
        uploadAllButton.textContent = "Processing...";
        setTimeout(() => {
          uploadAllButton.textContent = "Upload";
        }, 2000);
  
       // Filter the selected images based on whether they are deleted or not
      const imagesToUpload = selectedImages.filter((file) => {
        return !deletedImages.some((deletedFile) => deletedFile === file.name);
      });
  
        imagesToUpload.forEach(function(file) {
          console.log(file.name);
           /** Please add PHP logic here to upload images to the database */
        });
        
        console.log(imagesToUpload);
       
        successMsgEl.style.display = "flex";
      setTimeout(() => {
        successMsgEl.style.display = "none";
      }, 3000);

      // Clear the deletedImages array
      deletedImages = [];
        
      } else {
        alert("There are no images to be uploaded, please upload images");
      }
    });

   /** Upload Images in Media Container Functionality */
   uploadImagesSpan.addEventListener("click", function(){
    fileInput.click();

  });
  
  deleteAllButton.addEventListener("click", function() {

    let children = imageDisplayContainer.children;
    for (let i = children.length - 1; i >=0; i--){
      var child = children[i];
      if(!child.classList.contains("imageDisplayContainer__textbox")){
        child.remove();
        uploadImagesTextbox.style.display = "block";
      }
    }
  
    selectedImages = [];
    updateUploadButtonVisibility();
  
  });
  
  
  updateImageDisplayTextVisibility();
  
  });
  
  


 // Get the query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const selectedMonth = urlParams.get('month');

if (selectedMonth) {
  // Update breadcrumb links with the selected month
  document.getElementById("month-link").textContent = `Month-${selectedMonth} / `;
  document.getElementById("upload-link").textContent = "Upload";
}


  
  
  
  