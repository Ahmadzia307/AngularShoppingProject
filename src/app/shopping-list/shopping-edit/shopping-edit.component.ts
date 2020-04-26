import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }
  
  @ViewChild("inputName") nameRef:ElementRef;
  @ViewChild("inputAmount") amountRef:ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  ngOnInit(): void {
  }

  onAddItem()
  {
    
    const inputName = this.nameRef.nativeElement.value;
    const inputAmount = this.amountRef.nativeElement.value;
    
    const newIngredient = new  Ingredient(inputName,inputAmount);
    this.ingredientAdded.emit(newIngredient);
  }
}
