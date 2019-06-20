import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Ag Grid Demo';

  list  =  [];

  name :string = ''


  ngOnInit() {
   }


   add(name : string)
   {
      this.list.unshift(name);

      console.log(this.list)

      this.name =''  
   }

   remove(i: number)
   {
      this.list.splice(i,1)
   }


}



  

  



