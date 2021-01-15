import { CMS_NAME } from '../lib/constants'
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";

const customAnimation = keyframes`
	from {
		visibility: visible;
		opacity: 0;
	}

	to {
		visibility: visible;
		opacity: 1;
	}
`;

// function MyAnimatedComponent({ children, delay }) {
//   return <div>{children}</div>;
// }
function Rev({ children, delay, duration}) {
	return (
		<Reveal
			delay={delay}
			duration={duration}
			keyframes={customAnimation}
			triggerOnce
		>
			{children}
		</Reveal>
	);
}

export default function Intro() {
  return (
  	<Rev duration="1500" delay="20">
	    <section className="flex-col md:flex-row justify-center text-center flex items-center mt-16 mb-16 md:mb-12">
	      <h1 className="text-2xl md:text-7xl text-4xl font-bold tracking-tighter leading-tight md:pr-8">
	        Carefully selected pricing pages.
	      </h1>
	    </section>
    </Rev>
  )
}
