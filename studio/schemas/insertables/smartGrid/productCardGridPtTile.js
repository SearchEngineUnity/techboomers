import { TbNewSection } from 'react-icons/tb';

export default {
  title: 'Product Card Grid PT Tile',
  name: 'productCardGridPtTile',
  type: 'object',
  icon: TbNewSection,
  fields: [
    {
      name: 'content',
      title: 'Tile Content',
      type: 'smartGridPT',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Product Card Grid PT Tile',
      };
    },
  },
};
