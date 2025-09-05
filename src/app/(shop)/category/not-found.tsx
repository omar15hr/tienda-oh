import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600">Category Not Found</p>
      <Link href={"/"} className="mt-6 text-indigo-600 hover:underline">
        Regresar
      </Link>
    </div>
  );
}