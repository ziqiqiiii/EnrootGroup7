import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  link?: string;
  linkNewTab?: boolean;
};

const Button = ({ 
  type, 
  title, 
  icon, 
  variant, 
  link, 
  linkNewTab, 
}: ButtonProps) => {
  const baseClasses = `flexCenter gap-3 ${variant} rounded-full`;
  const content = (
    <>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className={`bold-16 whitespace-nowrap`}>{title}</label>
    </>
  );

  return (
      link ? (
        <Link
          href={link}
          className={`${baseClasses}`}
          {...(linkNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
        </Link>
      ) : (
        <button
          className={`${baseClasses}`}
          type={type}
        >
          {content}
        </button>
      )
  );
};

export default Button;