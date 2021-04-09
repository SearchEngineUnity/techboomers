import { MdBusiness } from 'react-icons/md';

export default {
  name: 'companyInfo',
  title: 'Contact Info',
  type: 'document',
  __experimental_actions: ['create', 'update', 'publish'],
  icon: MdBusiness,
  fields: [
    {
      name: 'name',
      title: 'Company name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'address1',
      title: 'Address 1',
      type: 'string',
    },
    {
      name: 'address2',
      title: 'Address 2',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'province',
      title: 'Province',
      type: 'string',
      options: {
        list: [
          { title: 'AB', value: 'AB' },
          { title: 'BC', value: 'BC' },
          { title: 'MB', value: 'MB' },
          { title: 'NL', value: 'NL' },
          { title: 'NS', value: 'NS' },
          { title: 'NB', value: 'NB' },
          { title: 'NT', value: 'NT' },
          { title: 'NU', value: 'NU' },
          { title: 'ON', value: 'ON' },
          { title: 'PE', value: 'PE' },
          { title: 'QC', value: 'QC' },
          { title: 'SK', value: 'SK' },
          { title: 'YT', value: 'YT' },
        ],
      },
    },
    {
      name: 'postalCode',
      title: 'Postal Code',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
    },
    {
      name: 'homePage',
      title: 'Home Page',
      type: 'url',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Contact Info`,
      };
    },
  },
};
