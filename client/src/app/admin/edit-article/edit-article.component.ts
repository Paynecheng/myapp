import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

import { NzMessageService } from 'ng-zorro-antd';

import { Article } from '../../common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  title: string;
  description: string;
  category_id: number;
  id: string;
  yyy = '';

  listOfOption: any[];

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id === '0') {
      this.fetchCategory();
    } else {
      this.fetchCurrentArticle(this.id);
    }
  }

  fetchCategory(): void {
    this.adminService.getCategory()
        .subscribe(result => {
          this.listOfOption = result;
          this.yyy = result[0].name;
        });
  }

  fetchCurrentArticle(id: string): void {
    this.adminService.getArticleById(id)
    .subscribe(result => {
      this.listOfOption = result;
      this.yyy = result[0].category;
      this.title = result[0].title;
      this.description = result[0].description;
    });
  }

  submitArticle(): void {

    if (this.title.length <= 0 || this.yyy.length <= 0 || this.description.length < 0) {
      this.message.create('error', '请填写完所有字段');
      return;
    }

    this.category_id = this.listOfOption.find((item) => item.name === this.yyy).category_id;

    const articleObj: Article = {
      title: this.title,
      description: this.description,
      category_id: this.category_id
    };

    this.adminService.postArticle(articleObj)
    .subscribe((result => {
      if (result['status'] === 1) {
        this.message.create('success', result['message']);
        this.router.navigate(['/admin/article']);
      } else {
        this.message.create('error', result['message']);
      }
    }));
  }

  modifyArticle(): void {
    this.adminService.modifyArticle({title: this.title, description: this.description, id: this.id})
    .subscribe((res) => {
      if (res['status'] === 1) {
        this.message.create('success', res['message']);
        this.router.navigate(['/admin/article']);
      } else {
        this.message.create('error', res['message']);
      }
    });
  }

  cancle(): void {
    this.router.navigate(['/admin/article']);
  }

}
