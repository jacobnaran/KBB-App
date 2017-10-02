export interface KEvent {
  //? before : means optional
  $key?: string;
  title: string;
  location?: string;
  datetime?: string;
  description: string;
  contact?: string;
}
