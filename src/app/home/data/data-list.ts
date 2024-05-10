export interface DataRoot {
  code: string;
  data: Daum[];
}

export interface Daum {
  channel_index: number;
  points: DataList[];
}

export interface DataList {
  points: any;
  measurement_value: any;
  measurement_id: string;
  time: string;
}
