import NextAuth from "next-auth";
import createMiddleware from "next-intl/middleware";

import authConfig from "../auth.config";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "../routes";

// Middleware de autenticação
const { auth } = NextAuth(authConfig);

const authMiddleware = auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return Response.redirect(
      new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  return null;
});

// Middleware de internacionalização
const intlMiddleware = createMiddleware({
  // A lista de todos os locais suportados
  locales: ['en', 'pt'],

  // Usado quando nenhum local corresponde
  defaultLocale: 'en',
});

// Combinando os middlewares
export default function middleware(req: any) {
  // Primeiro aplica o middleware de internacionalização
  const intlResponse = intlMiddleware(req);
  if (intlResponse) {
    return intlResponse;
  }

  // Em seguida aplica o middleware de autenticação
  return authMiddleware(req, {});
}

// Configuração do matcher
export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)', 
    '/', 
    '/(api|trpc)(.*)', 
    '/(pt|en)/:path*'
  ],
};