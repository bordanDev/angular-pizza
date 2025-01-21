import { Component, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @ViewChild("inputField") inputField: any;
  // #inputField - устанавливая в атрибут тега получаем возможность связываться и получать дату от элемента

  @ViewChild("input") input: any;

  @ViewChild("background") backgroundArea: any;

  searchActive: boolean = false; // Флаг


}
