import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "../theme/theme-toggle";

const Navbar04Page = () => {
  return (
    <div className="bg-muted">
      <nav
        className="fixed top-6 inset-x-4 h-16 bg-background/75 backdrop-blur-xs border dark:border-green-900/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <div className="w-50 flex justify-start">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3 w-50 justify-end">
            {/* <Button className="rounded-full" >Me Inscrever</Button> */}

            <Button className="hidden sm:inline-flex rounded-full">
              Me Inscrever
            </Button>
            <ModeToggle />

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

export default Navbar04Page;
