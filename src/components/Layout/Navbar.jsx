import { Menu, MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Navbar = () => {
  return (
    <div className="h-[14vh] w-full z-20 sticky top-0 bg-white flex justify-around items-center">
      <Image src={"/image/logo.webp"} width={70} height={70} alt="logo" />

      <Sheet>
        <SheetTrigger asChild>
          <span className="bg-gray-200 p-1">
            <Menu />
          </span>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <div>helllolkjfdhglfjhsd</div>
        </SheetContent>
      </Sheet>

      <button className="bg-[#B6801E] text-white text-sm flex items-center gap-1 py-2 px-2">
        Get a Quote <MoveUpRight />
      </button>
    </div>
  );
};

export default Navbar;
