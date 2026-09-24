import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="space-y-4 lg:col-span-7">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-3/4" />
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
      </div>
      <Skeleton className="aspect-[4/5] w-full lg:col-span-5" />
    </div>
  );
}
