
 // These are the constraints used to validate the form
 var constraints = {
    Bird_name: {
      // You need to pick a username too
      presence: true,
      // And it must be between 3 and 20 characters long
      length: {
        minimum: 3,
        maximum: 20,
        message: "must be at least 3 letters"
      },
      format: {
        // We don't allow anything that a-z and 0-9
        pattern: "[a-z ]+",
        // but we don't care if the username is uppercase or lowercase
        flags: "i",
        message: "can only contain letters"
      }
    }
  };

  
  function showSuccess() {
    // We made it \:D/
    console.log ("Success!");
    window.location = 'step-2.html';
  }
