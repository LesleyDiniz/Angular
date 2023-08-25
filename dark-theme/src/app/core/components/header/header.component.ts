import { Component, OnInit } from '@angular/core';
import { ETheme } from '../../enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  protected icon: string = ETheme.ICON_MOON;
  protected textTheme: string = ETheme.TEXT_MOON;

  constructor() { }

  ngOnInit(): void {
  }

  protected toggle(){
    const theme = document.body.classList.toggle('dark-theme');

    if(theme) {
      this.textTheme = ETheme.TEXT_SUN;
      return this.icon = ETheme.ICON_SUN;
    }
    this.textTheme = ETheme.TEXT_MOON;
    return this.icon = ETheme.ICON_MOON;
  }

}
