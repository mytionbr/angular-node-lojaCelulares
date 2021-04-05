import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cellphone } from 'src/app/models/cellphone.model';
import { CellphoneService } from 'src/app/services/cellphone.service';

@Component({
  selector: 'app-cellphone-details',
  templateUrl: './cellphone-details.component.html',
  styleUrls: ['./cellphone-details.component.css']
})
export class CellphoneDetailsComponent implements OnInit {

  currentCellphone: Cellphone ={
    name: "",
    brand: "",
    price: 0,
    imageLink: "",
    colors: [],
    description: "",
    memoryStorage: 0,
    sold: false
  }

  message = ''
      
  constructor(
    private cellphoneService : CellphoneService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message =  ''
    this.getCellphone(this.route.snapshot.params.id)
  }

  getCellphone(id:string):void{
    this.cellphoneService.get(id)
      .subscribe(
        data =>{
          this.currentCellphone = data
          console.log(data)
        },
        error =>{
          console.log(error)
        } 
      )
  }

  updateSold(status: boolean): void{
    const data = {
      name: this.currentCellphone.name,
      brand: this.currentCellphone.brand,
      price: this.currentCellphone.price,
      imageLink: this.currentCellphone.imageLink,
      colors: this.currentCellphone.colors,
      description: this.currentCellphone.description,
      memoryStorage: this.currentCellphone.memoryStorage,
      sold: status
    }

    this.cellphoneService.updata(this.currentCellphone._id,data)
      .subscribe(
        response =>{
          this.currentCellphone.sold = status
          console.log(response)
          this.message = response.message
        },
        error =>{
          console.log(error)
        }
      )
  }

  updateCellphone():void{
    this.cellphoneService.updata(this.currentCellphone._id,this.currentCellphone)
      .subscribe(
        response =>{
          console.log(response)
          this.message = response.message
        },
        error=>{
          console.log(error)
        }
      )
  }
  
  deleteCellphone():void{
    this.cellphoneService.delete(this.currentCellphone._id)
      .subscribe(
        response =>{
          console.log(response)
          this.router.navigate(['/cellphones'])
        }
      )
  }
}
