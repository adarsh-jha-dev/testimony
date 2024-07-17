"use client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/components/theme-provider";
import { NavbarDemo } from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { store } from "@/store/Store";
import { cn } from "@/lib/utils";
import AuthWrapper from "./AuthWrapper";

type ClientProviderProps = {
  children: React.ReactNode;
  fontSans: string;
};

export default function ClientProvider({
  children,
  fontSans,
}: ClientProviderProps) {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AuthWrapper>
          <NavbarDemo />
          <main
            className={cn(
              "flex flex-col container items-center mt-[122px]",
              fontSans
            )}
          >
            {children}
          </main>
          <Toaster />
        </AuthWrapper>
      </ThemeProvider>
    </Provider>
  );
}
