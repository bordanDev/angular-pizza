import { ChangeDetectorRef, Component, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import PasswordValidator from '../../../../../../shared/validators/password.validator';
import { InputTypeEnum } from '../../../../../../ui/input-fc/enums';
import { UsersService } from '../../../../api/users.service';
import { User } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  constructor(
    private users: UsersService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}

  closeOutput = output<boolean>();

  form = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        PasswordValidator.passwordStrength,
      ]),
    },
    { updateOn: 'change' },
  );

  public isValidForm = false;

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      this.cdr.detectChanges();
      this.isValidForm = this.form.valid;
      console.log(this.isValidForm);
    });
  }

  onSubmit() {
    const newUser: User = {
      email: this.form.controls.email.value!,
      password: this.form.controls.password.value!,
    };

    this.users.reg(newUser).subscribe(
      (response) => {
        console.log('Registration successfully', response);
        // this.authModalClose()
      },
      (error) => {
        console.error('Reg is failed', error);
        this.closeOutput.emit(true);
      },
    );
  }

  public openSignIn(): void {
    this.router.navigate([{ outlets: { modal: 'sign_in' } }]);
  }

  protected readonly InputTypeEnum = InputTypeEnum;
}
