import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router'; 

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit{
  public departmentId: any;
constructor(private route: ActivatedRoute, private router: Router) { }
 ngOnInit() {
  this.route.paramMap.subscribe((params:ParamMap)=>{
    let idString = params.get('id');
    let id = idString ? parseInt(idString) : 0;
    this.departmentId = id;}
    )

}
goPrevious() {
  let previousId = this.departmentId - 1;
  this.router.navigate(['/department', previousId]);
}
goNext() {
  let nextId = this.departmentId + 1;
  this.router.navigate(['/department', nextId]);
}
gotoDepartments() {
  let selectedId = this.departmentId ? this.departmentId : null;
  this.router.navigate(['/department', {id: selectedId}]);
}
showOverview() {
  this.router.navigate(['overview'], {relativeTo: this.route});
}
showContact() {
  this.router.navigate(['contact'], {relativeTo: this.route});
}}
