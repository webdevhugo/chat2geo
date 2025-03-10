import { useScopedI18n } from "@/locales/client";

interface ChatInputDropzoneProps {
  isDragActive: boolean;
}
const ChatInputDropzone = ({ isDragActive }: ChatInputDropzoneProps) => {
  const t = useScopedI18n("chatInput.dropzone");
  if (!isDragActive) return null;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b bg-secondary bg-opacity-90 rounded-3xl z-[2000]">
      <p className="text-foreground text-lg">{t('title')}</p>
      <p className="text-foreground text-sm mt-2">
      {t('supportedFormats')}
        <span className="font-semibold">{t('formats.shapefile')}</span>,
        <span className="font-semibold">{t('formats.geojson')}</span>,
        {/* <span className="font-semibold">.pdf</span>,
        <span className="font-semibold">.txt</span>,
        <span className="font-semibold">.docx</span> */}
      </p>
    </div>
  );
};

export default ChatInputDropzone;
