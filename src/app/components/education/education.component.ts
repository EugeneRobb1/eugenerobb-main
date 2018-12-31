import { Component, OnInit } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { EducationdataService } from '../../services/educationdata.service'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  faGraduationCap = faGraduationCap;

  _myEducation = [];
  sortedByYearEducation = [];

  constructor(private _educationdataService: EducationdataService) { }

  getEducationData(): void {
    this._educationdataService.getEducation()
      .subscribe((resultArray) => {
        this._myEducation = resultArray,
          this.sortBy('yearEnd');
        error => console.log("Error :: " + error)
      })
  }

  ngOnInit(): void {
    this.getEducationData();
  }


  sortBy(input: string) {
    this._myEducation.sort((a: any, b: any) => {
      if (a[input] > b[input]) {
        return -1;
      } else if (a[input] > b[input]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.sortedByYearEducation = this._myEducation;
  }
}
