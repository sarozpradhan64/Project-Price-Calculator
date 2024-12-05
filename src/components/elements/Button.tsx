// Button component
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200 ${className}`}
  >
    {children}
  </button>
);

export default Button;
