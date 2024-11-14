"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IProfile } from "@/types/IProfile";
import { usePathname } from "next/navigation";
import { blurData_url } from "@/utils/utils";
interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  member: IProfile;
}

export function ProfileCard({ member, className, ...props }: ProfileCardProps) {
  const pathname = usePathname();
  if (!member)
    return (
      <div className={cn("space-y-1", className)} {...props}>
        <div className="space-y-1 text-sm text-center">
          <h3 className="font-semibold leading-none">{"준비"}</h3>
        </div>
      </div>
    );
  return (
    <div
      className={cn("flex flex-col justify-between gap-2 pb-2", className)}
      {...props}
    >
      {pathname == "/about/director" ? (
        ""
      ) : (
        <div
          className={cn(
            "text-sm text-center",
            pathname.startsWith("/member/roster") && "h-6"
          )}
        ></div>
      )}
      <div className="overflow-hidden rounded-md">
        <Image
          src={
            member.img_url !== null ? member.img_url : "/profile/director.png"
          }
          alt={member.name}
          width={306}
          height={396}
          className={cn("object-cover aspect-[19/25]")}
          placeholder="blur"
          blurDataURL={member.blurData_url ? member.blurData_url : blurData_url}
          priority={true}
        />
      </div>
      <div className="flex flex-col gap-1 text-center">
        <h3 className="font-semibold leading-none tracking-widest text-sm">
          {member.name}
        </h3>
        {pathname.startsWith("/glee") && member.major.length > 2 && (
          <h3 className="font-semibold leading-none tracking-widest text-xs">
            {member.major}
          </h3>
        )}
      </div>
    </div>
  );
}
