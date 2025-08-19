import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ListPlusIcon,
  MoreVerticalIcon,
  Share2Icon,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";
import { APP_URL } from "../../constants";

interface VideoMenuProps {
  videoId: string;
  variants?: "ghost" | "secondary";
  onRemove?: () => void;
  isOwner?: boolean;
}

export const VideoMenu = ({
  videoId,
  variants = "ghost",
  onRemove,
  isOwner = false,
}: VideoMenuProps) => {
  const onShare = () => {
    const fullUrl = `${
      APP_URL
    }/videos/${videoId}`;
    navigator.clipboard.writeText(fullUrl);
    toast.success("Link copied to the clipboard");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variants} size="icon" className="rounded-full">
          <MoreVerticalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
        <DropdownMenuItem className="cursor-pointer" onClick={onShare}>
          <Share2Icon className="mr-2 size-4" />
          Share
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>
          <ListPlusIcon className="mr-2 size-4 cursor-pointer" />
          Add to playlist
        </DropdownMenuItem>
        {isOwner && (
          <DropdownMenuItem className="cursor-pointer" onClick={onRemove}>
            <Trash2 className="mr-2 size-4" />
            Remove
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
