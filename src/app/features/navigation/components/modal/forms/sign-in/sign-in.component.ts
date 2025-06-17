import { ChangeDetectorRef, Component, OnInit, output } from '@angular/core';
import { InputTypeEnum } from "../../../../../../ui/input-fc/input-fc.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../../../../interfaces/user.interface";
import { UsersService } from "../../../../api/users.service";
import { Router } from "@angular/router";
import { NotificationService } from "../../../../../../core/services/notification.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit{

  constructor(
    private users: UsersService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private not: NotificationService
  ) {
  }

  closeOutput = output<boolean>()

  form = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
    },
    { updateOn: 'change' },
  );

  public isValidForm = false;

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      this.cdr.detectChanges();
      this.isValidForm = this.form.valid;
      console.log(this.isValidForm)
    });
  }

  // testNotification(){
  //   const user: User = {
  //     email: this.form.controls.email.value!,
  //     password: this.form.controls.password.value!,
  //   };
  //   this.users.logIn(user).subscribe(
  //     (response) => {
  //       console.log('Client is login', response.status);
  //       this.not.addNotification(response.status)
  //       // this.authModalClose();
  //     },
  //     (error) => {
  //       console.error('Client login is failed', error);
  //       this.not.addNotification(error.status)
  //       // this.authModalClose();
  //     },
  //   );
  // }

  public onSubmit() {
    this.closeOutput.emit(true)
    console.log(this.form.valid);
    this.isValidForm = this.form.valid;

    const user: User = {
      email: this.form.controls.email.value!,
      password: this.form.controls.password.value!,
    };



    if (this.form.valid) {
      this.users.logIn(user).subscribe(
        (response) => {
          console.log('Client is login', response.status);
          this.not.addNotification(response.status)
          // this.authModalClose();
        },
        (error) => {
          console.error('Client login is failed', error);
          this.not.addNotification(error.status)
          // this.authModalClose();
        },
      );
      console.log('users is set');
    }
  }

  public openRegister(): void{
    this.router.navigate([{ outlets: { modal: 'register' }}])
  }

    protected readonly InputTypeEnum = InputTypeEnum;
}
