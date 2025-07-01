// Function to open the popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

// Function to close the popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Close the popup if clicked outside the popup-content area
window.onclick = function(event) {
    const utahPopup = document.getElementById('utah-popup');
    const bvritPopup = document.getElementById('bvrit-popup');

    if (event.target == utahPopup) {
        utahPopup.style.display = "none";
    } else if (event.target == bvritPopup) {
        bvritPopup.style.display = "none";
    }
}
