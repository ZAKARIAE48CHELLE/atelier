import { Megamenu } from "./navItems2.model";

export interface MegaItem{
    title: string;
    link: string | null;
    megamenu: Megamenu[] | null;
}
