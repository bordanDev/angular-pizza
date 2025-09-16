import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navigateBackOutlet } from '../../../../shared/helpers/navigate-back-outlet';
import { InputTypeEnum } from '../../../../ui/input-fc/enums';

@Component({
  selector: 'app-modal-auth',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.url[0].path);
  }

  get toggleAuth(): boolean {
    return this.route.snapshot.url[0].path === 'register';
  }

  authModalClose() {
    navigateBackOutlet(this.route, this.router); // Navigate your modal/drawer(something like inside outlets logic)
    // to close only item
  }

  protected readonly InputTypeEnum = InputTypeEnum;
}
