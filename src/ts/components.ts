interface CompStyle {}
interface CompOptions {
    type?:string
}

export interface EuaComponent {
  type: string;
  compStyle:CompStyle,
  options:CompOptions;
}
