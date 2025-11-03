import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";

const NavbarPage = () => {
  return (
    <div className="bg-muted">
      <nav
        className="fixed top-6 z-50 inset-x-4 h-16  backdrop-blur-xs backdrop-brightness-50 border-[0.25px]
             max-w-(--breakpoint-xl) mx-auto rounded-full overflow-visible">
        <div className="flex items-center justify-between h-full px-4 mx-auto ">
          <div className="flex justify-start w-50">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center justify-end gap-3 sm:w-50">
            {/* <Button className="rounded-full" >Me Inscrever</Button> */}


            <Button className="hidden rounded-full md:inline-flex"  >
              <Link href="#subscribe">
              Me Inscrever
              </Link>
            </Button>
            {/* <ModeToggle /> */}

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPage;
