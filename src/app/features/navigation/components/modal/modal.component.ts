import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InputTypeEnum } from '../../../../ui/input-fc/input-fc.component';

@Component({
  selector: 'app-modal-auth',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.url[0].path);
  }

  get toggleAuth(): boolean {
    return this.activatedRoute.snapshot.url[0].path === 'register';
  }

  authModalClose() {
    console.log('authModalClose()');
    this.router.navigate(['../']);
  }

  protected readonly InputTypeEnum = InputTypeEnum;
}
