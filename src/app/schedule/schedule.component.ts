import { Component, OnInit } from '@angular/core';
import { ISchedule } from '../ischedule';
import { ScheduleService } from '../schedule.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  displayedColumns: string[] = ['showName', 'airtime', 'networkName', 'image', 'summary'];

  localData: ISchedule[]
     constructor(private scheduleService: ScheduleService) { }


  ngOnInit(): void {
    this.getSchedule("US");
  }

  onCountrySelect(countryCode){
    console.log(countryCode)
    this.getSchedule(countryCode)

  }
  getSchedule(countryCode){
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    this.scheduleService.getScheduleDetails(countryCode, yyyy + '-' + mm + '-' + dd)
    .subscribe(data => this.localData = data)
  }
}




