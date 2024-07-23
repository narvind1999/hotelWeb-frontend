import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
currentPage = 1;
rooms =[];
total:any;
loading =false

  constructor(private adminService:AdminService,
    private message: NzMessageService,private modelService: NzModalService
  ){
    this.getRoom();
  }

  getRoom(){
    this.adminService.getRooms(this.currentPage-1).subscribe(res=>{
      console.log(res);
      this.rooms = res.roomDtoList;
      this.total = res.totalPages *1;
    })
  }

  pageIndexChange(value:any){
    this.currentPage = value;
    this.getRoom();
  }

  showConfirm(roomId: number){
    this.modelService.confirm({
      nzTitle:'Confirm',
      nzContent: 'Do you want to delete this room?',
      nzOkText:'Delete',
      nzCancelText:'Cancel',
      nzOnOk:() => this.deleteRoom(roomId)
    })
  }

  deleteRoom(id:number){
    this.adminService.deleteRoomDetails(id).subscribe(res=>{
      this.message.success("Room Deleted Successfully",{nzDuration:5000})
      this.getRoom();
    },error=>{
      this.message.error(error.error,{nzDuration:5000})
    })
  }
}
