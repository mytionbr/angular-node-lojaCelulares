import { Component, OnInit } from '@angular/core';
import { CellphoneService } from 'src/app/services/cellphone.service';

@Component({
  selector: 'app-add-cellphone',
  templateUrl: './add-cellphone.component.html',
  styleUrls: ['./add-cellphone.component.css']
})
export class AddCellphoneComponent implements OnInit {

  cellphone = {
    name: "",
    brand: "",
    price: 0,
    imageLink: "",
    colors: [],
    description: "",
    memoryStorage: 0,
    sold: false
  }

  submitted = false

  constructor(private cellphoneService: CellphoneService) { }

  ngOnInit(): void {
  }

  saveTutorial():void{
    const data = {
      name: this.cellphone.name,
      brand: this.cellphone.brand,
      price: this.cellphone.price,
      imageLink: this.cellphone.imageLink,
      colors: this.cellphone.colors,
      description: this.cellphone.description,
      memoryStorage: this.cellphone.memoryStorage,
      sold: this.cellphone.sold
    }

    this.cellphoneService.create(data)
      .subscribe(
        response =>{
          console.log(response)
          this.submitted = true
        },
        error =>{
          console.log(error)
        }
      )
  }

  newCellphone():void{
    this.submitted = false
    this.cellphone = {
      name: "",
      brand: "",
      price: 0,
      imageLink: "",
      colors: [],
      description: "",
      memoryStorage: 0,
      sold: false
    }
  }

}
