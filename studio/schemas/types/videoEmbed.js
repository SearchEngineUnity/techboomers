import { MdVideocam } from 'react-icons/md';
import EmbedPlayer from '../components/preview/EmbedPlayer';

export default {
  type: 'object',
  name: 'videoEmbed',
  title: 'Video Embed',
  icon: MdVideocam,
  fields: [
    {
      type: 'url',
      name: 'url',
    },
    {
      name: 'ratio',
      type: 'string',
      title: 'Aspect Ratio',
      options: {
        list: [
          { title: 'Youtube (16: 9)', value: '56.25%' },
          { title: 'Vimeo (21: 9)', value: '42.86%' },
        ],
      },
      initialValue: '56.25%',
    },
  ],
  preview: {
    select: { url: 'url' },
    component: EmbedPlayer,
  },
};
