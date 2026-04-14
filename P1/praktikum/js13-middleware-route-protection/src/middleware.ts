import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // NextResponse.next() = lanjutkan request, tidak ada redirect
  return NextResponse.redirect(new URL("/", request.url));
//   return NextResponse.next();
}

// Konfigurasi: middleware HANYA berlaku untuk route ini
export const config = {
  matcher: ["/produk", "/about"],
};