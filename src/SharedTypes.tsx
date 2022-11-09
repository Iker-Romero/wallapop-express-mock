export interface InputAndButton {
  color: string;
  backgroundColor: string;
  height: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  padding?: string;
}

export interface InputType extends InputAndButton {
  type: string;
  placeholder?: string;
}

export interface ButtonType extends InputAndButton {
  text: string;
}
