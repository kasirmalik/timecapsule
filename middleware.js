// middleware.js
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/about"], // routes that don’t need login
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // protect everything else
};
