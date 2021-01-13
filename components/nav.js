import Image from "next/image";
import Link from "next/link";

export default function Index ({ }) {
  return (
      <div className="mt-8 flex flex-row items-center justify-between">
        <div className="headline">
          <Link as={`/`} href="/">
            <a>
              <Image src="/inspyr.svg" width="32" height="32" />
            </a>
          </Link>
        </div>

        <div className="flex">
          <div className="mr-6">
            <Link as={`/`} href="/">
              <a className="text-gray-400 text-sm">Icons</a>
            </Link>
          </div>

          <div>
            <Link as={`/pricing`} href="/pricing">
              <a className="text-gray-400 text-sm">Pricing Pages</a>
            </Link>
          </div>
        </div>
      </div>
  )
}