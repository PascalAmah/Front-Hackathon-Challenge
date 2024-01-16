// Alert Dropdown Menu and Profile Dropdown Menu
function alertDropdownMenu() {
  const alertToggle = document.querySelector(".alert-button");
  const menuToggle = document.querySelector(".name-button");
  const alertContent = document.querySelector(".alert-dropdown");
  const menuContent = document.querySelector(".profile-menu-dropdown");

  alertToggle.addEventListener("click", function () {
    alertContent.classList.toggle("active");
  });

  menuToggle.addEventListener("click", function () {
    menuContent.classList.toggle("active");
  });

  document.addEventListener('click', function(event) {
    if (!alertToggle.contains(event.target)) {
      alertContent.classList.remove("active");
    }

    if (!menuToggle.contains(event.target)) {
      menuContent.classList.remove("active");
    }
  });
};

alertDropdownMenu();

// Dismiss Button
function dismissBtn() {
  const dismiss = document.getElementById('dismissButton');
  const dismissPlan = document.getElementById('trial-plan');

  dismiss.addEventListener('click', function() {
    dismissPlan.style.display = 'none';
  });
};

dismissBtn();


// Setup Guide Toggle
function guideToggle() {
  const collapse = document.querySelector("#setup-guide");
  const content = document.querySelector("#setup-guide-content");
  const chevronIcon = document.querySelector("#chevron-icon");

  collapse.addEventListener("click", function () {
    const isActive = chevronIcon.classList.contains("content-collapsible-button-active");

    content.classList.toggle("active");

    if (isActive) {
      chevronIcon.classList.remove("content-collapsible-button-active");
    } else {
      chevronIcon.classList.add("content-collapsible-button-active");
    }
  });
};

guideToggle();


// Collapsible divs
function collapsibleDiv() {
  const collapsibles = document.querySelectorAll(".content-details");

  collapsibles.forEach((contentDetails) => {
    const triggerButton = contentDetails.querySelector(".content-details-toggle");
  
    triggerButton.addEventListener("click", function () {
      const targetContentId = this.getAttribute("data-target");
      const targetContent = document.getElementById(targetContentId);
      const isToggle = this.classList.contains("active");
  
      collapsibles.forEach((othercontentDetails) => {
        if (othercontentDetails !== contentDetails) {
          othercontentDetails.classList.remove("active");
          othercontentDetails.style.backgroundColor = "";
          othercontentDetails.querySelector(".content-guide").style.display = "none";
        }
      });
  
      if (!isToggle) {
        contentDetails.classList.add("active");
        contentDetails.style.backgroundColor = "#f3f3f3";
        targetContent.style.display = "block";
      } else {
        contentDetails.classList.remove("active");
        contentDetails.style.backgroundColor = ""; 
      }
    });
  });
}

collapsibleDiv();


// CheckBox
function checkBox() {
  const MARK_AS_DONE_CLASS = 'checkbox-done';

  let checkBoxBtns = document.querySelectorAll(".item-checkbox");
  let commonProgressBar = document.querySelector("#common-progress-bar");

  let clickCount = 0;

  checkBoxBtns.forEach(checkBoxBtn => {
    const notCompletedIcon = checkBoxBtn.closest('.checkbox-container').querySelector(".not-completed-icon");
    const completedIcon = checkBoxBtn.closest('.checkbox-container').querySelector(".completed-icon");
    const spinnerIcon = checkBoxBtn.closest('.checkbox-container').querySelector(".spinner-icon");
    
    function markDone() {
      notCompletedIcon.classList.add("hidden");
      spinnerIcon.classList.remove("hidden");

      setTimeout(() => {
        spinnerIcon.classList.add("hidden");
        completedIcon.classList.remove("hidden");

        checkBoxBtn.classList.add(MARK_AS_DONE_CLASS);
      }, 2000);

      commonProgressBar.value += 20;
    }

    function notDone() {
      completedIcon.classList.add("hidden");
      spinnerIcon.classList.remove("hidden");

      setTimeout(() => {
        spinnerIcon.classList.add("hidden");

        notCompletedIcon.classList.remove("hidden");
      }, 2000);

      commonProgressBar.value -= 20;
    }

    function markDoneOrNotDone() {
      const markAsDone = checkBoxBtn.classList.contains(MARK_AS_DONE_CLASS);

      if (markAsDone) {
        notDone();
        checkBoxBtn.classList.remove(MARK_AS_DONE_CLASS);
        if (clickCount > 0) {
          clickCount--;
        }
      } else {
        markDone();
        checkBoxBtn.classList.add(MARK_AS_DONE_CLASS);
        if (clickCount < 5) {
          clickCount++;
        }
      }

      updateClickCountDisplay();
    }

    function updateClickCountDisplay() {
      const clickCountDisplay = document.querySelector("#click-count-display");
      if (clickCountDisplay) {
        clickCountDisplay.textContent = `${clickCount} / 5 completed`;
      }
    }

    checkBoxBtn.addEventListener("click", markDoneOrNotDone);
  });
}

checkBox();

// function checkBox() {
//   const MARK_AS_DONE_CLASS = 'checkbox-done';

//   let checkBoxBtns = document.querySelectorAll(".item-checkbox");
//   let commonProgressBar = document.querySelector("#common-progress-bar");

//   let clickCount = 0;

//   checkBoxBtns.forEach(checkBoxBtn => {
//     const notCompletedIcon = checkBoxBtn.closest('.checkbox-container').querySelector(".not-completed-icon");
//     const completedIcon = checkBoxBtn.closest('.checkbox-container').querySelector(".completed-icon");
//     const spinnerIcon = checkBoxBtn.closest('.checkbox-container').querySelector(".spinner-icon");

//     function markDone() {
//       notCompletedIcon.classList.add("hidden");
//       spinnerIcon.classList.remove("hidden");

//       setTimeout(() => {
//         spinnerIcon.classList.add("hidden");
//         completedIcon.classList.remove("hidden");

//         checkBoxBtn.classList.add(MARK_AS_DONE_CLASS);
//       }, 2000);

//       commonProgressBar.value += 20;
//     }

//     function notDone() {
//       completedIcon.classList.add("hidden");
//       spinnerIcon.classList.remove("hidden");

//       setTimeout(() => {
//         spinnerIcon.classList.add("hidden");
//         notCompletedIcon.classList.remove("hidden");
      
//       }, 2000);

//       commonProgressBar.value -= 20;
//     }

//     function markDoneOrNotDone() {
//       const markAsDone = checkBoxBtn.classList.contains(MARK_AS_DONE_CLASS);

//       if (markAsDone) {
//         notDone();
//         checkBoxBtn.classList.remove(MARK_AS_DONE_CLASS);
//         if (clickCount > 0) {
//           clickCount--;
//         }
//       } else {
//         markDone();
//         checkBoxBtn.classList.add(MARK_AS_DONE_CLASS);
//         if (clickCount < 5) {
//           clickCount++;
//         }
//       }

//       updateClickCountDisplay();
//     }

//     function updateClickCountDisplay() {
//       const clickCountDisplay = document.querySelector("#click-count-display");
//       if (clickCountDisplay) {
//         clickCountDisplay.textContent = `${clickCount} / 5 completed`;
//       }
//     }

//     checkBoxBtn.addEventListener("click", markDoneOrNotDone);
//   });
// }

// checkBox();