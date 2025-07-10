"use client";

import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";
import { Loader2Icon, PlusIcon } from "lucide-react";
import { toast } from "sonner";
import { ResponsiveModel } from "@/components/responsive-dialog";
import { useState } from "react";

export const StudioUploadModal = () => {
  const utils = trpc.useUtils();

  const create = trpc.videos.create.useMutation({
    onSuccess: () => {
      toast.success("Video created!");
      utils.studio.getMany.invalidate();
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
  });
  return (
    <>
      <ResponsiveModel
        title="Upload a Video"
        open={!!create.data}
        onOpenChange={() => create.reset()}
      >
        <p>This will be an uploader</p>
      </ResponsiveModel>
      <Button
        variant="secondary"
        onClick={() => create.mutate()}
        className="w-full"
        disabled={create.isPending}
      >
        {create.isPending ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          <PlusIcon />
        )}
        Create
      </Button>
    </>
  );
};
