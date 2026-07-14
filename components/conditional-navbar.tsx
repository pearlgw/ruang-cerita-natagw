"use client"

import { usePathname } from "next/navigation"

const VALID_ROUTES = ["/", "/allblog", "/blog", "/dashboard", "/favorite", "/login", "/register"];

export default function ConditionalNavbar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuthPage = pathname === "/login" || pathname === "/register";
    const isNotFoundPage = !VALID_ROUTES.includes(pathname);

    if (isAuthPage || isNotFoundPage) {
        return null;
    }

    return <>{children}</>;
}
