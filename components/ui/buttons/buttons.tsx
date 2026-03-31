import { useState } from 'react';

import { Button } from '@radix-ui/themes';
interface SearchButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  initialLabel: string;
  loadingLabel: string;
}
export const SearchButton = ({
  onClick,
  label,
  disabled,
  initialLabel,
  loadingLabel,
}: SearchButtonProps) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {initialLabel} {label}
    </Button>
  );
};

export const SearchButtonLabeled = ({
  initialLabel,
  loadingLabel,
}: {
  initialLabel: string;
  loadingLabel: string;
}) => {
  const [currentLabel, setCurrentLabel] = useState(initialLabel);
  const handleClick = () => {
    setCurrentLabel(loadingLabel);
  };
  return <Button onClick={handleClick}>{currentLabel}</Button>;
};
