import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';





@Component({
  selector: 'app-materail',
  templateUrl: './materail.component.html',
  styleUrls: ['./materail.component.css']
})
export class MaterailComponent implements OnInit {


  @Output() selctevent: EventEmitter<MatSelectChange> = new EventEmitter();

  toppings = new FormControl();


  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  All = 'All';

  constructor() { }

  ngOnInit() {
  }


  toggle() {
    console.log('click');
  }


  click($event) {
    console.log($event);
  }
}
