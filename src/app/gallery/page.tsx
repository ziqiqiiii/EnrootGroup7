import ImageGallery from "@/components/ImageGallery";
import ClientWrapper from "@/components/ClientWrapper"

export default function Gallery() {
  return (
    <div className="flex flexCenter lg:py-8 py-2 lg:px-14 px-1">
      <ClientWrapper>
        <ImageGallery />
      </ClientWrapper>
    </div>
  );
}