
 // These are the constraints used to validate the form
  var constraints = {
    Age: {
      presence: true,
      numericality: {
        greaterThan: 6,
        message: ""
      }
    },
    Country: {
      // You also need to input where you live
      presence: true,
      // And we restrict the countries supported to Australia
      inclusion: {
        within: ["AU"],
        // The ^ prevents the field name from being prepended to the error
        message: "^Sorry, this service is currently for Australians only"
      }
    },
    Gender: {
      presence: true,
      inclusion: {
        within: ["M", "F", "O"],
      }

    },
    // Terms_and_conditions: {
    //   presence: true,
    //   inclusion: {
    //     within: true,
    //     message: "^You need to check the checkbox"
    //   }
    // }
  };

//Makes checkboxes go green when they are clicked
  var checkboxdivs = document.getElementsByClassName("checkboxdiv")
  var checkboxes = document.getElementsByClassName("checkbox")
  function activateCheckbox(i) {
    if (checkboxes.item(i).checked == true){
      checkboxes.item(i).checked = false;
    } else {
      checkboxes.item(i).checked = true;
    }
    updateCheckbox()
  }
  function updateCheckbox() {
    for (var i = 0; i < checkboxes.length; ++i) {
      if (checkboxes.item(i).checked == true){
        checkboxdivs.item(i).style.backgroundColor = "#9DEBC6";
      } else {
        checkboxdivs.item(i).style = "";
      }
    }
  }

  updateCheckbox();

  function showSuccess() {
    // We made it \:D/
    console.log("Success!");
    window.location = 'confirm.html';
  }
