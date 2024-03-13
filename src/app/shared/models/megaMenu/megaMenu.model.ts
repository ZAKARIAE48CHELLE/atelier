export interface Menu{
    label: string;
    link: string;
    megaMenu : MegaMenu []
}
export interface MegaMenu {
    label: string;
    link: string;
    megaMenu: MegaMenu []
}