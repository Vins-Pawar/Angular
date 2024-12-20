import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string ="means wear";

  // for ngModel this function not useful it do it automatically when searchText changes
  // updateSearchText(event:any){
  //   this.searchText = event.target.value;
  // }
}
