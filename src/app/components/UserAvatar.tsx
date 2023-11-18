import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/app/lib/utils";
import Image from "next/image";

type Props = {
  name: string | null | undefined;
  image: string | null | undefined;
  className?: string;
};

export default function UserAvatar({ name, image, className }: Props) {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {image && (
        <Image
          src={image}
          alt={name ?? ""}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}

      <AvatarFallback
        className="dark:bg-white dark:text-black text-lg"
        delayMs={1000}
      >
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
}
