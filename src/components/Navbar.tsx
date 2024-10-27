import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constant";
import Button from "./Button";
import ClientDropdown from "./ClientDropdown";

const Navbar = () => {
  return (
    <nav className="relative flex justify-between items-center px-2 py-4 lg:px-8 lg:py-4 lg:h-36">
      <Link href="/">
        <Image 
          src="/polar_bear_logo.png" 
          alt="logo"
          width={60}
          height={40}
          className="h-auto w-auto"
          priority={true}
        />
      </Link>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="hidden h-full gap-12 lg:flex justify-center items-center">
          {NAV_LINKS.map((link) => (
              <Link href={link.href}
            key={link.key} 
            className="regular-20 flex justify-items-center text-center cursor-pointer py-1.5 hover:font-bold">
                {link.label}
              </Link> 
          ))}
        </ul>
      </div>
      <div className="space-x-8 hidden lg:flex">
        <Button
          type="button"
          title="Sign Up Now"
          icon="/add-user.png"
          variant="btn_white shadow-lg shadow-green-900/40"
          link = "https://forms.office.com/r/hegwefLT3F"
          linkNewTab={true}
        />
      </div>
      <div className="lg:hidden relative">
        <ClientDropdown/>
      </div>
    </nav>
  )
}

export default Navbar;