
 // These are the constraints used to validate the form
  var constraints = {
    Username: {
      // You need to pick a username too
      presence: true,
      // And it must be between 3 and 20 characters long
      length: {
        minimum: 5,
        maximum: 20,
      },
      format: {
        // We don't allow anything that a-z and 0-9
        pattern: "[a-z ]+",
        // but we don't care if the username is uppercase or lowercase
        flags: "i",
        message: "can only contain letters"
      }
    },
    Email_address: {
      // Email is required
      presence: true,
      // and must be an email (duh)
      email: true
    },
    Password: {
      // Password is also required
      presence: true,
      // And must be at least 5 characters long
      length: {
        minimum: 5
      }
    },
    Confirm_password: {
      equality: "Password"
    }
  };

  function showSuccess() {
    // We made it \:D/
    console.log ("Success!");
    window.location = 'step-3.html';
  }
