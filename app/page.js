import Link from "next/link";
import SideBar from "./components/drawer";

export default function Home() {
  return (
    <main className="flex min-h-screen h1 flex-col items-center justify-between p-24">
      <button className="btn btn-ghost">
        <Link href={"/about"}>
          <h1 className="text-3xl font-bold">about</h1>
        </Link>
      </button>
      <div>this is home page</div>
      <div>
        This div will always use light theme
        <span>This span will always use retro theme!</span>
      </div>
    </main>
  );
}
