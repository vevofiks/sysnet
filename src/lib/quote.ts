export type QuoteResult = {
  status: "idle" | "ok" | "error";
  message: string;
  errors: Partial<Record<"name" | "email" | "phone" | "service" | "message", string>>;
};

export const idleQuote: QuoteResult = {
  status: "idle",
  message: "",
  errors: {},
};
