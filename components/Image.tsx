import StyledImage from '../components-ui/StyledImage';

export interface ImageType {
  src?: string;
  alt?: string;
  height?: string;
  width?: string;
  Div?: string;
  flex?: string;
}

const Image = (props: ImageType) => {
  const { src, alt } = props;

  return <StyledImage src={src} alt={alt} {...props} />;
};

export default Image;
