import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="text-center flex flex-col items-center bg-[#141414] py-12 px-6 rounded-lg gap-3 w-[100%] max-w-80">
        <Image
          src="/dalle.webp" // Update with the correct path to your image
          alt="Cindy Kandie"
          width={100} // Set appropriate width
          height={100} // Set appropriate height
          className="rounded-[100%] mb-5"
        />
        <h1 className="text-2xl font-semibold">Cindy Kandie</h1>
        <h2 className="text-[#c5f82a]">Nairobi, Kenya</h2>
        <h3>"Front-end Developer and Artist"</h3>
        <div className="flex mt-4 flex-col justify-center w-full gap-4">
          <Link href="https://github.com/cindykandie" className="text-center bg-[#333333] p-2 w-[100%] rounded-lg">
            GitHub
          </Link>
          <Link href="https://cindykandie.com" className="text-center bg-[#333333] p-2 w-[100%] rounded-lg">
            Portfolio
          </Link>
          <Link href="https://www.linkedin.com/in/cindykandie" className="text-center bg-[#333333] p-2 w-[100%] rounded-lg">
            LinkedIn
          </Link>
          <Link href="https://twitter.com/cindy_kandie" className="text-center bg-[#333333] p-2 w-[100%] rounded-lg">
            Twitter
          </Link>
          <Link href="https://hashnode.com/@cindykandie" className="text-center bg-[#333333] p-2 w-[100%] rounded-lg">
            HashNode
          </Link>
        </div>
      </section>
    </main>
  );
}
