export interface Menu {
  _id: string;
  translations: {
    language: string;
    title: string;
  };
  planPrincipal: boolean;
  megaMenu: boolean;
  icon: string;
  path: string;
  ordre: number;
  taxonomy : string
  priorite: number;
  parent: Menu | null;
  children: Menu[];
}
