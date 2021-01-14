
export default function Card ({ 
  background, 
  pricing,
  pricingWidth,
  pricingHeight,
  logo, 
  logoHeight,
  logoWidth,
  link, 
  external, 
  url
}) {

	// ScrollReveal().reveal('.headline')

  return (
      <div style={{
        background: background, 
        flexBasis: '350px',
        height: '450px',
        borderRadius: '10px',
        maxWidth:'350px',
        marginBottom: '1em',
        border: '1px solid #f6f6f7',
        marginLeft: '1em',
        textAlign: 'center',
        padding: '32px'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          padding: '0'
        }}>
				<div className="flex flex-col items-center">
					<div className="mb-4 text-white">
						<a href={url} target="_blank">
							<img
								src={external}
								width={24}
								height={24}
							/>
						</a>
					</div>

					<div className="mt-4">
						<img
							src={logo}
							width={logoWidth}
							height={logoHeight}
						/>
					</div>
				</div>

				<div className="mt-4">
					<img
						src={pricing}
						width={pricingWidth}
						height={pricingHeight}
					/>
				</div>
      </div>
      </div>
  ) 
}
