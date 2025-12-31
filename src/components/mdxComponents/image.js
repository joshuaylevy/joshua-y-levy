import NextImage from "next/image";

export function Image({ src, alt = "" }) {
  if (typeof window === "undefined") {
    console.log("🖨️ Server render:", { src, alt });
  } else {
    console.log("🖥️ Client render:", { src, alt });
  }

  return (
    <figure className="my-6 w-full flex flex-col items-start">
      <div className="w-full">
        <NextImage
          src={src}
          alt={alt}
          width={800}
          height={450}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-xl shadow-md"
        />
      </div>
      {alt && (
        <figcaption className="text-sm text-gray-500 mt-2 text-left">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}