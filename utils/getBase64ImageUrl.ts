import sharp from "sharp";
import { ICloudinaryImage } from "@/types/ICloudinaryImage";
const cache = new Map<ICloudinaryImage, string>();
export async function getBase64ImageUrl_ICloudinay(
  image: ICloudinaryImage
): Promise<string> {
  try {
    // 이미지 다운로드
    let url = cache.get(image);
    if (url) {
      return url;
    }
    const response = await fetch(
      `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`
    );
    const buffer = await response.arrayBuffer();

    // WEBP로 변환 및 base64 인코딩
    const webpBuffer = await sharp(buffer).webp().toBuffer();

    const base64 = webpBuffer.toString("base64");
    return `data:image/webp;base64,${base64}`;
  } catch (error) {
    console.error("Error converting image to WebP base64:", error);
    throw error;
  }
}

export async function getBase64ImageUrl(item: any): Promise<string> {
  try {
    // 이미지 다운로드
    let url = cache.get(item);
    if (url) {
      return url;
    }
    const response = await fetch(`${item.img_url}`);
    const buffer = await response.arrayBuffer();

    // WEBP로 변환 및 base64 인코딩
    const webpBuffer = await sharp(buffer).webp().toBuffer();

    const base64 = webpBuffer.toString("base64");
    return `data:image/webp;base64,${base64}`;
  } catch (error) {
    console.error("Error converting image to WebP base64:", error);
    throw error;
  }
}
