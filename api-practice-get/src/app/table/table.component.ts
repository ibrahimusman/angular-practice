import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Post, StoredRow, Comment } from './table.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  posts: Post[] = [];
  storedRows: StoredRow[] = [];
  Comments: Comment[] = [];
  id: number = 1;

  constructor(
    private table: TableService
  ) { }

  ngOnInit() {
    this.getComments(this.id);
    this.getPosts();
  }
  getPosts() {
    this.table.getPosts().subscribe(
      (data: Post[]) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
  getComments(id: number) {
    this.table.getComments(id).subscribe(
      (data: Comment[]) => {
        this.Comments = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
  storeRow(id: string | number) {
    this.table.storeRow(Number(id)).subscribe(
      (data: StoredRow) => {
        this.storedRows.push(data);
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}
