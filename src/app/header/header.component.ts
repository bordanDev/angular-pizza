import {AfterViewInit, Component, Renderer2, ViewChild} from '@angular/core';
import {InputComponent} from "../ui/input/input.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{

  @ViewChild('inputField', { static: true }) inputComponent!: InputComponent;
  @ViewChild("background") backgroundArea: any;

  searchActive: boolean = false; // Флаг

  ngAfterViewInit(){

  }

}
