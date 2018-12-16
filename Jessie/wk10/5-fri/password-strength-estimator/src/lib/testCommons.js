export default (password) => {
  let top25 = "123456 password 1234567 qwerty 12345 123456789 letmein 1234567 football iloveyou admin welcome monkey login abc123 starwars 123123 dragon passw0rd master hello freedom whatever qazwsx trustno1";
  const matchingWordArr = top25.split(' ').map(word => word.match(password)).filter(val => val)[0];
  
  //if no matches, move on
  if (matchingWordArr == undefined) {
    return;
  } else {
    return `You've just stumbled upon one of the most hackable passwords - ${matchingWordArr[0]}, try another.`;
  }
}