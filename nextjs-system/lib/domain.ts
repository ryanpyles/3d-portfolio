import { headers } from "next/headers";

export type Domain = "ryan" | "formaetrix";

export function getDomain(): Domain {
  try {
    const headersList = headers();
    const host = headersList.get("host") ?? "";
    return host.includes("formaetrix") ? "formaetrix" : "ryan";
  } catch {
    return "ryan";
  }
}

export function isFormaetrix(domain: Domain): boolean {
  return domain === "formaetrix";
}
