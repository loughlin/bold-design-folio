import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center space-y-6">
          <p className="font-technical text-[11px] font-bold text-muted-foreground uppercase tracking-[0.18em]">
            Error
          </p>
          <h1 className="text-8xl md:text-9xl font-bold tracking-tight text-foreground">
            404
          </h1>
          <p className="text-base text-muted-foreground max-w-sm mx-auto">
            That page doesn't exist. You may have followed a broken link or mistyped the address.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors duration-300"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
