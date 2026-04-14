import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from './Middleware/withAuth';

// export function middleware(request: NextRequest) {
//     const isLogin = false; 
//     if (isLogin) {
//     // Sudah login → lanjutkan request ke halaman tujuan
//         return NextResponse.next();
//     } else {
//         // Belum login → redirect ke halaman login
//         return NextResponse.redirect(
//         new URL("/auth/login", request.url)
//         );
//     }
//   // NextResponse.next() = lanjutkan request, tidak ada redirect
// //   return NextResponse.redirect(new URL("/", request.url));
// //   return NextResponse.next();
// }

// // Konfigurasi: middleware HANYA berlaku untuk route ini
// export const config = {
//   matcher: ["/produk", "/about"],
// };

const protectedRoutes = ['/profile'];

export default withAuth(
  function middleware(req: NextRequest) {
    return NextResponse.next();
  },
  protectedRoutes
);

export const config = {
  matcher: ['/profile', '/profile/:path*'],
};