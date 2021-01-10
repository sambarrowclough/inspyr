import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="">
      <Container>
				<div className="py-24 flex flex-col items-left">

				<Link href={'/'}>
					<a className="hover:underline mb-6">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15" fill="none"><path d="M2 3.25C2 2.55964 2.55964 2 3.25 2L11.75 2C12.4404 2 13 2.55964 13 3.25L13 5.75C13 6.44036 12.4404 7 11.75 7L3.25 7C2.55964 7 2 6.44036 2 5.75L2 3.25ZM3.25 3C3.11193 3 3 3.11193 3 3.25L3 5.75C3 5.88807 3.11193 6 3.25 6L11.75 6C11.8881 6 12 5.88807 12 5.75L12 3.25C12 3.11193 11.8881 3 11.75 3L3.25 3ZM4 9.25C4 8.55964 4.55964 8 5.25 8L9.75 8C10.4404 8 11 8.55964 11 9.25L11 11.75C11 12.4404 10.4404 13 9.75 13L5.25 13C4.55964 13 4 12.4404 4 11.75L4 9.25Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>
					</a>
				</Link>

          <div className="text-gray-300 flex flex-col lg:flex-row  lg:w-1/2">
            Made by
            <a
              href={`https://twitter.com/sambarrowclough`}
              target="_blank"
              className="underline text-gray-400"
            >
              Sam
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}


// export default function Footer() {
//   return (
//     <footer className="bg-accent-1 border-t border-accent-2">
//       <Container>
//         <div className="py-28 flex flex-col lg:flex-row items-center">
//           <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
//             Statically Generated with Next.js.
//           </h3>
//           <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
//             <a
//               href="https://nextjs.org/docs/basic-features/pages"
//               className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
//             >
//               Read Documentation
//             </a>
//             <a
//               href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
//               className="mx-3 font-bold hover:underline"
//             >
//               View on GitHub
//             </a>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   )
// }
