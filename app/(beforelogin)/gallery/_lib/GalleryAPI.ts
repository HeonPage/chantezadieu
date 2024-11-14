import { ICloudinaryImage } from "@/types/ICloudinaryImage";
import cloudinary from "@/utils/cloudinary";
import { getBase64ImageUrl_ICloudinay } from "@/utils/getBase64ImageUrl";
import { createClient } from "@/utils/supabase/server";
import { cache } from "react";

// 캐시된 Supabase 클라이언트 생성
const getSupabase = cache(() => createClient());

export const getGallery = async (year: string, slug: string) => {
  const searchUrl = await cloudinary.v2.search
    .expression(
      // `resource_type:image AND folder:${year || "2015"}/${slug || ""}/*`
      `resource_type:image AND folder:gallery/ann/*`
    )
    .sort_by("public_id", "desc")
    .max_results(400)
    .to_url(86400); //24시간 캐싱

  // searchUrl을 사용하여 결과를 가져옵니다
  const response = await fetch(searchUrl);
  const results = await response.json();
  let reducedResults: ICloudinaryImage[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ICloudinaryImage) => {
    return getBase64ImageUrl_ICloudinay(image);
  });
  const imagesWithblurData_urls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurData_url = imagesWithblurData_urls[i];
  }
  return reducedResults;
};

export const getGalleryEtc = async (slug: string) => {
  const searchUrl = await cloudinary.v2.search
    .expression(
      // `resource_type:image AND folder:${year || "2015"}/${slug || ""}/*`
      `resource_type:image AND folder:gallery/${slug}/*`
    )
    .sort_by("public_id", "desc")
    .max_results(400)
    .to_url(86400); //24시간 캐싱

  // searchUrl을 사용하여 결과를 가져옵니다
  const response = await fetch(searchUrl);
  const results = await response.json();
  let reducedResults: ICloudinaryImage[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ICloudinaryImage) => {
    return getBase64ImageUrl_ICloudinay(image);
  });
  const imagesWithblurData_urls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurData_url = imagesWithblurData_urls[i];
  }
  return reducedResults;
};
