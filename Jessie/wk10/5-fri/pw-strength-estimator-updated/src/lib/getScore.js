export default (password) => {
  const result = {
    "score": 0,
    "hasLowerCase": false,
    "hasUpperCase": false,
    "hasNumber": false,
    "isOver8Char": false,
    "hasSpecialChar": false
  }
  if(password === '') return result;
  
  if (/[a-z]/.test(password)) {
    result.hasLowerCase = true;
    result.score++;
  }
  if (/[A-Z]/.test(password)) {
    result.hasUpperCase = true;
    result.score++;
  }
  if (/[0-9]/.test(password)) {
    result.hasNumber = true;
    result.score++;
  }
  if (password.length > 8) {
    result.isOver8Char = true;
    result.score++;
  }
  if (/[\~\^\#\,\!\_\@\;\:\,\.\|\`\$\=\+\-\*\?\&\%\"\'\(\(|\))\(\[|\])\(\{|\})]/.test(password)) {
    result.hasSpecialChar = true;
    result.score++;
  }
  return result;
}