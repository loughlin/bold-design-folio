interface KeyTakeawayProps {
  children: React.ReactNode;
  className?: string;
}

const KeyTakeaway = ({ children, className = "" }: KeyTakeawayProps) => {
  return (
    <p className={`text-lg md:text-xl font-semibold text-foreground leading-snug max-w-2xl mb-6 ${className}`}>
      {children}
    </p>
  );
};

export default KeyTakeaway;
