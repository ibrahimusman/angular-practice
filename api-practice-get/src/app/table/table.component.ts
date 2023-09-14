// table.component.ts
import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  posts: Post[] = [];
  storedRows: Post[] = [];

  constructor(private table: TableService) {}

  ngOnInit() {
    this.table.getPosts().subscribe(
      (data: Post[]) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  storeRow(id: number) {
    this.table.storeRow(id).subscribe(
      (data: Post) => {
       this.storedRows.push(data);
       
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
    
  }

}
