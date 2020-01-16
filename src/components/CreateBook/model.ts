import { ReactText } from "react";

export interface CreateBookProps {
  show: boolean;
  onCreate: (book: Record<string, ReactText | undefined>) => void;
  onClose: () => void;
}
