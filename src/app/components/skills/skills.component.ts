import { Component, OnInit } from '@angular/core';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  faAddressCard = faAddressCard;

  constructor() { }

  ngOnInit() {
  }

}
