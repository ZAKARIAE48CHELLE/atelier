export interface sideitems{
   label: string;
   link: string | null ;
   icon: string|null;
   ismega?: boolean;
   listItems?: sideMegamenu[];

}
export interface sideMegamenu {
  label: string;
  link: string | null;
  icon:string|null;
 
}
