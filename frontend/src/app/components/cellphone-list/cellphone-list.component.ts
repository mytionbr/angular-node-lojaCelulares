import { Component, OnInit } from '@angular/core';
import { CellphoneService } from 'src/app/services/cellphone.service';


@Component({
  selector: 'app-cellphone-list',
  templateUrl: './cellphone-list.component.html',
  styleUrls: ['./cellphone-list.component.css']
})
export class CellphoneListComponent implements OnInit {

  cellphone = {
    id:"",
    name: "",
    brand: "",
    price: 0,
    imageLink: "",
    colors: [],
    description: "",
    memoryStorage: 0,
    sold: false
  }

  cellphones: any
  currentCellphone = this.cellphone
  currentIndex = -1
  name = ''

  constructor(private cellphoneService: CellphoneService) { }

  ngOnInit(): void {
    this.retrieveCellphones()
  }

  retrieveCellphones(): void{
    this.cellphoneService.getAll()
      .subscribe(
        data =>{
          this.cellphones = data
          console.log(data)
        },
        error =>{
          console.log(error)
        }
      )
  }

  refleshList(): void{
    this.retrieveCellphones()
    this.currentCellphone = this.cellphone
    this.currentIndex = -1
  }

  setActiveCellphone(cellphone:any,index:any):void{
    this.currentCellphone = cellphone 
    this.currentIndex = index
  }

  removeAllCellphones():void{
    this.cellphoneService.deleteAll()
      .subscribe(
        response=>{
          console.log(response)
          this.retrieveCellphones()
        },
        error =>{
          console.log(error)
        }
      )
  }

  searchName(): void{
    this.cellphoneService.findByName(this.name)
      .subscribe(
        data =>{
          this.cellphones = data
          console.log(data)
        },
        error =>{
          console.log(error)
        }
      )
  }

}
