import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DataListComponent } from './home/data/data-list/data-list.component';
import { DevicesListComponent } from './home/devices/devices-list/devices-list.component';
import { DevicesListService } from './home/devices/devices-list.service';
import { DevicesList } from './home/devices/devices-list';
import { DataList, DataRoot, Daum } from './home/data/data-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Root } from './home/devices/devices-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'project_sensecap';
  displayedDeviceColumns: string[] = [
    'device_eui',
    'device_name',
    'be_quota',
    'expired_time',
    'actions',
  ];
  displayedDataColumns: string[] = [
    'measurement_id',
    'measurement_value',
    'time',
  ];

  deviceSource: any;
  dataSource: any;
  showDetails: boolean = false;
  selectedDevice: string | null = null;
  id: string | null = null;

  private deviceUrl = 'https://sensecap.seeed.cc/openapi/list_devices';
  private dataUrl =
    'https://sensecap.seeed.cc/openapi/view_latest_telemetry_data?device_eui=2CF7F1C05460019E';
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
    this.id = this.selectedDevice;
    this.getDataList();
    console.log(this.id);
  }
  getDataList(): void {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
    });

    this.http.get<DataRoot>(this.dataUrl, { headers }).subscribe(
      (response) => {
        this.dataSource = response.data.map((daum) => daum.points).flat();
        // Assign response.data to dataSource
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  devicesList: DevicesList[] = [];
  dataList: DevicesList[] = [];

  getDevicesList(): void {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
    });

    this.http.get<Root>(this.deviceUrl, { headers }).subscribe(
      (response) => {
        this.deviceSource = response.data; // Assign response.data to dataSource
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
    this.showDetails = true; // Show the device details table
  }
}
