import {TestBed} from '@angular/core/testing';

import {TaskService} from '../app/task.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {appRoutes} from '../app/app.routing';
import {AddEmployeeComponent} from '../app/add-employee/add-employee.component';
import {AddHolidayComponent} from '../app/add-holiday/add-holiday.component';
import {AddTaskComponent} from '../app/add-task/add-task.component';
import {EmployeeComponent} from '../app/employee/employee.component';
import {EmployeesComponent} from '../app/employees/employees.component';
import {TeamComponent} from '../app/team/team.component';
import {TeamsComponent} from '../app/teams/teams.component';
import {TasksComponent} from '../app/tasks/tasks.component';
import {TaskComponent} from '../app/task/task.component';
import {CurrentReportComponent} from '../app/current-report/current-report.component';
import {ReportComponent} from '../app/report/report.component';
import {ReportsComponent} from '../app/reports/reports.component';
import {EmployeeService} from '../app/employee.service';
import {HolidayService} from '../app/holiday.service';
import {TeamService} from '../app/team.service';
import {ReportService} from '../app/report.service';
import {Status} from '../app/types';
import {DeliveriesComponent} from '../app/deliveries/deliveries.component';
import {AddItemComponent} from '../app/add-item/add-item.component';
import {ValidateComponent} from '../app/validate/validate.component';
import {ItemComponent} from '../app/item/item.component';
import {ItemsComponent} from '../app/items/items.component';
import {AddDeliveryComponent} from '../app/add-delivery/add-delivery.component';
import {DeliveryComponent} from '../app/delivery/delivery.component';
import {LoginComponent} from '../app/login/login.component';
import {ItemService} from '../app/item.service';
import {DeliveryService} from '../app/delivery.service';
import {NotificationService} from '../app/notification.service';
import {SuggestionService} from '../app/suggestion.service';
import {OrderService} from '../app/order.service';
import {AddOrderComponent} from '../app/add-order/add-order.component';
import {AddNotificationComponent} from '../app/add-notification/add-notification.component';
import {AddSuggestionComponent} from '../app/add-suggestion/add-suggestion.component';
import {OrderComponent} from '../app/order/order.component';
import {OrdersComponent} from '../app/orders/orders.component';
import {NotificationComponent} from '../app/notification/notification.component';
import {NotificationsComponent} from '../app/notifications/notifications.component';
import {SuggestionComponent} from '../app/suggestion/suggestion.component';
import {SuggestionsComponent} from '../app/suggestions/suggestions.component';
import {ReturnComponent} from "../app/return/return.component";
import {ReturnsComponent} from "../app/returns/returns.component";
import {ComplaintComponent} from "../app/complaint/complaint.component";
import {ComplaintsComponent} from "../app/complaints/complaints.component";
import {ReturnService} from "../app/return.service";
import {ComplaintService} from "../app/complaint.service";
import {PlanningComponent} from "../app/planning/planning.component";
import {UpdateDailyPlanComponent} from "../app/update-daily-plan/update-daily-plan.component";
import {SpecialPlansComponent} from "../app/special-plans/special-plans.component";

const mockOrders = [
  {
    id: 1,
    status: Status.WAITING_FOR_PAYMENT,
    firstName: 'Piotr',
    lastName: 'Piątek',
    email: 'piotr@piatek.pl',
    phoneNumber: null,
    street: 'ul. Łukasza Cieplińskiego',
    houseNumber: '44a',
    city: 'Piotrków Trybunalski',
    postalCode: '19-402',
    deliveryItems: [
      {
        id: 1,
        item: {
          id: 1,
          name: 'Piłka',
          quantity: 2,
          stockPrice: 5,
          originalPrice: 5,
          currentPrice: 7
        },
        quantity: 8
      },
      {
        id: 2,
        item: {
          id: 2,
          name: 'Zabawka',
          quantity: 1,
          stockPrice: 25,
          originalPrice: 26,
          currentPrice: 27
        },
        quantity: 1
      }
    ],
    scheduledFor: new Date('2018-09-03'),
    value: 105
  },
  {
    id: 2,
    status: Status.WAITING_FOR_PAYMENT,
    firstName: 'Katarzyna',
    lastName: 'Tracz',
    email: 'katarzyna@tracz.pl',
    phoneNumber: '312209232',
    street: 'ul. Fiodora Dostojewskiego',
    houseNumber: '2',
    city: 'Chorzów',
    postalCode: '43-120',
    deliveryItems: [
      {
        id: 3,
        item: {
          id: 3,
          name: 'Maskotka',
          quantity: 25,
          stockPrice: 10,
          originalPrice: 20,
          currentPrice: 20
        },
        quantity: 25
      }
    ],
    scheduledFor: new Date('2018-09-03'),
    value: 250
  }
];

const mockDeliveryItemRequest = {
  firstName: 'Jan',
  lastName: 'Krauze',
  email: 'jan@krauze.pl',
  phoneNumber: null,
  street: 'ul. Armii Krajowej',
  houseNumber: '225',
  city: 'Wisła',
  postalCode: '77-106',
  deliveryItemRequests: [
    {
      itemId: 3,
      quantity: 25
    }
  ],
  scheduledFor: new Date('2018-09-03')
};

describe('OrderService', () => {
  let orderService: OrderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
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
        AddOrderComponent,
        AddNotificationComponent,
        AddSuggestionComponent,
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
        OrderComponent,
        OrdersComponent,
        NotificationComponent,
        NotificationsComponent,
        SuggestionComponent,
        SuggestionsComponent,
        ComplaintsComponent,
        ComplaintComponent,
        ReturnsComponent,
        ReturnComponent,
        UpdateDailyPlanComponent,
        SpecialPlansComponent,
        PlanningComponent
      ],
      providers: [
        EmployeeService,
        HolidayService,
        TeamService,
        TaskService,
        ReportService,
        ItemService,
        DeliveryService,
        OrderService,
        NotificationService,
        SuggestionService,
        ReturnService,
        ComplaintService
      ]
    });
    orderService = TestBed.get(OrderService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(orderService).toBeTruthy();
  });

  describe('given fetchAllOrders method', () => {
    describe('when called', () => {
      it('should hit "/orders" with GET and return orders', () => {
        orderService.fetchAllOrders().subscribe(orders => {
          expect(orders.length).toBe(2);
          expect(orders).toEqual(mockOrders);
          const req = httpMock.expectOne('http://localhost:8080/orders');
          expect(req.request.method).toBe('GET');
          req.flush(mockOrders);
          httpMock.verify();
        });
      });
    });
  });

  describe('given fetchOneOrder method', () => {
    describe('when called', () => {
      it('should hit "/orders/1" with GET and return order', () => {
        orderService.fetchOneOrder(1).subscribe(order => {
          expect(order).toEqual(mockOrders[0]);
        });
        const req = httpMock.expectOne('http://localhost:8080/orders/1');
        expect(req.request.method).toBe('GET');
        req.flush(mockOrders[0]);
        httpMock.verify();
      });
    });
  });

  describe('given addOneOrder method', () => {
    describe('when called', () => {
      it('should hit "/orders/add" with POST', () => {
        orderService.addOneOrder(mockDeliveryItemRequest).subscribe(() => {
        });
        const req = httpMock.expectOne('http://localhost:8080/orders');
        expect(req.request.method).toBe('POST');
        httpMock.verify();
      });
    });
  });
});