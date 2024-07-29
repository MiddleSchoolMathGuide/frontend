export async function sha256(data: string): Promise<string> {
  return Array.from(
    new Uint8Array(
      await crypto.subtle.digest("SHA-256", new TextEncoder().encode(data))
    )
  ).reduce((acc, b) => acc + b.toString(16).padStart(2, "0"), "");
}
