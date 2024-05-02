import { Component } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { History } from '../../models/History';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileImage = "assets/userimg.jpg";
  username = localStorage.getItem("username");
  
  historyList : Array<History> = [];
  isListLoading = false;

  constructor(private historyService : HistoryService){
  }

  ngOnInit() : void {
    this.getHistoryList();
  }

  getHistoryList() : void {
    this.isListLoading = true;
    this.historyList = [];
    this.historyService.getHistoryList().subscribe({
      next : data =>
        {
          for (const key in data){
            this.historyList.push(data[key]);
            console.log(data[key]);
          }
          }
          ,
        error : error =>{
          console.log(error);
        },
        complete : () =>{
          this.isListLoading = false;
          console.log("complete colected data " + this.historyList.length.toString());
        }
  });
  }
}
