import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskComponent} from '../app/task/task.component';
import {TaskService} from '../app/task.service';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {appRoutes} from '../app/app.routing';
import {AddEmployeeComponent} from '../app/add-employee/add-employee.component';
import {AddHolidayComponent} from '../app/add-holiday/add-holiday.component';
import {EmployeeComponent} from '../app/employee/employee.component';
import {EmployeesComponent} from '../app/employees/employees.component';
import {TeamComponent} from '../app/team/team.component';
import {TeamsComponent} from '../app/teams/teams.component';
import {TasksComponent} from '../app/tasks/tasks.component';
import {EmployeeService} from '../app/employee.service';
import {HolidayService} from '../app/holiday.service';
import {TeamService} from '../app/team.service';
import {AddTaskComponent} from '../app/add-task/add-task.component';
import {ReportService} from "../app/report.service";
import {ReportsComponent} from "../app/reports/reports.component";
import {ReportComponent} from "../app/report/report.component";
import {CurrentReportComponent} from "../app/current-report/current-report.component";
import {ItemService} from "../app/item.service";
import {DeliveriesComponent} from "../app/deliveries/deliveries.component";
import {DeliveryComponent} from "../app/delivery/delivery.component";
import {ItemComponent} from "../app/item/item.component";
import {ItemsComponent} from "../app/items/items.component";
import {DeliveryService} from "../app/delivery.service";
import {AddItemComponent} from "../app/add-item/add-item.component";
import {AddDeliveryComponent} from "../app/add-delivery/add-delivery.component";
import {LoginComponent} from "../app/login/login.component";
import {ValidateComponent} from "../app/validate/validate.component";
import {SpecialPlansComponent} from "../app/special-plans/special-plans.component";
import {PlanningComponent} from "../app/planning/planning.component";
import {UpdateDailyPlanComponent} from "../app/update-daily-plan/update-daily-plan.component";
import {PlanningService} from "../app/planning.service";

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let service: TaskService;
  let route: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(appRoutes)
      ],
      declarations: [
        AddEmployeeComponent,
        AddHolidayComponent,
        AddTaskComponent,
        AddDeliveryComponent,
        AddItemComponent,
        EmployeeComponent,
        EmployeesComponent,
        TeamComponent,
        TeamsComponent,
        TasksComponent,
        TaskComponent,
        CurrentReportComponent,
        ReportComponent,
        ReportsComponent,
        ItemsComponent,
        ItemComponent,
        DeliveryComponent,
        DeliveriesComponent,
        ValidateComponent,
        LoginComponent,
        UpdateDailyPlanComponent,
        PlanningComponent,
        SpecialPlansComponent
      ],
      providers: [
        EmployeeService,
        HolidayService,
        TeamService,
        TaskService,
        ReportService,
        ItemService,
        DeliveryService,
        PlanningService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TaskService);
    route = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call taskService.fetchOneTask()', () => {
    spyOn(service, 'fetchOneTask').and.callThrough();
    component.ngOnInit();
    expect(service.fetchOneTask).toHaveBeenCalledWith(route.snapshot.params['id']);
  });
});
