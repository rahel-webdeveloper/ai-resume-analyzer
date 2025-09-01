import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { formatSize } from "~/lib/utils";

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploadProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0] || null;
      onFileSelect?.(file);
    },
    [onFileSelect]
  );

  const maxFileSize = 20 * 1024 * 1024; // 20 MB

  const { getInputProps, getRootProps, acceptedFiles, inputRef } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: false,
    maxSize: maxFileSize,
  });

  const file = acceptedFiles[0] || null;

  return (
    <div className="w-full gradient-border">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="space-y-2">
          {file ? (
            <div
              className="uploader-selected-file"
              // onClick={(e) => e.stopPropagation()}
            >
              <img src="/images/pdf.png" alt="pdf" className="size-20" />
              <div className="flex items-center space-x-3">
                <div>
                  <p className="text-sm text-gray-700 font-medium max-w-xs">
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {formatSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="p-2 cursor-pointer bg-gray-300"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  // e.preventDefault();
                  // e.stopPropagation();
                  onFileSelect?.(null);
                }}
              >
                <img src="/icons/cross.svg" alt="remove" className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="cursor-pointer">
              <div className="mx-auto w-16 h-16 flex items-center justify-center">
                <img src="/icons/info.svg" alt="upload" className="size-15" />
              </div>
              <div>
                <p className="text-lg text-gray-500">
                  <span className="font-samibold">Click to upload</span>
                  or drag and drop
                </p>

                <p className="text-lg text-gray-500">
                  <span className="font-samibold">PDF (max 20MB)</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
