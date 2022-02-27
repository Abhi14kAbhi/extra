import {showSnackbar} from '../../helpers/snackbar';

export const validation = (number, checkbox) => {
  if (!number) {
    showSnackbar('ERROR', 'Please fill all the fields.');
    return false;
  } else if (number.length < 10) {
    showSnackbar('ERROR', 'Please enter valid number.');
    return false;
  } else if (!checkbox) {
    showSnackbar('ERROR', 'Please mark the checkbox.');
    return false;
  }
  return true;
};
