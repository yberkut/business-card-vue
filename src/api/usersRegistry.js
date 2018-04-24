const imagesUrl = 'https://firebasestorage.googleapis.com/v0/b/static-872d1.appspot.com/o/business-card%2F';

const users = [
  {
    id: 1,
    firstName: 'Iaroslav',
    lastName: 'Berkut',
    description: 'Consultant, Frontend Guy and Your Friend',
    avatarSmall: `${imagesUrl}profile_mob%402x.png?alt=media&token=545e1100-7d1b-4366-97c1-94ca63f9b336`,
    avatarBig: `${imagesUrl}profile%402x.png?alt=media&token=8d874194-0859-47c9-afff-8e7bdfb877e8`,
    info: [
      { title: 'AGE', value: '34' },
      { title: 'EMAIL', value: 'iaroslav.berkut@gmail.com' },
      { title: 'PHONE', value: '+380 (97) 694 16 80' }
    ],
    qrCode: `${imagesUrl}qr%403x.png?alt=media&token=cf7e229b-c29a-4c3d-b352-c3d3cb94939a`,
    social: [
      { name: 'facebook', icon: 'fab fa-facebook', url: '' },
      { name: 'instagram', icon: 'fab fa-instagram', url: '' },
      { name: 'twitter', icon: 'fab fa-twitter', url: '' }
    ]
  }
];

export const getUser = cb => {
  setTimeout(() => cb(users[0]), 100);
};
