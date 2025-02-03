import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseFormComponent } from "../course-form/course-form.component";
import { CourseListComponent } from "../course-list/course-list.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { StudentFormComponent } from "../student-form/student-form.component";
import { StudentListComponent } from "../student-list/student-list.component";
import { TeacherFormComponent } from "../teacher-form/teacher-form.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CourseFormComponent, CourseListComponent, TeacherFormComponent, StudentFormComponent, StudentListComponent, SidebarComponent, NavbarComponent, CommonModule],
})
export class DashboardComponent {
  selectedContent: string = 'welcome';

  constructor() {
    window.addEventListener('contentChange', (event: any) => {
      this.selectedContent = event.detail;
    });
  }
}

