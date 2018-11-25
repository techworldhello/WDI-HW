export default (password) => {
  const top25 = "123456 password 1234567 qwerty 12345 123456789 letmein 1234567 football iloveyou admin welcome monkey login abc123 starwars 123123 dragon passw0rd master hello freedom whatever qazwsx trustno1";
  const matchingWordArr = top25.split(' ').map(word => word === password);

  const result = {
    "score": 0,
    "hasLowerCase": false,
    "hasUpperCase": false,
    "hasNumber": false,
    "isOver8Char": false,
    "hasSpecialChar": false
  }
  if(password === '') return result;

  if (matchingWordArr.includes(true)) {
    return `You've just stumbled upon one of the most hackable passwords, try another.`;
  };
  
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
  if (/[\~\^\#\,\!\_\@\;\:\,\.\|\`\$\=\+\-\*\?\&\%\"\'\(\(\)\(\[\]\(\{\}]/.test(password)) {
    result.hasSpecialChar = true;
    result.score++;
  }
  if (password.length > 8) {
    result.isOver8Char = true;
    result.score++;
  }

  return result;
}