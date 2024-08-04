const OurProduct = () => {
	return (
		<div className="pt-28 px-4 pb-32">
			<div className="px-3 pb-6">
				<h3
					className="font-bold text-3xl text-main mb-2"
					style={{ color: '#e7592a', lineHeight: '64px' }}
				>
					Our Products
				</h3>
			</div>
			<div className="flex px-3 gap-x-28 font-thin">
				<ul className="list-disc">
					<li className="mb-8 pl-9 leading-8">
						We survey employees, aligning our offering to meet their
						needs and preferences. We can offer gluten-free,
						vegetarian, vegan, paleo, nut free, kosher and halal
						options.
					</li>

					<li className="mb-8 pl-9 leading-8">
						A broad and rotating range of 1,000+ products, including
						fresh fruit, ready-to-eat meals, sandwiches, wraps,
						salads, sushi, snacks and drinks.
					</li>
					<li className="mb-8 pl-9 leading-8">
						Our markets follow the 70/30 rule to encourage healthy
						and balanced eating habits, with 70% delicious
						better-for-you options and 30% indulgent treats. This
						ensures that we cater to everyone’s tastes and compete
						effectively with other providers.
					</li>
				</ul>
				<div>
					<img
						src={
							'https://www.morsl.com.au/wp-content/uploads/2021/08/shutterstock_397748143-1536x1141.jpg'
						}
						loading="lazy"
						decoding="async"
						style={{
							borderRadius: 5,
							boxShadow:
								'rgba(0,0,0,.04) 0 1px 0,rgba(0,0,0,.05) 0 2px 7px,rgba(0,0,0,.06) 0 12px 22px'
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default OurProduct;
