export interface IHistory {
  decade: string;
  image_url?: string;
  item: IHistoryComponent[];
}
interface IHistoryComponent {
  title: string;
  description?: string;
  date: string;
  flag: boolean;
  img_url?: string;
  blurData_url?: string;
}
