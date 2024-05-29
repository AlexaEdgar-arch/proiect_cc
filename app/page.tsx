import Image from "next/image";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">File monitoring app</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">App used to monitor files newly downloaded in any EC2 instance. Select any instance from the left sidebar.</p>
      </div>
    </main>
  );
}
