import React from 'react';
import TermsPrivacy from '../../components/TermsPrivacy';
import Images from '../../assets';

const Privacy = ({navigation}) => {
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
      alt="Privacy policy image"
      image={Images.privacy}
      title="Privacy policy"
      data={data}
      navigation={navigation}
    />
  );
};

export default Privacy;
