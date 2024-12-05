interface FormLabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className: string;
}

const FormLabel: React.FC<FormLabelProps> = ({
  htmlFor,
  children,
  className,
}) => (
  <label
    htmlFor={htmlFor}
    className={`ml-2 text-sm text-gray-700 ${className}`}
  >
    {children}
  </label>
);

export default FormLabel;
