import {showSnackbar} from '../../helpers/snackbar';

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const validation = email => {
  if (email === '') {
    showSnackbar('ERROR', 'Please fill all the details');
    return false;
  }
  if (!validateEmail(email)) {
    showSnackbar('ERROR', 'Please enter valid email!');
    return false;
  }
  return true;
};
