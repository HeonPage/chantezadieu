import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { IConcert } from "@/types/IConcert";
import Link from "next/link";

interface ConcertsArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  concert: IConcert;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function ConcertsArtwork({
  concert,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: ConcertsArtworkProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <Link href={concert.link_url}>
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="overflow-hidden rounded-md">
              <Image
                src={concert.img_url}
                alt={concert.title}
                width={width}
                height={height}
                className={cn(
                  "h-auto w-auto object-cover transition-all hover:scale-105",
                  aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
                )}
              />
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-40">
            <Link href={concert.link_url}>
              <ContextMenuItem>자세히 보기</ContextMenuItem>
            </Link>
          </ContextMenuContent>
        </ContextMenu>
      </Link>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{concert.title}</h3>
        <p className="text-xs text-muted-foreground">{concert.date}</p>
      </div>
    </div>
  );
}
