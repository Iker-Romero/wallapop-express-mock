export interface InputAndButton {
  color: string;
  backgroundColor: string;
  height: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  justifySelf?: string;
  alignSelf?: string;
  font?: string;
}

export interface InputType extends InputAndButton {
  type: string;
  placeholder?: string;
}

export interface HeadingType {
  color: string;
}
