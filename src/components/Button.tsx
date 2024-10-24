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

const Button = ({ type, title, icon, variant, link, linkNewTab}: ButtonProps) => {
  const content = (
    <>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap text-dark-green">{title}</label>
    </>
  );

  // If a link is provided, wrap the button with the Link component
  return link ? (
    <Link href={link} className={`flexCenter gap-3 ${variant} border rounded-full cursor-pointer`}
                                {...(linkNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : '')}>
        {content}
    </Link>
  ) : (
    <button
      className={`flexCenter gap-3 ${variant} border rounded-full cursor-pointer`}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
