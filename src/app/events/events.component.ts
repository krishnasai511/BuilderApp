import { Component, OnInit } from '@angular/core';
import { EventService } from '../project/service/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = []
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    console.log("sdfghjghj")
    // this._eventService.getEvents()
    //   .subscribe(
    //     res => this.events = res,
    //     err => console.log(err)
    //   )
  }

}
