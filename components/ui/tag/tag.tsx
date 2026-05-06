import { ReactNode } from 'react';

import { Colors } from '@/components/ui/tag/tag-colors';

const COLOR_MAP: Record<Colors, string> = {
  [Colors.red]: 'bg-red-100 text-red-700 border border-red-300',
  [Colors.green]: 'bg-green-100 text-green-700 border border-green-300',
  [Colors.blue]: 'bg-blue-100 text-blue-700 border border-blue-300',
  [Colors.white]: 'bg-gray-100 text-gray-700 border border-gray-300',
  [Colors.orange]: 'bg-orange-100 text-orange-700 border border-orange-300',
  [Colors.pink]: 'bg-pink-100 text-pink-700 border border-pink-300',
};

type CustomTagProps = {
  title: string;
  onClick?: () => void;
  color: Colors;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
};
const CustomTag = ({ title, leftIcon, color, onClick, rightIcon }: CustomTagProps) => {
  return (
    <div
      className={`flex items-center gap-1 w-full justify-center rounded-full px-3 py-2 ${COLOR_MAP[color]}`}
    >
      {leftIcon}
      {title}
      {rightIcon}
    </div>
  );
};
export default CustomTag;
