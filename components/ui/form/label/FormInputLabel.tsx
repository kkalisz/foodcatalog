import { Text } from '@radix-ui/themes';

type FormInputLabelProps = {
  label: string;
  required: boolean;
};
const FormInputLabel = ({ label, required }: FormInputLabelProps) => {
  return (
    <Text as="label" size="2" weight="medium">
      {label}
      {required ? <span className="text-red-500">*</span> : null}
    </Text>
  );
};

export default FormInputLabel;
