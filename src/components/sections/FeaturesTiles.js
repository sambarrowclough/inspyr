import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Build up the whole picture',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>

            <div style={{background:'#121212'}}className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
									<div className="mb-16">
										<a href="https://deepsource.io/pricing/" target="_blank" >
											<img src={require('./../../assets/images/external-link-light.svg')}/>
										</a>
									</div>
                </div>

                  <div className="mb-16 mt-16 features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/ds.svg')}
                      alt="Features tile icon 01"
                      width={256}
                      height={256} />
                  </div>

                <div className="features-tiles-item-content">
									<div className="mt-16" >
										<img src={require('./../../assets/images/dsp.png')}/>
									</div>
                </div>
              </div>
            </div>

            <div style={{background:'#fff'}}className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
									<div className="mb-16">
										<a href="https://www.onroadmap.com/pricing" target="_blank" >
											<img src={require('./../../assets/images/external-link-dark.svg')}/>
										</a>
									</div>
                </div>

                  <div className="mb-16 mt-16 features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/rml.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>

                <div className="features-tiles-item-content">
									<div className="mt-16" >
										<img src={require('./../../assets/images/rmp.png')}/>
									</div>
                </div>
              </div>
            </div>

            <div style={{background: 'linear-gradient(225deg,#9b42e3,#303395)'}} className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <a href="https://whimsical.com/pricing" target="_blank" >
                      <img src={require('./../../assets/images/external-link-light.svg')}/>
                    </a>
                  </div>
                </div>

                  <div className="mb-16 mt-16 features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/wl.png')}
                      alt="Features tile icon 01"
                      width={256}
                      height={256} />
                  </div>

                <div className="features-tiles-item-content">
                  <div className="mt-16" >
                    <img src={require('./../../assets/images/wp.png')}/>
                  </div>
                </div>
              </div>
            </div>

            <div style={{background: '#fff'}} className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <a href="https://clubhouse.io/pricing" target="_blank" >
                      <img src={require('./../../assets/images/external-link-dark.svg')}/>
                    </a>
                  </div>
                </div>

                  <div className="mb-16 mt-16 features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/ch.svg')}
                      alt="Features tile icon 01"
                      width={256}
                      height={256} />
                  </div>

                <div className="features-tiles-item-content">
                  <div className="mt-16" >
                    <img src={require('./../../assets/images/ch.png')}/>
                  </div>
                </div>
              </div>
            </div>


            <div style={{background: '#060606'}} className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <a href="https://linear.app/pricing/" target="_blank" >
                      <img src={require('./../../assets/images/external-link-light.svg')}/>
                    </a>
                  </div>
                </div>

                  <div className="mb-16 mt-16 features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/ll.svg')}
                      alt="Features tile icon 01"
                      width={54}
                      height={54} />
                  </div>

                <div className="features-tiles-item-content">
                  <div className="mt-16" >
                    <img src={require('./../../assets/images/lp.png')}/>
                  </div>
                </div>
              </div>
            </div>

            <div style={{background: '#0d101e'}} className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <a href="https://repl.it/site/pricing" target="_blank" >
                      <img src={require('./../../assets/images/external-link-light.svg')}/>
                    </a>
                  </div>
                </div>

                  <div className="mb-16 mt-16 features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/rpll.svg')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>

                <div className="features-tiles-item-content">
                  <div className="mt-16" >
                    <img src={require('./../../assets/images/rpl.png')}/>
                  </div>
                </div>
              </div>
            </div>

            <div style={{background: '#000'}} className="tiles-item reveal-from-bottom  data-reveal-delay='200'">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <a href="https://dekks.app/plans" target="_blank" >
                      <img src={require('./../../assets/images/external-link-light.svg')}/>
                    </a>
                  </div>
                </div>

                  <div className="mb-16 mt-16 features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/dekksl.svg')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>

                <div className="features-tiles-item-content">
                  <div className="mt-16" >
                    <img src={require('./../../assets/images/dekksp.png')}/>
                  </div>
                </div>
              </div>
            </div>

            <div style={{background: '#1e202cf2'}} className="tiles-item reveal-from-bottom  data-reveal-delay='400'">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <a href="https://cssscanpro.com/#pricing" target="_blank" >
                      <img src={require('./../../assets/images/external-link-light.svg')}/>
                    </a>
                  </div>
                </div>

                  <div className="mb-16 mt-16 features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/cssl.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>

                <div className="features-tiles-item-content">
                  <div className="mt-16" >
                    <img src={require('./../../assets/images/css.png')}/>
                  </div>
                </div>
              </div>
            </div>

            <div style={{background: '#0e0e12'}} className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">
                    <a href="https://www.openphone.co/pricing" target="_blank" >
                      <img src={require('./../../assets/images/external-link-light.svg')}/>
                    </a>
                  </div>
                </div>

                  <div className="mb-16 mt-16 features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/opl.svg')}
                      alt="Features tile icon 01"
                      width={256}
                      height={256} />
                  </div>

                <div className="features-tiles-item-content">
                  <div className="mt-16" >
                    <img src={require('./../../assets/images/op.png')}/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
