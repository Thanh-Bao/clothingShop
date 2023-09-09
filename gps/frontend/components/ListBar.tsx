import { ListBarProps } from '@/types';
import { IconType } from 'react-icons';

interface Props extends ListBarProps {
  icon: IconType;
}

export default function ListBar({ List_name, icon: Icon }: Props) {
  return (
    <div className="w-full h-10 bg-cyan-500 rounded-md">
      <button className="flex items-center h-full">
        <div className="h-10 px-3 bg-red-500 rounded-l-md">
          <Icon className="h-full w-5" />
        </div>
        <p className="text-lg text-white px-2">{List_name}</p>
      </button>
    </div>
  );
}