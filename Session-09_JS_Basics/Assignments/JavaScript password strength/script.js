// Your solution goes here
function isStrongPassword(password) {
  if (
    password.length >= 8 &&
    !password.toLowerCase().includes("password") &&
    /[A-Z]/.test(password)
  ) {
    return true;
  } else {
    return false;
  }
}
