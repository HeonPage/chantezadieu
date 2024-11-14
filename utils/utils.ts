import { redirect } from "next/navigation";

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 * @param {('error' | 'success')} type - The type of message, either 'error' or 'success'.
 * @param {string} path - The path to redirect to.
 * @param {string} message - The message to be encoded and added as a query parameter.
 * @returns {never} This function doesn't return as it triggers a redirect.
 */
export const blurData_url =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcWQ8AAbcBGqb119EAAAAASUVORK5CYII=";
export function encodedRedirect(
  type: "error" | "success" | "reset" | "reset_success",
  path: string,
  message: string
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}

export const generateShortFileName = async (fileExt) => {
  // 16바이트의 랜덤 데이터 생성
  const randomBytes = crypto.getRandomValues(new Uint8Array(16));

  // SHA-256 해시 생성
  const hashBuffer = await crypto.subtle.digest("SHA-256", randomBytes);

  // ArrayBuffer를 16진수 문자열로 변환
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const fullHashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // 해시값의 처음 16자리만 사용
  const shortHash = fullHashHex.slice(0, 16);

  // 짧은 해시값과 파일 확장자를 결합하여 파일 이름 생성
  return `${shortHash}.${fileExt}`;
};

export function insertThumb(url) {
  const parts = url.split("/");
  const concertImagesIndex = parts.findIndex(
    (part) => part === "concert-images"
  );

  if (concertImagesIndex !== -1) {
    parts.splice(concertImagesIndex + 1, 0, "thumb");
  }

  return parts.join("/");
}
export const getCookieValue = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Set expiration time for the cookie
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`; // Set the cookie with name, value, and expiration
};
