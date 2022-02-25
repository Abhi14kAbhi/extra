import Snackbar from 'react-native-snackbar';

export const showSnackbar = (
  type: string,
  message: string,
  duration = 3000,
) => {
  const backgroundColor = '#EEF1F3';
  const errorTextColor = '#EB5151';
  const warningTextColor = '#D17B2B';
  switch (type) {
    case 'ERROR':
      Snackbar.show({
        text: message,
        duration: duration,
        backgroundColor: backgroundColor,
        textColor: errorTextColor,
      });
      break;
    case 'WARNING':
      Snackbar.show({
        text: message,
        duration: duration,
        backgroundColor: backgroundColor,
        textColor: warningTextColor,
      });
      break;
  }
};
