// import ScrollReveal from 'scrollreveal'
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";

  const customAnimation = keyframes`
		from {
			visibility: visible;
			opacity: 0;
			transform: matrix3d(0.95, 0, 0, 0, 0, 0.95, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
			transition: opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s;
		}

		to {
			visibility: visible;
			opacity: 1;
			transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
			transition: opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s;
		}
	`;

// function MyAnimatedComponent({ children, delay }) {
//   return <div>{children}</div>;
// }
export default function Show({ children, delay, duration}) {
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