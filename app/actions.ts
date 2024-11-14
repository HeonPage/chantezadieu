"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();
  const student_id = parseInt(formData.get("student_id")?.toString());
  const supabase = createClient();
  const origin = headers().get("origin");

  if (!email || !password) {
    return { error: "Email and password are required" };
  }
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback?redirect_to=/welcome`,
    },
  });
  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  } else {
    try {
      const student_idR =
        student_id > 79 ? 1900 + student_id : 2000 + student_id;
      const { data: data_profile, error: error_profile } = await supabase
        .from("profile")
        .insert({
          user_id: data.user.id,
          email: email,
          name: name,
          student_id: student_idR,
        });

      if (error_profile) {
        console.error("Profile insertion error:", error_profile);
        return encodedRedirect(
          "error",
          "/sign-up",
          "프로필 생성 중 오류가 발생했습니다."
        );
      }

      console.log("Profile created:", data_profile);
    } catch (error) {
      console.error("Unexpected error:", error);
      return encodedRedirect(
        "error",
        "/sign-up",
        "예기치 않은 오류가 발생했습니다."
      );
    }
    return encodedRedirect(
      "success",
      "/sign-up",
      "가입해주셔서 감사합니다. 이메일에서 인증메일을 확인해주세요."
    );
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/login", error.message);
  }

  const role = await getUserRole();

  if (role == "admin") return redirect("/admin");
  else return redirect("/");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = createClient();
  const origin = headers().get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password"
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "reset",
    "/forgot-password",
    "Check your email for a link to reset your password."
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/reset-password",
      "Password and confirm password are required"
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect("error", "/reset-password", "Passwords do not match");
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect("error", "/reset-password", "Password update failed");
  }

  encodedRedirect("reset_success", "/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/login");
};

export async function clearAllCookies() {
  "use server";
  const cookieStore = cookies();
  const allCookies = cookieStore.getAll();

  allCookies.forEach((cookie) => {
    cookieStore.delete(cookie.name);
  });
}

export async function getUserRole() {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  const { data: roleData } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", user.data.user.id)
    .single();

  return roleData.role;
}
