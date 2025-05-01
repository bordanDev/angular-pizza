import { Component, effect, inject, OnInit, signal, ViewChild, WritableSignal } from '@angular/core';
import { SearchPizzaService } from "../../../features/pizza/services/search-pizza.service";
import { IconSize } from "../../../ui/icon/enums/icon.enums";
import { Pizza } from "../../../shared/interfaces/pizza.interface";
import { PagesEnum } from "../../../core/enums/pages.enum";
import { ActivatedRoute, Router } from "@angular/router";
import { CartDrawerStateService } from "./services/cart-drawer-state.service";
import { AuthService } from "./services/auth.service";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{

  constructor(private searchPizza: SearchPizzaService, private router: Router, private route: ActivatedRoute){
    effect(()=> {
      this.filteredList.set(this.searchPizza.filteredPizzaByText())
      console.log(this.filteredList())
    }, {allowSignalWrites: true})
  }

  authService = inject(AuthService)
  cartDrawerState = inject(CartDrawerStateService)

  authModalClose(value: boolean){
    this.deleteQueryFroModal()
  }

  authModalFlag = false;

  ngOnInit(){
    this.route.queryParams.subscribe(params => this.authModalFlag = params['modal'] === 'info')
  }

  addQueryForModal(){
    this.router.navigate([], {
      queryParams: {modal: 'info'},
      queryParamsHandling: 'merge' // сохраняем другие параметры
    }).then(r => console.log(r));
  }

  deleteQueryFroModal(){
    this.router.navigate([], {
      queryParams: {modal: null},
      queryParamsHandling: 'merge' // сохраняем другие параметры
    }).then(r => console.log(r));
  }

  drawerStateChange(){
    console.log('TEST')
    this.cartDrawerState.setState(true)
    console.log(this.cartDrawerState.getState())
  }

  filteredList: WritableSignal<Pizza[]> = signal<Pizza[]>([])
  inputData= signal<string>('')

  @ViewChild("background") backgroundArea: any;

  searchActive: boolean = false; // Флаг

  changeSearchActive(value: boolean){
    this.searchActive = value;
  }

  outData(event: string){
    this.inputData.set(event)
    this.searchPizza.setPizzaBySearchText(event)
  }



  protected readonly IconSize = IconSize;
  protected readonly PagesEnum = PagesEnum;
  protected readonly Router = Router;
}
