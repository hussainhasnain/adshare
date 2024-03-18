document.addEventListener("DOMContentLoaded", function(){

  const imageDisplayContainer = document.querySelector(".imageDisplayContainer");
  // Retrieve the selected files from session storage
const selectedFiles = JSON.parse(sessionStorage.getItem("selectedFiles")) || [];

// Display the selected images in the photo content box
const photoBox = document.createElement("div");
        photoBox.classList.add("photo__box");
const photoContent = document.querySelector(".photo__content");
for(const file of selectedFiles){
  const imgElement = document.createElement("img");
  const blob = new Blob([file], { type: file.type});
  imgElement.src = URL.createObjectURL(blob);
  imgElement.classList.add("uploaded-image");
  photoContent.appendChild(imgElement);

  imageDisplayContainer.appendChild(photoBox);
}
});