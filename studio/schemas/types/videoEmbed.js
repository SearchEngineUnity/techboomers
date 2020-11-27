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
  ],
  preview: {
    select: { url: 'url' },
    component: EmbedPlayer,
  },
};
