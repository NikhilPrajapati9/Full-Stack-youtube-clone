import MuxUploader, {
  MuxUploaderDropElement,
  MuxUploaderFileSelectElement,
  MuxUploaderProgressElement,
  MuxUploaderStatusElement,
} from "@mux/mux-uploader";

interface StudioUploadProps {
  endpoint?: string | null;
  onSuccess: () => void;
}

export const StudioUploader = ({ endpoint, onSuccess }: StudioUploadProps) => {
  return (
    <div>
      <MuxUploader></MuxUploader>
    </div>
  );
};
