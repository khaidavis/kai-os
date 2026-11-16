import MenuBar from "./MenuBar";
import Desktop from "./Desktop";
import type { AppId } from "@/store/windows";

export default function OsShell({ app, slug }: { app?: AppId; slug?: string }) {
  return (
    <main className="min-h-screen">
      <MenuBar />
      <Desktop app={app} slug={slug} />
    </main>
  );
}