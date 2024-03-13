export interface footerItems{
    titre: string;
    links : links[];
}
export interface links {
    label: string ;
    link: string | null;
}

export interface media{
        label: string,
        link: string,
        icon : string,
}
