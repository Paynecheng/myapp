import { Component, OnInit } from '@angular/core';
import { FrontEndService } from '../front-end.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [FrontEndService]
})
export class ListComponent implements OnInit {

  constructor(
    private frontEndService: FrontEndService,
    private route: ActivatedRoute
  ) { }

  list: any[];

  ngOnInit() {
    this.getList();
  }

  getList(): void {
    this.route.params.subscribe((params) => {
      this.frontEndService.getList(params.id).subscribe((res) => {
      this.list = res;
      });
    });
  }
}
