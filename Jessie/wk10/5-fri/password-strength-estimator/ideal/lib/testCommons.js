class ErrorCommonPassword extends Error {
  constructor(password) {
    super();
    this.name = 'CommonPassword';
    this.message = `You've just stumbled on one of the most hackable passwords - ${password}, try something else.`;
  }
}

export default (password) => {
  let top25 = [
    '123456',
    'password',
    '1234567',
    'qwerty',
    '12345',
    '123456789',
    'letmein',
    '1234567',
    'football',
    'iloveyou',
    'admin',
    'welcome',
    'monkey',
    'login',
    'abc123',
    'starwars',
    '123123',
    'dragon',
    'passw0rd',
    'master',
    'hello',
    'freedom',
    'whatever',
    'qazwsx',
    'trustno1'
  ];
  if (top25.contains(password)) throw err
  
  //if no matches, move on
  if (matchingWordArr == undefined) {
    return;
  } else {
    throw new ErrorCommonPassword(matchingWordArr[0]);
  }
}