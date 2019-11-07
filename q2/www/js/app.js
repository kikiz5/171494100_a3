function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})){1,128}$/;

  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert("Please enter a valid email address.")

    return false;
  }

  return true;
}

function validateEmailNoRegex() {
  var email = document.getElementById("email").value;

  if (email == '') {
    alert("Please enter a valid email address.");
    document.getElementById("email").focus();

    return false;
  }

  return true;
}

function validateUsername() {
  var username = document.getElementById("username").value;

  var re = /^[^0-9\s][^\s]{8,24}$/;

  var test = re.test(String(username));

  if (!test) {
    alert("Please enter a valid username.")

    return false;
  }

  if (username == '') {
    alert("Please enter a valid username.");

    return false;
  }

  return true;
}

function validatePassword() {
  var password = document.getElementById("password").value;

  var re = /^[^0-9\s][^\s]{8,24}$/;

  var test = re.test(String(password));

  if (!test) {
    alert("Please enter a valid password.")

    return false;
  }

  if (password == '') {
    alert("Please enter a valid password.");

    return false;
  }

  return true;
}

function validateForm() {
  document.getElementById("register").disabled = false;
  if (!validateEmail()) {
    return false;
  }

  if (!validateUsername()) {
    return false;
  }

  if (!validatePassword()) {
    return false;
  }

  return true;
}

/* Toggle Password */
function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

$('.vcheck').change(function() {
    var u_name = $('#username').val();
    var p_word = $('#password').val();
    var e_mail = $('#email').val();
    // We check for null (empty) values
    if (u_name == '' || p_word == '' || e_mail == '') {
        // When we find something blank set or keep the button to disabled
        $('#register').attr('disabled', 'disabled');
    } else {
        // When all conditions are met and values are good we enable the button
        $('#register').removeAttr('disabled');
    }
});
