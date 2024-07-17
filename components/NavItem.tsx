import React from "react";
import { HoveredLink, MenuItem } from "./ui/navbar-menu";
import Link from "next/link";

type HoverLinkType = {
  href: string;
  title: string;
};

type NavItemProps = {
  item: string;
  active: string | null;
  setActive: (item: string) => void;
  hoverLinks?: HoverLinkType[];
  id?: string;
};

const NavItem = ({ item, active, setActive, hoverLinks, id }: NavItemProps) => {
  return (
    <Link href={`/#${id}`}>
      <MenuItem setActive={setActive} active={active} item={item}>
        {hoverLinks && hoverLinks.length != 0 && (
          <div className="flex flex-col space-y-4 text-sm">
            {hoverLinks.map((hoverLink, index) => (
              <HoveredLink href={hoverLink.href}>{hoverLink.title}</HoveredLink>
            ))}
          </div>
        )}
      </MenuItem>
    </Link>
  );
};

export default NavItem;
