import { ReactNode } from 'react';

import { Colors } from '@/components/ui/tag/tag-colors';

type CustomTagProps = {
  title: string;
  onClick?: () => void;
  color?: Colors;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
};
const CustomTag = ({ title, leftIcon, color, onClick, rightIcon }: CustomTagProps) => {
  return (
    <div className={`flex items-center gap-1  rounded-full px-3 ${color}`}>
      {leftIcon}
      {title}
      {rightIcon}
    </div>
  );
};
export default CustomTag;
