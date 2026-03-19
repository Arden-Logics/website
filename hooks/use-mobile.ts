"use client";

import { useMedia } from "./use-media";

export function useIsMobile(): boolean {
  return useMedia("(max-width: 1024px)");
}
