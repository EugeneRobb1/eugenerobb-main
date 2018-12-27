import { Component, OnInit } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  faGraduationCap = faGraduationCap;
  
  myEducation = [
    {
      school: 'Scoil Colmcille',
      type: 'Primary',
      yearStart: 2018,
      yearEnd: 2004,
      desc: 'Primary school',
      website: ''
    },
    {
      school: 'Saint Eunans College',
      type: 'Secondary',
      yearStart: 2005,
      yearEnd: 2011,
      desc: 'Secondary school',
      website: ''
    },
    {
      school: 'Letterkenny Institute of Technology',
      type: 'College',
      yearStart: 2011,
      yearEnd: 2015,
      desc: 'College school boys',
      website: ''
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
