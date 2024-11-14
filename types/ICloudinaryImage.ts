/* eslint-disable no-unused-vars */
export interface ICloudinaryImage {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
  blurData_url?: string;
}

export interface SharedModalProps {
  index: number;
  images?: ICloudinaryImage[];
  currentPhoto?: ICloudinaryImage;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}
