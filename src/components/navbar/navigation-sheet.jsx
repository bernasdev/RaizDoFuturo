import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="px-6 py-6">
        <div className="flex flex-col gap-8">
          <Logo />
          <NavMenu orientation="vertical" className="w-full" />
        </div>
      </SheetContent>
    </Sheet>
  );
};
