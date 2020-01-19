function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function genDailyTipOrder(messageCount) {
	var order = [];
	for(var i = 0; i < messageCount; i++) {
		order.push(i);
	}
	shuffleArray(order);
	return order;
}

$(document).ready(function() {
	messages = [

["Change five lights", "Replace your five most frequently used <a href=\"https://www.energystar.gov/index.cfm?c=fixtures.pr_light_fixtures\">light fixtures</a> or the <a href=\"https://www.energystar.gov/products/lighting_fans/light_bulbs\">lightbulbs</a> in them with <a href=\"https://www.energystar.gov/\">ENERGY STAR</a>-qualified products and you will help the environment while saving $70 a year on energy bills. <a href=\"https://www.energystar.gov/\">ENERGY STAR</a> lighting provides bright, warm light; generates 75% less heat; uses about 75% less energy than standard lighting; and lasts from 10 to 50 times longer."],
["Look for ENERGY STAR", "When buying new products for your home, look for EPA's <a href=\"https://www.energystar.gov/\">ENERGY STAR</a> label to help you make the most energy-efficient decision. You can find the <a href=\"https://www.energystar.gov/\">ENERGY STAR</a> label on more than 60 kinds of products, including appliances, lighting, heating and cooling equipment, electronics, and office equipment. Over their lifetimes, products in your home that have earned the <a href=\"https://www.energystar.gov/\">ENERGY STAR</a> label can reduce greenhouse gas emissions by about 130,000 pounds and save you $11,000 on energy bills."],
["Heat and cool smartly", "Heating and cooling accounts for almost half your energy bill -- about $1,000 a year! There is a lot you can do to drive down this cost. Simple steps like changing air filters regularly, properly using a programmable thermostat, and having your heating and cooling equipment maintained annually by a licensed contractor can save energy and increase comfort while helping to protect the environment. Depending on where you live, you can cut your annual energy bill by more than $200 by replacing your old heating and cooling equipment with <a href=\"https://www.energystar.gov/\">ENERGY STAR</a>-qualified equipment."],

["Seal and insulate your home", "Reduce air leaks and stop drafts by using caulk, weather stripping, and insulation to seal your home's envelope and add more insulation to your attic to block out heat and cold. A knowledgeable homeowner or skilled contractor can save up to 20% on heating and cooling costs and significantly enhance home comfort with comprehensive sealing and insulating measures."],
["Reduce, reuse, recycle", "Reducing, reusing, and recycling in your home helps conserve energy and reduces pollution and greenhouse gas emissions from resource extraction, manufacturing, and disposal. If there is a recycling program in your community, recycle your newspapers, beverage containers, paper, and other goods. Also, composting your food and yard waste reduces the amount of garbage that you send to landfills and reduces greenhouse gas emissions. Visit EPA's <a href=\"https://www.epa.gov/warm/individual-waste-reduction-model-iwarm-tool\">Individual Waste Reduction Model (iWARM)</a> to learn about the energy benefits of recycling, rather than landfilling, common waste products."],
["Use water efficiently", "It takes lots of energy to pump, treat, and heat water, so saving water reduces greenhouse gas emissions. Saving water around the home is simple. Three percent of the nation's energy is used to pump and treat water, so conserving water conserves energy that reduces greenhouse gas pollution. Reduce the amount of waste you generate and the water you consume whenever possible. Pursue simple water-saving actions, such as not letting the water run while shaving or brushing teeth, and save money while conserving water by using products with the <a href=\"https://www.epa.gov/watersense/watersense-products\">WaterSense</a> label. Did you know a <a href=\"https://www.epa.gov/watersense/residential-toilets\">leaky toilet</a> can waste 200 gallons of water per day? Repair all toilet and faucet leaks right away. Running your dishwasher only with a full load can save 100 pounds of carbon dioxide and $40 per year. Be smart when irrigating your lawn or landscape. Only water when needed, and do it during the coolest part of the day; early morning is best. See <a href=\"https://www.epa.gov/watersense\">EPA WaterSense</a> for more water saving tips."],
["Be green in your yard", "Did you know that food scraps and yard waste make up 20-30 percent of what we throw away? Composting your food and yard waste reduces the amount of garbage that you send to landfills and reduces greenhouse gas emissions. See <a href=\"https://www.epa.gov/recycle/composting-home\">EPA's tips on how to compost</a>."],
["Purchase green power", "Power your home by purchasing green power. <a href=\"https://www.epa.gov/greenpower\">Green power</a> is environmentally friendly electricity that is generated from renewable energy sources such as wind and the sun. There are two ways to use green power: You can buy green power, or you can modify your house to generate your own green power. Buying green power is easy. It offers a number of environmental and economic benefits over conventional electricity, including lower greenhouse gas emissions, and it helps increase clean energy supply. There are a number of steps you can take to create a <a href=\"http://www.greenhomeguide.com/\">greener home</a>, including <a href=\"http://energy.gov/energysaver/energy-saver\">installing solar panels</a> and <a href=\"http://www.dsireusa.org/\">researching incentives for renewable energy</a> in your state."],
["Calculate your household's carbon footprint", "Use EPA's <a href=\"https://www3.epa.gov/carbon-footprint-calculator/\">Household Carbon Footprint Calculator</a> to estimate your household greenhouse gas emissions resulting from energy use, transportation, and waste disposal. This tool helps you understand where your emissions come from and identify ways to reduce them."],
["Spread the word", "Tell family and friends that energy efficiency is good for their homes and good for the environment because it lowers greenhouse gas emissions and air pollution. Tell five people and together we can help our homes help us all."],

["Manage your office equipment energy use better", "Did you know that the total electricity consumed by idle electronics equals the annual output of 12 power plants? Save energy and reduce greenhouse gas emissions at work by setting your computer, monitor, and other office equipment to power down when not in use. Activate the <a href=\"https://www.energystar.gov/products/office_equipment/computers\">power management features</a> on your computer and monitor, unplug laptop power cords when not in use, and turn off equipment and lights at the end of the day. Plugging everything into a power strip makes it easy to shut everything down at one time."],
["Look for ENERGY STAR-qualified products for the office", "Office products that have earned the <a href=\"https://www.energystar.gov/\">ENERGY STAR</a> feature special energy-efficient designs, which enable them to use less energy while performing regular tasks. Look for <a href=\"https://www.energystar.gov/\">ENERGY STAR</a>-qualified office equipment, such as computers, copiers, and printers, in addition to more than 60 product categories, including lighting, heating and cooling equipment, and commercial appliances."],
["Ask your office building manager if your building has earned the ENERGY STAR", "Buildings can earn EPA's <a href=\"https://www.energystar.gov/\">ENERGY STAR</a> too! <a href=\"https://www.energystar.gov/buildings\">ENERGY STAR-labeled buildings</a> provide safe, healthy, and productive environments that use about 35% less energy than average buildings. Their efficient use of energy also reduces the total operational cost of the building. Let your facility's maintenance department know about the ENERGY STAR buildings program, so they can learn how to improve your building's performance."],
["Use less energy for your commute", "Switching to public transportation, carpooling, biking, or telecommuting can save energy and reduce greenhouse gas emissions on your way to and from work. Encourage your employer to offer commuter benefits that address limited or expensive parking, reduce traffic congestion, improve employee recruiting and retention, and minimize the environmental impacts associated with drive-alone commuting. If you do drive, find out the fuel efficiency of your vehicle at the <a href=\"http://www.fueleconomy.gov/\">Federal Fuel Economy</a> website, and make more environmentally informed choices when purchasing your next vehicle by using EPA's <a href=\"https://www.epa.gov/greenvehicles\">Green Vehicle Guide</a>."],

["Reduce, reuse, recycle", "<a href=\"https://www.epa.gov/recycle\">Reducing, reusing, and recycling</a> at the office helps conserve energy and reduces pollution and greenhouse gas emissions. Reduce, reuse, and recycle at the office by using two-sided printing and copying; only printing what you need; buying supplies made with recycled content; and recycling paper products, batteries, and used printer cartridges. All of these actions help conserve energy and reduce carbon pollution. For <a href=\"https://www.epa.gov/recycle/electronics-donation-and-recycling\">old electronics</a> (e.g., computers, monitors, cell phones, TVs), investigate leasing programs, manufacturer and retailer take-back programs, and municipal programs and events to ensure reuse and recycling. You can also donate used equipment to schools or other organizations and take advantage of any available tax incentives for computer donations. Visit EPA's <a href=\"https://www.epa.gov/smm/wastewise\">WasteWise</a> website for information on starting a recycling program at work."],
["Use green power", "Emissions from electricity generated from fossil fuels can be one of the most significant environmental impacts associated with your organization's operations. Green power is electricity that is generated from renewable energy sources such as wind, sun, geothermal, and biomass. Purchasing green power is an easy, effective way for your organization to reduce its carbon footprint and environmental impact. Visit EPA's <a href=\"https://www.epa.gov/www.epa.gov/greenpower\">Green Power Partnership</a> for information on how to purchase green power."],
["Encourage your organization to develop a greenhouse gas inventory", "<a href=\"https://www.epa.gov/climateleadership\">Developing a greenhouse gas inventory</a> is a critical first step toward measuring and managing your organization's climate change impact. An inventory is a list of emission sources and the associated emissions quantified using standardized methods. Many organizations are taking this step and by doing so find that most of their emissions come from building heating and cooling, fleet vehicles, electricity use, and employee travel. EPA's <a href=\"https://www.epa.gov/climateleadership\">Center for Corporate Climate Leadership</a> is a resource center to help all organizations identify and achieve cost-effective greenhouse gas emission reductions."],

["Buy smart: Purchase a fuel-efficient, low-greenhouse gas vehicle", "When shopping for a new or used vehicle (or even renting a vehicle), choose the cleanest, most fuel-efficient vehicle that meets your needs. With a wide range of clean, fuel-efficient vehicles available today, it's easier than ever to go green for the environment and for your wallet. Check out <a href=\"https://www.epa.gov/greenvehicles\">EPA's Green Vehicle Guide</a> or <a href=\"http://www.fueleconomy.gov/\">www.fueleconomy.gov</a> to find the best, most comprehensive information on vehicle emissions and fuel economy. You can also learn more about the <a href=\"https://www.epa.gov/fueleconomy/basic-information-fuel-economy-labeling\">fuel economy and environment label</a> that you'll see on all new vehicles. The label has been redesigned and updated for even easier comparison shopping. These new window stickers provide fuel economy and environmental ratings for all new vehicles, including advanced technology vehicles like electric cars and plug-in hybrids. And while at the showroom, you can scan the QR Code® on each vehicle's label to be connected to additional information online, including personalized cost and energy-use estimates."],
["Drive smart", "To improve your fuel economy and reduce greenhouse gas emissions, go easy on the brakes and gas pedal, avoid hard accelerations, reduce your time spent idling (no more than 30 seconds), and unload unnecessary items in your trunk to reduce weight. If you have a removable roof rack and you are not using it, take it off to improve your fuel economy. Use cruise control if you have it, and for vehicles with selectable four-wheel drive, consider operating in two-wheel drive mode when road conditions make it safe to do so. For more information, take a look at these tips for <a href=\"http://www.fueleconomy.gov/feg/driveHabits.jsp\">driving more efficiently</a>."],
["Remember maintenance...", "Get regular tune-ups, follow the manufacturer's maintenance schedule (which can be found in your owner's manual), and use the recommended grade of motor oil. A well-maintained car is more fuel-efficient, produces fewer greenhouse gas emissions, is more reliable, and is safer! For more details, including potential fuel savings, check out these tips for <a href=\"http://www.fueleconomy.gov/feg/maintain.jsp\">keeping your car in shape</a>."],
["Don't forget your tires!", "Check your tire pressure regularly. Under-inflation increases tire wear, reduces your fuel economy, and leads to higher greenhouse gas and other air pollutant emissions. If you don't know the correct tire pressure for your vehicle, you can find it listed on the door to your vehicle's glove compartment, or on the driver's-side door pillar. And when it's time for new tires, consider purchasing tires with \"low rolling resistance,\" an energy-saving feature."],
["Give your car a break", "Use <a href=\"http://www.publictransportation.org/Pages/default.aspx\">public transportation</a>, <a href=\"http://www.commuterchoice.com/\">carpool</a>, or <a href=\"http://www.fhwa.dot.gov/environment/bicycle_pedestrian/index.cfm\">walk or bike</a> whenever possible to avoid using your car. Leaving your car at home just two days a week can reduce your greenhouse gas emissions by an average of 2 tons per year. Also consider telecommuting (working from home via phone or the Internet), which can reduce the stress of commuting, reduce harmful emissions, and save you money. And when driving, try combining your errands and activities into one trip."],
["Use renewable fuels", "Give <a href=\"https://www.epa.gov/renewable-fuel-standard-program/e85-fuel\">E85 and biodiesel</a> a try. Both are renewable fuels (made from renewable sources such as corn) that can reduce greenhouse gas emissions from your vehicle. E85 is a fuel blend containing 85% ethanol and 15% gasoline that can be used in certain vehicles called Flex Fuel Vehicles (FFVs). FFVs are designed to be fueled with either E85 or traditional gasoline. There are millions of FFVs on the road today. To find out if you own one, check the inside of your car's fuel door for an identification sticker, or consult your owner's manual. If you own a diesel vehicle, consider filling up with a biodiesel blend such as B5, which is a diesel fuel blend containing 5% biodiesel. The Department of Energy's <a href=\"http://www.afdc.energy.gov/locator/stations/\">Alternative Fueling Station Locator</a> can help you locate both E85 and biodiesel fuel stations in your area."]
    ];

	// If no order (every tip was seen already or first run), restart
	if(localStorage.getItem('tip-order') === null) {
		var order = genDailyTipOrder(messages.length);
		localStorage.setItem('tip-order', order.join(" "));
	}
	
	// Initialize for first run
	if(localStorage.getItem('tip-index') === null) {
		localStorage.setItem('tip-index', 0);
	}

	else {
		var newIndex = parseInt(localStorage.getItem('tip-index')) + 1;
		// After seeing every message, discard the order
		if(newIndex == messages.length) {
			localStorage.setItem('tip-index', 0);
			var order = genDailyTipOrder(messages.length);
			localStorage.setItem('tip-order', order.join(" "));
		}
		else {
			localStorage.setItem('tip-index', newIndex);
		}
	}
	
	// Start over if the amount of tips changes
	if(messages.length !== parseInt(localStorage.getItem('tip-order').split(" ").length)) {
		localStorage.removeItem('tip-index');
		localStorage.removeItem('tip-order');
	}
	
	// Read order and show the next tip from there
    var tipNumber = localStorage.getItem('tip-order').split(" ")[localStorage.getItem('tip-index')];
	tip = messages[tipNumber];
	document.getElementsByClassName("tip-title")[0].innerHTML = tip[0];
    document.getElementsByClassName("tip-text")[0].innerHTML = tip[1];
    
    $('input[name="day"]').change(function() {
        var emissionHistory = getStored('emission-history');
        var emissionDates = getStored('emission-dates');
        var dateVal = {};
        for(var i = 0; i < emissionDates[$(this).val()].length; i++) {
            var id = emissionDates[$(this).val()][i];
            dateVal[id] = emissionHistory[id];
        }
        $('input[name="json"]').val(JSON.stringify(dateVal));
    });
});