import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { analyzeFile } from '@angular/compiler';

import { NzMessageService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private message: NzMessageService,
    private modalService: NzModalService
  ) { }

  isVisible = false;
  isOkLoading = false;
  dataSet:any[];
  newCategory = '';

  ngOnInit() {
    this.fetchCategory();
  }

  fetchCategory() {
    this.adminService.getCategory()
    .subscribe((data:any[]) => {
      this.dataSet = data;
    });
  }

  deleteCategory(name: string): void {

    this.modalService.confirm({
      nzTitle  : '<i>有确定要删除这个分类吗?</i>',
      nzContent: '<b>'+ name +'</b>',
      nzOnOk   : () => {
        this.adminService.deleteCategory(name)
        .subscribe(result => {
          if(result['status'] === 1){
            this.message.create('success', '删除成功');
            this.fetchCategory();
          }else{
            this.message.create('error', '删除失败');
          }
        })
      }
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    if(! (this.newCategory.length > 1) ) {
      alert('请输入类别，OK？');
      return;
    }
    this.isOkLoading = true;    
    this.adminService.postCategory(this.newCategory)
    .subscribe((result) => {

      this.isVisible = false;
      this.isOkLoading = false;

      if(result['status'] === 1){
        this.message.create('success', `添加成功`);
        this.fetchCategory();
      }else{
        this.message.create('erro', '添加失败');
      }
    })
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
