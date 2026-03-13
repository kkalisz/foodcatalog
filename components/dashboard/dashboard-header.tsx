import { Heading } from '@radix-ui/themes';

type DashboardHeaderProps = {
  title: string;
};
const DashboardHeader = ({ title }: DashboardHeaderProps) => {
  return <Heading size="7">{title}</Heading>;
};
export default DashboardHeader;
