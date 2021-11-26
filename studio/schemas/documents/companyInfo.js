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
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => [Rule.required().error('Field is required')],
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
      title: 'Company Home Page',
      description: 'This is the link that will be used for all company logos.',
      type: 'url',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'siteDomain',
      title: 'Site Domain',
      description:
        'This is the domain where all pages will be published under. Used for canonical.',
      type: 'url',
      validation: (Rule) => [Rule.required().error('Field is required')],
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
