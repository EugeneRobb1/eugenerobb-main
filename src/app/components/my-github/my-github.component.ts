import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-my-github',
  templateUrl: './my-github.component.html',
  styleUrls: ['./my-github.component.scss']
})
export class MyGithubComponent implements OnInit {
  repos = [];

  constructor(private _userdataService: UserdataService) { }

  getRepoData(): void {
    this._userdataService.getRepos()
      .subscribe((resultArray) => {
        this.repos = resultArray,
        error => console.log("Error: " + error)
      })
  }

  ngOnInit(): void {
    this.getRepoData();
  }

}
