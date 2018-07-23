import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

import { NzModalService, NzMessageService} from 'ng-zorro-antd';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(
    private AdminService: AdminService,
    private router: Router,
    private modalService: NzModalService,
    private message: NzMessageService
  ) { }

  dataSet: any[];

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    this.AdminService.getArticle()
        .subscribe(data => {
          this.dataSet = data;
        })
  }

  gotoEdit(id) {
    this.router.navigate([`/admin/editArticle/${id}`]);
  }

  deleteArticle(id: number, title: string): void {
    this.modalService.confirm({
      nzTitle  : '<i>你确定删除这篇文章么?</i>',
      nzContent: '<b>' + title + '</b>',
      nzOnOk   : () => {
        this.AdminService.deleteArticle(id)
        .subscribe(res => {
          if(res['status'] === 1){
            this.message.create('success', res['message']);
            this.getArticle();
          }else{
            this.message.create('erro', res['message']);
          }
        })
      }
    });
  }
}
