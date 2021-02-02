import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'
import { useState } from 'react' 

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("Subscribe for updates");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sent) return;

    if (!email) return;

    console.log(`Submitting Name ${email}`);
    fetch("https://inspyr.sambarrowclough.repl.co", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: email }),
    }).then((r) => {
      console.log(r);
      setSub("Thank you!");
      setSent(true);
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <footer className="">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between py-24 items-center">
  				<div className="flex lg:flex-row flex-col justify-center items-centers  relative">
            <div className="text-sm mb-10 lg:mb-0 lg:mr-10">
      				<Link href={'/'}>
      					<a
                  style={{
                    top: '-6px'
                  }}
                  className="hover:underline mr-4 absolute bottom-0 -mb-1">
      						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15" fill="none"><path d="M2 3.25C2 2.55964 2.55964 2 3.25 2L11.75 2C12.4404 2 13 2.55964 13 3.25L13 5.75C13 6.44036 12.4404 7 11.75 7L3.25 7C2.55964 7 2 6.44036 2 5.75L2 3.25ZM3.25 3C3.11193 3 3 3.11193 3 3.25L3 5.75C3 5.88807 3.11193 6 3.25 6L11.75 6C11.8881 6 12 5.88807 12 5.75L12 3.25C12 3.11193 11.8881 3 11.75 3L3.25 3ZM4 9.25C4 8.55964 4.55964 8 5.25 8L9.75 8C10.4404 8 11 8.55964 11 9.25L11 11.75C11 12.4404 10.4404 13 9.75 13L5.25 13C4.55964 13 4 12.4404 4 11.75L4 9.25Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>
      					</a>
      				</Link>

              <div className="text-gray-300 ml-10">
                Made by
                <a
                  href={`https://twitter.com/sambarrowclough`}
                  target="_blank"
                  className="underline text-gray-400 ml-1"
                >
                  @sambarrowclough
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-sm text-gray-400 mr-2">
                Icons from
              </div>
              <a href="https://icons.modulz.app/" target="_blank" className="ml-1">
                <svg width="24" height="24" viewBox="0 0 35 35" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 26.5L4 31V22L10 26.5Z"></path><path d="M10 14.5L4 19V10L10 14.5Z"></path><path d="M17 8.5L11 13V4L17 8.5Z"></path><path d="M24 14.5L18 19V10L24 14.5Z"></path><path d="M31 8.5L25 13V4L31 8.5Z"></path><path d="M31 20.5L25 25V16L31 20.5Z"></path><path d="M10 25L4 20.5L10 16V25Z"></path><path d="M17 19L11 14.5L17 10V19Z"></path><path d="M10 13L4 8.5L10 4V13Z"></path><path d="M24 13L18 8.5L24 4V13Z"></path><path d="M31 19L25 14.5L31 10V19Z"></path><path d="M31 31L25 26.5L31 22V31Z"></path></svg>
              </a>

              <a href="https://feathericons.com/" target="_blank" className="ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
              </a>

              <a href="https://heroicons.com/" target="_blank" className="ml-1">
                <svg width="24" height="23" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2C17.3742 4.60188 21.494 6.05295 25.754 6.14C25.916 7.06829 26 8.024 26 9.00115C26 16.5654 20.93 22.9503 14 24.9346C7.07 22.9503 2 16.5654 2 9.00115C2 8.024 2.084 7.06743 2.246 6.13829C6.50571 6.05198 10.6255 4.60182 14 2.00086V2Z" stroke="#AC94FA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>  
            </div>
          </div>

          <div className="flex lg:mt-0 lg:ml-12 mt-10 items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col lg:flex-row flex-row justify-center"
            >
              <div className="mb-10 lg:mb-0">
                <input
                  placeholder="Email addres"
                  className="bg-gray-100 transition-all focus:ring-4 rounded outline-none px-4 py-2 mr-4"
                  type="text"
                  value={email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  onClick={handleSubmit}
                  className="bg-gray-900 text-white rounded px-4 py-2 hover:shadow-sm cursor-pointer transition-all"
                  type="button"
                  value={sub}
                />
              </div>
            </form>
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
