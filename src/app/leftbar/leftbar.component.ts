import { Component } from '@angular/core';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrl: './leftbar.component.css'
})
export class LeftbarComponent {

  categories:string[] = [];

  constructor(private shopService:ShopService){
      this.getCategories()
  }

getCategories(){
  this.shopService.mainData.subscribe(data=>{
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if(!this.categories.includes(element.categories)){
      this.categories.push(element.categories)
    }
  }
  })
}

removeDuplicates(param:string){
     return [...new Set(param)]
}

}
