import {showSnackbar} from '../../helpers/snackbar';

export const validation = otp => {
  if (otp.length < 4) {
    showSnackbar('ERROR', 'Please fill all the details');
    return false;
  }
  return true;
};
