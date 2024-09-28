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
    name: 'Q',
    email: 'q@continuum.com',
    image_url: '/customers/q.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Lt. Worf',
    email: 'worf@starfleet.com',
    image_url: '/customers/worf.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Geordi LaForge',
    email: 'geordi@starfleet.com',
    image_url: '/customers/geordi.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Commander Riker',
    email: 'riker@starfleet.com',
    image_url: '/customers/riker.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Mr. Data',
    email: 'data@starfleet.com',
    image_url: '/customers/data.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Captain Picard',
    email: 'picard@starfleet.com',
    image_url: '/customers/picard.png',
  },
  {
    id: '25D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Khan',
    email: 'khan@USSreliant.com',
    image_url: '/customers/khan.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 100000000,
    status: 'pending',
    date: '2024-9-022',
  },
  {
    customer_id: customers[4].id,
    amount: 200,
    status: 'paid',
    date: '2023-9-21',
  },
  {
    customer_id: customers[3].id,
    amount: 170100,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 35900,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[1].id,
    amount: 900,
    status: 'paid',
    date: '2023-06-05',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
  {
    customer_id: customers[6].id,
    amount: 16309,
    status: 'pending',
    date: '1982-04-04',
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
