import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  public selectedId:any;
  departments:any = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let idString = params.get('id');
      if (idString !== null) {
        const id = parseInt(idString);
        if (!isNaN(id)) {
          this.selectedId = id;
    
        }}});
  }

  onSelect(department:any) {
     this.router.navigate(['/department', department.id]);
  }

  isSelected(department:any) { return department.id === this.selectedId; }
}

