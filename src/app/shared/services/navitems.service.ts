import { Injectable } from '@angular/core';
import { nav } from '../models/nav.model';
import { Observable, of } from 'rxjs';
import { MegaItem } from '../models/megaItems.model';
import { Megamenu } from '../models/navItems2.model';

@Injectable({
  providedIn: 'root'
})
export class NavItemsService {

  //navbar journal 
    getNavData(): Observable<nav> {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
    
        const navData: nav = {
          logo: './assets/images/logo.png',
          lang: ['English', 'Francais','العربية'],
          link: '/home',
          todaysDate: formattedDate,
        };
    
        return of(navData);
      }
  constructor() { }
 //nav bar classic 
  private megaItems: MegaItem[]= [
    {
        title: "World",
        link: null,
        megamenu: [
            {
                label: "",
                listItems: [
                    {
                        label: "How We're Different",
                        link: "test"
                    },
                    {
                        label: "The Growth Planning Process",
                        link: "test2"
                    },
                ],
            },
        ]
    },
    {
        title: "Business",
        link: null,
        megamenu: [
            {
                label: "",
                listItems: [
                    {
                        label: "How It Works",
                        link: "test"
                    },
                    {
                        label: "One-Page Plan",
                        link: "test2"
                    },
                    {
                        label: "Step-by-Step Guidance",
                        link: "test2"
                    },
                    {
                        label: "500+ Sample Plans",
                        link: "test2"
                    },
                    {
                        label: "Automatic Financials",
                        link: "test2"
                    },
                    {
                        label: "Lender-Ready Themes",
                        link: "test2"
                    },
                    {
                        label: "Financial Performance Tracking",
                        link: "test2"
                    },
                    {
                        label: "See All Features",
                        link: "test2"
                    },
                ],
            },
        ]
    },
    {
        title: "Solutions",
        link: null,
        megamenu: [
            {
                label: "For Small Businesses",
                listItems: [
                    {
                        label: "Create a Plan for Funding",
                            link: "test"
                    },
                    {
                        label: "Create a Plan for Strategy",
                            link: "test2"
                    },
                    {
                        label: "Test a Business Idea",
                        link: "test2"
                    },
                    {
                        label: "Build & Present Financials",
                        link: "test2"
                    },
                    {
                        label: "Budgeting & Performance Management",
                        link: "test2"
                    },
                    {
                        label: "Get Professional Plan Writing Help",
                        link: "test2"
                    },
                ],
            },
            {
                label: "Solutions For",
                listItems: [
                    {
                        label: "Consultants and Coaches",
                        link: "test3"
                    },
                    {
                        label: "SBA Partners",
                        link: "test4"
                    },
                    {
                        label: "Educators",
                        link: "test4"
                    },
                    {
                        label: "Lenders",
                        link: "test4"
                    },
                    {
                        label: "Incubators & Accelerators",
                        link: "test4"
                    },
                    {
                        label: "Public Accountants",
                        link: "test4"
                    },
                    {
                        label: "All Solutions",
                        link: "test4"
                    },
                ],
            },
        ]
    },
    {
        title: "Art",
        link: null,
        megamenu: [
            {
                label: "",
                listItems: [
                    {
                        label: "Education Hub",
                        link: "home"
                    },
                    {
                        label: "Our Blog",
                        link: "test2"
                    },
                    {
                        label: "Customer Success Stories",
                        link: "test2"
                    },
                    {
                        label: "Ebooks & Templates",
                        link: "test2"
                    },
                    {
                        label: "Webinars & Events",
                        link: "test2"
                    },
                    {
                        label: "Help Center",
                        link: "test2"
                    },
                ],
            },
        ]
    },
    {
        title: "Life Style",
        link: "/pricing",
        megamenu: null,
    },
    {
        title: "Opinion",
        link: "/features",
        megamenu: null,
    },
    {
        title: "Life Style",
        link: "/pricing",
        megamenu: null,
    },
   
   
];

/**
 * getMegaItmes
 */
public getMegaItmes() {
    return this.megaItems;
}

//solutions section
private solutions: Megamenu[] = [
    {
        label: "For Small Businesses",
        listItems: [
            {
                label: "Create a Plan for Funding",
                    link: "test"
            },
            {
                label: "Create a Plan for Strategy",
                    link: "test2"
            },
            {
                label: "Test a Business Idea",
                link: "test2"
            },
            {
                label: "Build & Present Financials",
                link: "test2"
            },
            {
                label: "Budgeting & Performance Management",
                link: "test2"
            },
            {
                label: "Get Professional Plan Writing Help",
                link: "test2"
            },
        ],
    },
    {
        label: "Solutions For",
        listItems: [
            {
                label: "Consultants and Coaches",
                link: "test3"
            },
            {
                label: "SBA Partners",
                link: "test4"
            },
            {
                label: "Educators",
                link: "test4"
            },
            {
                label: "Lenders",
                link: "test4"
            },
            {
                label: "Incubators & Accelerators",
                link: "test4"
            },
            {
                label: "Public Accountants",
                link: "test4"
            },
            {
                label: "All Solutions",
                link: "test4"
            },
        ],
    },
];

private whyUs: Megamenu[] = [
    {
        label: "",
        listItems: [
            {
                label: "How We're Different",
                link: "test"
            },
            {
                label: "The Growth Planning Process",
                link: "test2"
            },
        ],
    },
];

//products section
private products: Megamenu[] = [
    {
        label: "",
        listItems: [
            {
                label: "How It Works",
                link: "test"
            },
            {
                label: "One-Page Plan",
                link: "test2"
            },
            {
                label: "Step-by-Step Guidance",
                link: "test2"
            },
            {
                label: "500+ Sample Plans",
                link: "test2"
            },
            {
                label: "Automatic Financials",
                link: "test2"
            },
            {
                label: "Lender-Ready Themes",
                link: "test2"
            },
            {
                label: "Financial Performance Tracking",
                link: "test2"
            },
            {
                label: "See All Features",
                link: "test2"
            },
        ],
    },
];

//Megamenu section
private resources: Megamenu[] = [
    {
        label: "",
        listItems: [
            {
                label: "Education Hub",
                link: "home"
            },
            {
                label: "Our Blog",
                link: "test2"
            },
            {
                label: "Customer Success Stories",
                link: "test2"
            },
            {
                label: "Ebooks & Templates",
                link: "test2"
            },
            {
                label: "Webinars & Events",
                link: "test2"
            },
            {
                label: "Help Center",
                link: "test2"
            },
        ],
    },
];

public getMegaMenuData(title: string){
    switch (title) {
        case "Why us?":
            return this.whyUs; 
        case "Products":
            return this.products;
        case "Solutions":
            return this.solutions;
        case "Resources":
            return this.resources;
        default:
            return null;
    }
}

   
}


