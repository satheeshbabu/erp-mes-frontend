import {Component, Inject} from '@angular/core';
import {Complaint, ComplaintStatus, ExpenseRequest, ExpenseType} from "../../../types";
import {ComplaintService} from "../../../services/complaint.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ReportService} from "../../../services/report.service";
import {ItemService} from "../../../services/item.service";

export interface DialogData {
  status: string[];
  complaint: Complaint;
}

@Component({
  selector: 'app-complaint-status-dialog',
  templateUrl: './complaint-status-dialog.component.html',
  styleUrls: ['./complaint-status-dialog.component.scss']
})
export class ComplaintStatusDialogComponent {

  showSpinner: boolean;

  constructor(public dialogRef: MatDialogRef<ComplaintStatusDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private complaintService: ComplaintService,
              private itemService: ItemService,
              private reportService: ReportService) {
  }

  cancel() {
    this.dialogRef.close(null);
  }

  submit(s: string) {
    this.showSpinner = true;
    this.complaintService.updateComplaintStatus(s, this.data.complaint.id)
      .subscribe(res => {
        this.data.complaint = res;
      }, err => {
        console.log(err);
      }, () => {
        if (this.data.complaint.status === ComplaintStatus.MONEY_RETURNED) {
          const expenseRequest: ExpenseRequest = {
            expenseType: ExpenseType.UNEXPECTED,
            amount: this.data.complaint.value
          };
          this.reportService.addExpense(expenseRequest).subscribe(res => {
          });
        } else if (this.data.complaint.status === ComplaintStatus.NEW_ITEM_SENT) {
          this.data.complaint.deliveryItems.forEach(deliveryItem => {
            this.itemService.buyItem(deliveryItem.item.id, deliveryItem.quantity).subscribe(res => {
            });
          });
        }
        this.cancel();
      });
  }

}