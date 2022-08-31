import { TbNewSection } from 'react-icons/tb';

export default {
  title: 'Product Card Flex Segment',
  name: 'productCardFlexSegment',
  type: 'object',
  icon: TbNewSection,
  fields: [
    {
      name: 'content',
      title: 'Segment Content',
      type: 'productCardPT',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Product Card Flex Segment',
      };
    },
  },
};
