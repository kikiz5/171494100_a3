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

function validateForm() {
  if (!validateEmail()) {
    return false;
  }

  return true;
}

/* Enable Submit button */
$('.vcheck').change(function() {
    var e_mail = $('#email').val();
    var c_try = $('#country').val();
    var d_tion = $('textarea#description').val();
    var i_file = $('#avatarImage').val();
    // We check for null (empty) values
    if (c_try == '' || d_tion == '' || e_mail == '' || !i_file) {
        // When we find something blank set or keep the button to disabled
        $('#register').attr('disabled', 'disabled');
    } else {
        // When all conditions are met and values are good we enable the button
        $('#register').removeAttr('disabled');
    }
});
