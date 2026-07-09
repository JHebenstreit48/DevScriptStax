import { FaWrench } from 'react-icons/fa';

interface IconRendererProps {
  type: 'wrench'; // only wrench supported for now
}

const IconRenderer = ({ type }: IconRendererProps) => {
  if (type === 'wrench') {
    return <FaWrench />;
  }
  return null;
};

export default IconRenderer;