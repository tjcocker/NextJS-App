const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@user.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Peter Quill',
    email: 'quill@gotg.org',
    image_url: '/customers/quill.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Thanos',
    email: 'thanos@thanos.info',
    image_url: '/customers/thanos.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Iron Man',
    email: 'tony@starkindustries.com',
    image_url: '/customers/ironman.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Thor',
    email: 'thor@valhalla.gov',
    image_url: '/customers/thor.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Black Widow',
    email: 'natasha@spy.ru',
    image_url: '/customers/bw.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Captain America',
    email: 'cap@us.gov',
    image_url: '/customers/cap.png',
  },
  {
    id: '25D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'The Hulk',
    email: 'hulk@smash.info',
    image_url: '/customers/hulk.png',
  },
  {
    id: '88D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Ant-Man',
    email: 'ant-man@tinyurl.net',
    image_url: '/customers/antman.png',
  },
  {
    id: '41D67535-C59E-4257-A021-F8D2EF4E0CBB',
    name: 'Nick Fury',
    email: 'fury@shield.gov',
    image_url: '/customers/fury.png',
  },
  {
    id: '88D02345-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Hawkeye',
    email: 'hawkeye@avengers.org',
    image_url: '/customers/hawkeye.png',
  },
  {
    id: '88D07545-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Loki',
    email: 'loki@valhalla.gov',
    image_url: '/customers/loki.png',
  },
  {
    id: '83407545-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'War Machine',
    email: 'war-machine@starkindustries.com',
    image_url: '/customers/wm.png',
  },
  {
    id: '88543545-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Vision',
    email: 'vision@jarvis.io',
    image_url: '/customers/vision.png',
  },
  {
    id: '88543115-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Dr Strange',
    email: 'strange@sanctum-sanctorum.org',
    image_url: '/customers/strange.png',
  },
  {
    id: '89843115-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Spiderman',
    email: 'tobey@friendly-neighborhood.org',
    image_url: '/customers/s1.png',
  },
  {
    id: '86243115-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Spiderman',
    email: 'andrew@friendly-neighborhood.org',
    image_url: '/customers/s2.png',
  },
  {
    id: '81743115-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Spiderman',
    email: 'tom@friendly-neighborhood.org',
    image_url: '/customers/s3.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 1988,
    status: 'pending',
    date: '2024-09-22',
  },
  {
    customer_id: customers[6].id,
    amount: 999,
    status: 'paid',
    date: '2023-09-02',
  },
  {
    customer_id: customers[2].id,
    amount: 300000,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[10].id,
    amount: 300,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[1].id,
    amount: 50,
    status: 'paid',
    date: '2024-06-05',
  },
  {
    customer_id: customers[2].id,
    amount: 12000,
    status: 'paid',
    date: '2022-06-05',
  },
  {
    customer_id: customers[8].id,
    amount: 16309,
    status: 'pending',
    date: '1992-04-04',
  },
  {
    customer_id: customers[7].id,
    amount: 34500,
    status: 'pending',
    date: '2001-08-09',
  },
  {
    customer_id: customers[9].id,
    amount: 34540,
    status: 'pending',
    date: '2001-06-01',
  },
  {
    customer_id: customers[4].id,
    amount: 100,
    status: 'pending',
    date: '2002-06-01',
  },
  {
    customer_id: customers[11].id,
    amount: 13400,
    status: 'pending',
    date: '2001-08-01',
  },
  {
    customer_id: customers[12].id,
    amount: 6500,
    status: 'pending',
    date: '2001-08-01',
  },
  {
    customer_id: customers[13].id,
    amount: 12200,
    status: 'pending',
    date: '2001-08-02',
  },
  {
    customer_id: customers[14].id,
    amount: 33,
    status: 'pending',
    date: '2001-01-04',
  },
  {
    customer_id: customers[15].id,
    amount: 33,
    status: 'pending',
    date: '2001-02-04',
  },
  {
    customer_id: customers[16].id,
    amount: 33,
    status: 'pending',
    date: '2001-03-04',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { users, customers, invoices, revenue };
