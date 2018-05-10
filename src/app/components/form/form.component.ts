import { Component, OnInit } from '@angular/core';
import {FroalaOptions} from '../../froala.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[FroalaOptions]
})
export class FormComponent implements OnInit {

  constructor(private options:FroalaOptions) { }

  ngOnInit() {
  }

}
