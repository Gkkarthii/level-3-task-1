import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTodoList';
  work:any[]=[];
  isselected:boolean=false;
  
  addTask(item:any) {
    this.work.push({id:this.work.length, name:item, isselected: false});
    console.warn(this.work)
  }
  removeTask(id:any) {
    this.work=this.work.filter(item=>item.id!==id)
  }

}

