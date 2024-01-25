import Image from "next/image";

export default function Home() {
  return (
    <main className="flex text-black min-h-screen flex-col p-0 m-0">
      <div className="grid  grid-cols-7 h-full min-h-screen">
        <div className="sticky top-0 left-0 h-full flex max-w-20 px-5 shrink-0 flex-col gap-8">
          <span>good</span>
          <span>good</span>
          <span>good</span>
          <span>good</span>
          <span>good</span>
        </div>
        <div className="col-span-6 border border-zinc-900">
          <div className="sticky top-0 max-w-[1360px] p-5 shadow shadow-black">navbar</div>
          <div>content</div>
        </div>
      </div>
    </main>
  );
}
