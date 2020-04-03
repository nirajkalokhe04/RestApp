import { Component, OnInit } from '@angular/core';
import { UserServiceService} from '../service/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList : any[];
  constructor(private userService : UserServiceService) { }

  ngOnInit() {

    this.userService.getUserList()
    .subscribe(data=>{
      this.userList=data;
      console.log(this.userList);
    },error => console.error());
    
  }

}
