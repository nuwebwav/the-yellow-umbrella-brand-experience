import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Yellow Umbrella — Premium Custom & Corporate Gifting in India" },
      { name: "description", content: "We don't sell gifts, we create emotions. Custom, corporate and personalized gift hampers crafted in India." },
      { name: "author", content: "The Yellow Umbrella" },
      { name: "keywords", content: "unique gifts India, custom gifts, corporate gifting, personalized hampers, surprise boxes" },
      { property: "og:title", content: "The Yellow Umbrella — Premium Gifting in India" },
      { property: "og:description", content: "Custom, corporate and personalized gift hampers. We craft emotions, wrapped in yellow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl">404</h1>
        <p className="mt-4 text-muted-foreground">This page wandered off in the rain.</p>
        <a href="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-ink text-yellow-brand px-5 py-2.5 text-sm font-medium">
          Go home
        </a>
      </div>
    </div>
  ),
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Toaster />
        <Scripts />
      </body>
    </html>
  );
}
