import { ar } from "@/lib/copy/ar";
import { en, type Copy } from "@/lib/copy/en";
import type { Locale } from "@/lib/locale";

export type { Copy };

export const copy: Record<Locale, Copy> = { en, ar };
