import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {InputComponent} from "../ui";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{

  @ViewChild("background") backgroundArea: any;

  searchActive: boolean = false; // Флаг

  changeSearchActive(){
    this.searchActive = !this.searchActive;
    console.log(this.searchActive);
  }

  ngAfterViewInit(){

  }
}
