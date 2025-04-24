import {Component, OnInit} from '@angular/core';
import { StorageService } from "../../core/services/storage.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit{
  ngOnInit() {
    console.log('asdasdfiklguh')
  }

  constructor(private storage: StorageService) {

  }

}
