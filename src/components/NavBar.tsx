import { useState } from "react"
import { HoveredLink, Menu, MenuItem, ProductItem } from "../aceternity-ui/NavbarMenu"


export default function NavBar() {
    const [active, setActive] = useState<string | null>(null)

    return (
        <div className="fixed inset-x-0 top-0 z-50">
            <Menu setActive={setActive}>
                <MenuItem active={active} setActive={setActive} item="Academic">
                    Academic
                </MenuItem>
                <MenuItem active={active} setActive={setActive} item="Admission">
                    Admission
                </MenuItem>
                <MenuItem active={active} setActive={setActive} item="Take Exam">
                    Take Exam
                </MenuItem>
            </Menu>
        </div>
    )
}