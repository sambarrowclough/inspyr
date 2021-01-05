import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import SimpleReactLightbox from 'simple-react-lightbox'

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

		let opt = { 
			method:'POST', 
			headers: {'content-type': 'application/json'},
			body:JSON.stringify({from:document.referrer})
		}
		let url = 'https://cors-anywhere.herokuapp.com/https://BelovedAbleProperty.sambarrowclough.repl.co/track' 
		console.log('tracking..')
		fetch(url, opt).then(r => {
			  console.log('tracked!')
				console.log(r)
		})

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <React.StrictMode>
    <SimpleReactLightbox>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          </Switch>
        )} />
      </SimpleReactLightbox>
      </React.StrictMode>
  );
}

export default App;
