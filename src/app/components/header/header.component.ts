import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface item {
  name: string,
  icon: string

}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidebarVisible: boolean = false;
  items: MenuItem[] | undefined;
  menuItems: item[] = [
    { name: 'Home', icon: 'fa fa-home' },
    { name: 'PC Games', icon: 'fa fa-laptop' },

    { name: 'Playstation', icon: 'fa fa-bandcamp' },
    { name: 'Nintendo', icon: 'fa fa-gamepad' },
    { name: 'Plus', icon: 'fa fa-angle-double-right' },
    { name: 'Support', icon: 'fa fa-users' },


  ]
  blockedDocument: boolean = false;

  constructor(private cd: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh'
          },
          {
            label: 'Export',
            icon: 'pi pi-upload'
          }
        ]
      }
    ];
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    const body = document.body;
    if (this.sidebarVisible) {
      body.classList.add('body-shadow');
    } else {
      body.classList.remove('body-shadow');
    }
    this.blockDocument();
  }

  blockDocument() {
    console.log("is blocked page")
    this.blockedDocument = true;

  }
}
