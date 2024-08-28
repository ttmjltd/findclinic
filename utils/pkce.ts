// Required for Twitter OAuth 2.0 PKCE (Proof Key for Code Exchange)

export function generateCodeVerifier(): string {
  const array = new Uint32Array(56 / 2);
  window.crypto.getRandomValues(array);
  return Array.prototype.map
    .call(array, (dec: number) => ("0" + dec.toString(16)).slice(-2))
    .join("");
}

export async function generateCodeChallenge(
  codeVerifier: string
): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);

  const base64string = Array.from(new Uint8Array(digest))
    .map((byte) => String.fromCharCode(byte))
    .join("");

  return btoa(base64string)
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}
