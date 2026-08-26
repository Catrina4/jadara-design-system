import { FileUp, X } from "lucide-react";
import { useRef } from "react";
import type { ChangeEvent } from "react";
import "./FileUpload.css";

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  files?: File[];
  onChange?: (files: File[]) => void;
  onRemove?: (file: File) => void;
  label?: string;
  description?: string;
}

export function FileUpload({
  accept,
  multiple = false,
  files = [],
  onChange,
  onRemove,
  label = "Upload files",
  description = "Drag and drop files here or click to browse.",
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const selectedFiles = Array.from(
      event.target.files ?? [],
    );

    onChange?.(
      multiple
        ? [...files, ...selectedFiles]
        : selectedFiles,
    );
  }

  return (
    <div className="jadara-file-upload">
      <button
        type="button"
        className="jadara-file-upload__dropzone"
        onClick={() => inputRef.current?.click()}
      >
        <span className="jadara-file-upload__icon">
          <FileUp size={24} />
        </span>

        <span className="jadara-file-upload__label">
          {label}
        </span>

        <span className="jadara-file-upload__description">
          {description}
        </span>

        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          hidden
        />
      </button>

      {files.length > 0 && (
        <div className="jadara-file-upload__files">
          {files.map((file) => (
            <div
              key={`${file.name}-${file.size}-${file.lastModified}`}
              className="jadara-file-upload__file"
            >
              <div>
                <p className="jadara-file-upload__file-name">
                  {file.name}
                </p>

                <p className="jadara-file-upload__file-size">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>

              {onRemove && (
                <button
                  type="button"
                  aria-label={`Remove ${file.name}`}
                  onClick={() => onRemove(file)}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}