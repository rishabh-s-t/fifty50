const ip = '10.160.65.183:8080';

const groupAvatarMap = ['#0396FF', '#EE6B8D', '#7E8EAA', '#F2E86D', '#5BDA8C'];

const relativePath = '../assets/icons/';

//Avatar array
const avatarArray = [
  {
    id: 0,
    src: require(`${relativePath}/avatar1.png`),
  },
  {
    id: 1,
    src: require(`${relativePath}/avatar2.png`),
  },
  {
    id: 2,
    src: require(`${relativePath}/avatar3.png`),
  },
  {
    id: 3,
    src: require(`${relativePath}/avatar4.png`),
  },
  {
    id: 4,
    src: require(`${relativePath}/avatar5.png`),
  },
  {
    id: 5,
    src: require(`${relativePath}/avatar6.png`),
  },
  {
    id: 6,
    src: require(`${relativePath}/avatar7.png`),
  },
  {
    id: 7,
    src: require(`${relativePath}/avatar8.png`),
  },
  {
    id: 8,
    src: require(`${relativePath}/avatar9.png`),
  },
  {
    id: 9,
    src: require(`${relativePath}/avatar10.png`),
  },
  {
    id: 10,
    src: require(`${relativePath}/avatar11.png`),
  },
  {
    id: 11,
    src: require(`${relativePath}/avatar12.png`),
  },
];

const expenseAvatarPath = `../assets/icons/bills`;

const expenseAvatar = [
  {
    id: 0,
    name: 'food',
    src: require(`${expenseAvatarPath}/food.png`),
  },
  {
    id: 1,
    name: 'default',
    src: require(`${expenseAvatarPath}/default.png`),
  },
  {
    id: 2,
    name: 'bill',
    src: require(`${expenseAvatarPath}/bill.png`),
  },
  {
    id: 3,
    name: 'rent',
    src: require(`${expenseAvatarPath}/rent.png`),
  },
  {
    id: 4,
    name: 'travel',
    src: require(`${expenseAvatarPath}/travel.png`),
  },
];

const testUsers = [
  {
    userPhoneNumber: '+91-6266505214',
    userEmailID: 'rishabhtomar2014@gmail.com',
    userName: 'rishabhtomar',
    password: 'sometext',
    upiID: '6266505214@axl',
    groupsInvolved: [],
    userAvatar: 1,
    showAvatar: true,
  },
  {
    userPhoneNumber: '+91-6789054321',
    userEmailID: 'patel2402@gmail.com',
    userName: 'gujjurocks',
    password: 'sometext',
    upiID: '6789054321@axl',
    groupsInvolved: [],
    userAvatar: 9,
    showAvatar: true,
  },
  {
    userPhoneNumber: '+91-7896543210',
    userEmailID: 'sarthak@gmail.com',
    userName: 'batinsarth',
    password: 'sometext',
    upiID: '',
    groupsInvolved: [],
    userAvatar: 7,
    showAvatar: true,
  },
  {
    userPhoneNumber: '+91-8976543210',
    userEmailID: 'vaidikaranka@gmail.com',
    userName: 'vaiduishere',
    password: 'sometext',
    upiID: '',
    groupsInvolved: [],
    userAvatar: 4,
    showAvatar: true,
  },
  {
    userPhoneNumber: '+91-9876543219',
    userEmailID: 'tanishkasingh@gmail.com',
    userName: 'tansingh',
    password: 'sometext',
    upiID: '',
    groupsInvolved: [],
    userAvatar: 3,
    showAvatar: true,
  },
];

export { groupAvatarMap, avatarArray, ip, testUsers, expenseAvatar };
