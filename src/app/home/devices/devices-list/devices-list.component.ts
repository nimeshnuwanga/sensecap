import { Component, OnInit } from '@angular/core';
import { DevicesListService } from '../devices-list.service';
import { DevicesList, Root } from '../devices-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-devices-list',
  standalone: true,
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css'],
})
export class DevicesListComponent implements OnInit {
  title = 'project_sensecap';
  displayedColumns: string[] = [
    'device_eui',
    'device_name',
    'be_quota',
    'expired_time',
    'actions'
  ];
  dataSource: any;
  showDetails: boolean = false; // Variable to control device details table visibility
  selectedDevice: string | null = null;

  private apiUrl = 'https://sensecap.seeed.cc/openapi/list_devices';
  private username = '1ADUTXWJ8EW4O4XQ';
  private password =
    '93649036EA9C4BD5A98B365FB7F18AF2407CA04AA53943C1B552A5FF06CB5B23';
  constructor(
    private devicesListService: DevicesListService,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getDevicesList();
  }

  devicesList: DevicesList[] = [];
  getDevicesList(): void {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
    });

    this.http.get<Root>(this.apiUrl, { headers }).subscribe(
      (response) => {
        this.dataSource = response.data;
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  handleAction(id: string) {
    // this.router.navigate(['data-list', id]);
    this.selectedDevice = id; // Store the selected device
    this.showDetails = true;
  }
}
