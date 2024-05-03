import Link from "next/link";

type ButtonProps = {
  label: string;
  link: string;
};

export const Button = ({ label, link }: ButtonProps) => (
  <Link href={link} className="btn">
    {label}
  </Link>
);
