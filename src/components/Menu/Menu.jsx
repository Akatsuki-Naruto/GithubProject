import { useState } from "react";
import { MenuItem } from "./MenuItem";

export default function MenuTest() {
    const [menu, setMenu] = useState(1);

    const toggleMenu = () => {
        setMenu((m) => {
            if(m === 2) return 1;
            return m + 1;
        })
    }

    return (
        <>
         <MenuItem menu={menu}/>
         <button onClick={toggleMenu} className={clsx("flex w-10 h-10 bg-white")}>Toggle Menu</button>
        </>
    )
}