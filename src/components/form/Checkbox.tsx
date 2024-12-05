interface CheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onCheckedChange,
}) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={() => onCheckedChange(!checked)}
    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-400"
  />
);


export default Checkbox