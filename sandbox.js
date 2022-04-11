const initErrors = {
  name: '',
  dob: '',
  userEmail: '',
};
const initErrorsIs = {
  name: 'Name cant be blank',
  dob: '',
  userEmail: '',
};

const one = Object.values(initErrorsIs);
const isEvery = one.every((el) => el === '');
console.log('isEvery ===', isEvery);
console.log('one ===', one);
