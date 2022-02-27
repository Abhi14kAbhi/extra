import {showSnackbar} from '../../helpers/snackbar';

export const validation = number => {
  if (number === '') {
    showSnackbar('ERROR', 'Please enter all the fields');
    return false;
  }
  if (number.length < 10) {
    showSnackbar('ERROR', 'Invalid number');
    return false;
  }
  return true;
};
