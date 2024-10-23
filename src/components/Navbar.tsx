import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constant";
import Button from "./Button";
import ClientDropdown from "./ClientDropdown";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4">
      <Link href="/">
        <Image 
          src="/polar_bear_logo.png" 
          alt="logo"
          width={74}
          height={29}
          className="h-auto w-auto"
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
            <Link href={link.href}
					key={link.key} 
					className="regular-20 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold pl-12">
              {link.label}
            </Link>
        ))}
      </ul>
	  <div className="flex space-x-8">
		<Button
			type="button"
			title="Sign Up Now"
			icon="/add-user.png"
			variant="btn_white shadow-2xl shadow-green-500/40"
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