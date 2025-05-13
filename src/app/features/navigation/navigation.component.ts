import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
  signal,
  WritableSignal
} from '@angular/core';
import { SearchPizzaService } from "../pizza/services/search-pizza.service";
import { IconSize } from "../../ui/icon/enums/icon.enums";
import { Pizza } from "../../shared/interfaces/pizza.interface";
import { ActivatedRoute, Router } from "@angular/router";
import { CartDrawerStateService } from "./services/cart-drawer-state.service";
import { AuthService } from "./services/auth.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTypeEnum, InputVariantEnum } from "../../ui/input-fc/input-fc.component";
import PasswordValidator from "../../shared/validators/password.validator";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit{

  constructor(private searchPizza: SearchPizzaService, private router: Router, private route: ActivatedRoute){
    effect(()=> {
      this.filteredList.set(this.searchPizza.filteredPizzaByText())
      console.log(this.filteredList())
    }, {allowSignalWrites: true})
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, PasswordValidator.passwordStrength])
  }, { updateOn: 'submit' })


  authService = inject(AuthService)
  cartDrawerState = inject(CartDrawerStateService)

  authModalClose(){
    this.deleteQueryFroModal()
  }

  authModalFlag = false;

  ngOnInit(){
    this.route.queryParams.subscribe(params => this.authModalFlag = params['modal'] === 'login');
    // this.login.controls.password.disable();
    // this.login.controls.email.getError('asd');
    // this.login.controls.email
    console.log(this.form .controls.email.value)
  }

  addQueryForModal(){
    this.router.navigate([], {
      queryParams: {modal: 'login'},
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

  searchActive = false; // Флаг

  changeSearchActive(value: boolean){
    this.searchActive = value;
  }

  outData(event: string){
    this.inputData.set(event)
    this.searchPizza.setPizzaBySearchText(event)
  }

  public onSubmit(){
    console.log('SUBMIT')
  }

  protected readonly IconSize = IconSize;
  protected readonly InputVariantEnum = InputVariantEnum;
  protected readonly InputTypeEnum = InputTypeEnum;
}
