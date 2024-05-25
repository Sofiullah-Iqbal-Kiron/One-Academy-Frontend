import { useState } from "react";

import ThemeSwitcher from "./ThemeSwitcher";
import { cn } from "../utils";
import { Menu, MenuItem, HoveredLink } from "../aceternity-ui/NavbarMenu";

const nav_items = [
    "Academic",
    "Admission",
    "Job",
]

export default function NavBar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null)

    return (
        <div className={cn("fixed top-0 inset-x-0 z-50", className)}>
            <Menu setActive={setActive}>
                <MenuItem item={nav_items[0]} active={active} setActive={setActive}>
                    <div className="flex flex-col space-y-1.5 text-sm">
                        <HoveredLink href="">Class 9</HoveredLink>
                        <HoveredLink href="">Class 10</HoveredLink>
                        <HoveredLink href="">Class 11-12</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem item={nav_items[1]} active={active} setActive={setActive}>
                    <div className="flex flex-col space-y-1.5 text-sm">
                        <HoveredLink href="">Varsity</HoveredLink>
                        <HoveredLink href="">Medical</HoveredLink>
                        <HoveredLink href="">Engineering</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem item={nav_items[2]} active={active} setActive={setActive}>
                    <div className="flex flex-col space-y-1.5 text-sm">
                        <HoveredLink href="">BCS</HoveredLink>
                        <HoveredLink href="">Govt. Job</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem item={"Theme"} active={active} setActive={setActive}>
                    <ThemeSwitcher />
                </MenuItem>
            </Menu>
        </div>
    )
}