interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// Card Layout
function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-white shadow-lg rounded-lg ${className}`}>
      {children}
    </div>
  );
}

// CardHeader
Card.CardHeader = function CardHeader({ children, className }: CardProps) {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

// CardContent
Card.CardContent = function CardContent({ children, className }: CardProps) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
};

export default Card;
