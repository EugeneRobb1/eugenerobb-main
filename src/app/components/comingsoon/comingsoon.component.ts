import { Component, OnInit } from '@angular/core';
import { User } from '../../models/userdata.model';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.scss']
})
export class ComingsoonComponent implements OnInit {
  user: User = null;


  constructor(private _userdataService: UserdataService) { }


  ngOnInit() {
    this._userdataService.getUser().subscribe(user => { this.user = user })
  }

}
