"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export type Message =
  | { success: string }
  | { error: string }
  | { reset: string }
  | { reset_success: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  const router = useRouter();
  useEffect(() => {
    if ("success" in message) {
      window.alert(
        "가입해주셔서 감사합니다. 이메일에서 인증메일을 확인해주세요."
      );
      router.push("/login");
    }
    if ("reset" in message) {
      window.alert("이메일에서 비밀번호 초기화 메일을 확인해주세요.");
      router.push("/login");
    }
    if ("reset_success" in message) {
      window.alert("비밀번호 재설정에 성공했습니다.");
      router.push("/login");
    }
  }, [message]);

  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {"success" in message && (
        <div className="text-foreground border-l-2 border-foreground px-4">
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className="text-red-400 border-l-2 border-destructive-foreground px-4">
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className="text-foreground border-l-2 px-4">{message.message}</div>
      )}
    </div>
  );
}
