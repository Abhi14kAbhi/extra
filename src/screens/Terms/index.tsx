import React from 'react';
import TermsPrivacy from '../../components/TermsPrivacy';
import Images from '../../assets';

const Terms = ({navigation}) => {
  const data = [
    {
      heading:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      clauses: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      ],
    },
    {
      heading:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      clauses: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      ],
    },
  ];
  return (
    <TermsPrivacy
      alt="Terms and conditions image"
      image={Images.tandc}
      title="Terms and Conditions"
      data={data}
      navigation={navigation}
    />
  );
};

export default Terms;
