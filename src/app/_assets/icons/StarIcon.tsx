import { useState } from 'react';

const StarIcon = ({
  isActive,
  onClick,
  className,
}: {
  isActive: boolean;
  onClick: React.MouseEventHandler;
  className: string;
}) => {
  const starColor = isActive ? '#FFC700' : 'transparent';
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <svg
        className={`cursor-pointer ${className}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill={starColor}
          stroke="black"
          strokeWidth={isHover ? 2 : 1}
          strokeOpacity="0.7"
          d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
        />
      </svg>
    </>
  );
};

export default StarIcon;
