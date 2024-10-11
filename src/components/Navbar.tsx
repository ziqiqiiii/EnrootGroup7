import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constant";
import Button from "./Button";
import ClientDropdown from "./ClientDropdown";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image 
          src="/polar_bear_logo.png" 
          alt="logo"
          width={74}
          height={29}
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
            <Link href={link.href}
					key={link.key} 
					className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
        ))}
      </ul>
	  <div className="lg:flexCenter hidden">
		<Button
			type="button"
			title="Sign Up Now"
			icon="/add-user.png"
			variant="btn_white"
		/>
	  </div>

	  <div className="lg:hidden relative">
		<ClientDropdown/>
	  </div>
    </nav>
  )
}

export default Navbar;