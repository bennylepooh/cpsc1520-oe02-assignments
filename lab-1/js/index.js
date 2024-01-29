 const testButtonRunning = document.querySelector("#test-buttonRun");
 const closeButton = document.querySelector("#test-buttonClose");
 const enlargeDialog = document.querySelector("#email-dialog");

 testButtonRunning.addEventListener("click", buttonRunning);

 closeButton.addEventListener("click", buttonClose);

 enlargeDialog.addEventListener("click", outsideClick);

 function buttonRunning(e) {
    enlargeDialog.showModal();
 }

 function buttonClose(e) {
    enlargeDialog.close();
 }

 function outsideClick(e) {
    const dialogDimensions = dialog.getBoundingClientRect();

    if (
        e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom
    ) {
        e.currentTarget.close();
    }  
 }