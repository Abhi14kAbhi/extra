import {showSnackbar} from '../../helpers/snackbar';

export const validation = name => {
  if (name.firstName === '' || name.lastName === '') {
    showSnackbar('ERROR', 'Please fill all the fields');
    return false;
  }
  return true;
};
