// export class DevicesList {
// }
export interface Root {
  code: string;
  data: DevicesList[];
}

export interface DevicesList {
  device_eui: string;
  device_name: string;
  be_quota: string;
  expired_time: string;
}
