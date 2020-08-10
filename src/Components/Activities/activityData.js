import React from 'react';
import {Divider} from 'antd';

export const activityData = {
    toDo: [
        {
            title: 'Day Trip to Bainbridge Island',
            subTitle: '35 Minute ferry ride from downtown',
            image: ['/Bainbridge1.png','/Bainbridge2.png','/Bainbridge3.png'],
            description: <span>
                <p>Although you can take a car on the ferry, it's really unnecesaary if you just want to explore the downtown Bainbrige area.
                    Here you can visit wine tasting rooms, breweries, quaint shops, and restaurants all on foot! Plus the ferry is walking distance
                    from the Edgewater Hotel. The Harbour Public House is our favorite waterfront restaurant on the island. 
                </p>
            </span>
        },
        {
            title: 'Ballard Farmers Market',
            subTitle: 'Year round outdoor Sunday market',
            image: ['ballard-market1.jpg','ballard-market2.jpg','ballard-market3.jpg','ballard-market4.png'],
            description: <span>
                <p>Most neighborhoods in Seattle have their own weekly farmers market, many of which operate year round. The Ballard Farmers Market
                    takes place every Sunday until 3:00PM in what has become our favorite neighborhood. You'll find fresh and local produce, meat, dairy, 
                    and seafood; local goods like spices, wine, soaps, and ceramics; and prepared foods like breads, pastries, pies, and soups. 
                    We recommend coming hungry because you will definitely be tempted to order from the numerous food trucks and vendors 
                    (think hot donuts, fresh tomales, and buttery garlic naan). 
                </p>
            </span>
        },
        {
            title: 'Ballard Consignment',
            subTitle: 'Eclectic consignment store',
            image: ['/BallardConsignment.png'],
            description: <p>Looking for something to do after gorging yourself at the farmers market? Take a walk through this quirky consignment store
                right in the heart of Ballard. You don't need to buy anything to enjoy exploring the many oddities in this store. They have new and used
                furniture, unique art, and plenty of small treasures to find. 
            </p>
        },
        {
            title: 'Ballard Brewed',
            subTitle: 'Ballard Brewery Tour',
            image: ['/brewery1.png','/brewery2.jpg','/brewery3.jpg'],
            description: <p>The Ballard neighborhood is also very well known for it's selection of breweries. If you feel like making a day of it, you can try
                all 11 breweries within a one-mile radius and/or participate in their <a href="http://www.visitballard.com/ballardbrewed/">passport program</a>. 
                A few of our favorites are Peddler, Rueben's, and Hale's Ales. 
            </p>
        },
        {
            title: 'Glasswing and Melrose Market',
            subTitle: 'A couple of our favorite stores in Capitol Hill',
            image: ['/glasswing.jpg','/melrose1.jpg','/melrose2.jpg'],
            description: <p>Glasswing is hyrid clothing store and greenhouse located in the Capitol Hill neighborhood. The store itself is beautiful
                to walk around even if you aren't interested in shopping. Right next door is Melrose Market which has a couple other small shops as 
                well as a butcher, food market, salad place, and sit-down restaurant. Both are also right around the corner from Starbucks Reserve 
                Roastery and Tasting Room. 
            </p>
        },
        {
            title: 'Picnic at Gas Works Park',
            subTitle: 'Fremont park with city views',
            image: ['/fremont1.jpg','/fremont2.png','/fremont3.png','/fremont4.jpg'],
            description: <p>This park is truely unique! It sits on the site of a former gasification plant in Fremont on the North Shore of Lake Union.
                Pick up some wine and snacks or lunch from one of our favorite grocery stores (PCC Community Market) conveniently located nearby 
                and enjoy an afternoon picnic by the lake. To get the full Fremont experience while you're there, check out the Fremont Troll, 
                the neightborhoods of house boats, Theo chocolate factory, Fremont Brewery and/or the Fremont Mischief Distillery!
            </p>
        },
        {
            title: 'Touristy Things',
            subTitle: 'Everything else...',
            image: ['/other1.jpg','/other2.png','/other3.png','/other4.jpg'],
            description: <span>
                <p>We tried to provide a selection of the more unique attractions that we love in Seattle, but there are numerous other more 
                touristy attractions you shouldn't rule out exploring while you're here. </p>
                <ul>
                    <li>Everyone is familiar with the Space Needle... While you're at Seattle Center you could also check out the Chihuly Garden and Glass museum.</li>
                    <li>Walking distance from the Edgewater Hotel is Pike Place Market where you'll find endless shops, vendors, and free samples.</li>
                    <li>Rather than waiting in line at the original Starbucks in Pike Place we'd recommend visiting the Starbuck Reserve Roastery in Capitol Hill, 
                        where they have specialty roasts and coffe drinks, as well as alcoholic beverages and fresh food options.
                    </li>
                    <li>Finally, for an iconic view of downtown Seattle from our neighborhood, Queen Anne, take a visit up to Kerry Park.</li>
                </ul>
                </span>
        },
    ],
    toRun: [
        {
            title: 'Discovery Park',
            subTitle: 'Magnolia Neighborhood',
            image: ['/DiscoveryPark3.jpg','/DiscoveryPark2.jpg','/DiscoveryPark1.jpg'],
            description: <span><p>In a typical run at this park you'll pass through wide open fields, sandy bluffs with views of the ocean below 
                and mountains in the distance, dense green Northwestern forest, secluded rocky beaches, and possibly even spot a seal or bald 
                eagle. The main loop around the park is about 4 miles. If you want to do more or less you can find maps at the entrance. 
                The park is so large and diverse there is definitely something for everyone! </p>
                <p>Pro Tip: Bring your phone because you'll probably want to take pictures (and it could help you find your way out if you get turned around).</p></span>
        },
        {
            title: 'Marsh Island',
            subTitle: 'University District',
            image: ['/marsh-island.jpg','/marsh-island2.jpg'],
            description: <span>
                <p>A unique out and back run (or walk) that takes you over a series of floating bridges across Lake Washington and a small densely forested island.
                After about a mile or so, you'll end up in the Washington Arboretum, which we descibe in our next run spot.
                </p>
                <p>Pro Tip: Parking is only available for 2 hour blocks so plan accordingly.</p>
            </span>
        },
        {
            title: 'Arboretum',
            subTitle: 'North Capitol Hill',
            image: ['/arboretum1.png','/arboretum2.png','/arboretum3.jpg'],
            description: 
                <p>This conveniently located massive arboretum is filled with winding trails that will take you past creeks, ponds, rhodedendron glens,
                    and massive Northwest evergreens. This park is a mix of wild and manicured landscapes, that provides an oldgrowth forest escape 
                    in the middle of the city. 
                </p>
        },
        {
            title: 'Centennial Park',
            subTitle: 'Downtown',
            image: ['/centennial-park1.jpg','/centennial-park2.jpg','/centennial-park3.jpg','/centennial-park4.png'],
            description: <span>
                <p>This run/walk option is by far the most convinient to the Edgewater Hotel (and other downtown accommodations). Just step outside and head North along the water  
                    for a flat paved walk/run/bike path that goes on for about 3 miles. Less than a mile from the hotel you'll pass through the Olympic Sculputre Park (which is a 
                    destination in and of itself). And on a nice day you'll get views of both the Olympics and Rainier towering over the downtown skyline.
                </p>
                <p>Pro Tip: This is Ian's favorite seal spotting route, so keep your eyes peeled!</p>
            </span>
        },
        {
            title: 'Alki Beach',
            subTitle: 'West Seattle',
            image: ['/alki1.jpg','/alki2.jpg','/alki3.jpg'],
            description: <span>
                <p>If you're looking for a reprieve from the exhausting Seattle hills, this is your spot! This long (up to 20 miles!) path is flat as a pancake and takes 
                    you around the perimiter of West Seattle. You'll run along the Puget Sound passing sandy PNW beaches; a strip of restaurants, cafes, and other local businesses; 
                    and some of the best views of the Seattle skyline. 
                </p>
                <p>Pro Tip: There are parking spots along the trail but be aware that the West Seattle Bridge is closed you will have to take a slightly longer route.</p>
            </span>
        },
    ],
    toEat: [
        {
            title: 'Via Tribunali',
            subTitle: <span>Pizza <Divider type="vertical" />Multiple Locations</span>,
            link: "https://www.viatribunali.com/",
            image: ['/ViaTribunali1.jpg','/ViaTribunali2.png'],
            description: <span><p>This was the first place we had dinner after moving to Seattle almost 2 years ago. We shared a pizza, salad, and bottle of wine
                         in this cozy local restaurant after a long jounrey and a long day of unpacking and felt like locals. </p>
                         <p>Pro Tip: If you go to the Queen Anne location save room for Molly Moon's ice cream next door for dessert.</p></span>
        },
        {
            title: 'Lowells',
            subTitle: <span>Breakfast & Lunch <Divider type="vertical" />Pike Place Market</span>,
            link: "http://eatatlowells.com/",
            image: ['/lowells.jpg'],
            description: <span><p>A casual breakfast/lunch spot right in Pike Place Market with amazing food and views (make sure you sit upstairs!).</p>
                        <p>Our favorites are the crab and salmon omlettes, bloody marys, panzanella salad, and the Beecher's cheddar and tomato sandwich.</p></span>
        },
        {
            title: 'Salt & Straw',
            subTitle: <span>Ice Cream <Divider type="vertical" />Capitol Hill or Ballard</span>,
            image: ['/SaltAndStraw.jpg'],
            link: "https://saltandstraw.com/",
            description: <p>It was hard for us to choose our favorite ice cream spot in Seattle (see Molly Moon's and Frankie & Jo's) but Salt and Straw definitely makes for 
                        a memorable experience. Their flavors are constantly changing but expect things like Beecher's cheese and peppercorn, strawberry balsamic,
                        smoked cherries and bone marrow, buttermilk pancakes, and peanut butter captin' crunch.</p>
        },
        {
            title: 'Macrina Bakery',
            subTitle: <span>Bakery <Divider type="vertical" /> Multiple Locations</span>,
            link: "https://macrinabakery.com/",
            image: ['/Macrina1.jpg', '/Macrina2.jpg'],
            description: <p>As some of you may know, we have been upholding a weekly tradition of "Scone Fridays" for a couple years now.
                            So when we moved to Seattle it was very important to find a good scone spot. Macrina has been the clear winner. If you're not 
                            as into scones as we are, try their morning buns, squash bread, or breakfast sandwiches.</p>
        },
        {
            title: 'Uptown Espresso',
            subTitle: <span>Cafe <Divider type="vertical" /> Multiple Locations</span>,
            link: "https://uptownespresso.com/",
            image: ['/uptown-espresso1.jpg', '/uptown-espresso2.png'],
            description: <p>Home of the velvet foam! As the motto states, this place is known for their foamy lattes. We also appreciate the relaxed
                vibe and funky dark green carpets that make this place a Seattle classic. The Generra (chocolate orange latte) is our favorite!
            </p>
        },
        {
            title: 'The 5 Point Cafe',
            subTitle: <span>Dive Bar <Divider type="vertical" /> Next to Space Needle</span>,
            link: "https://www.the5pointcafe.com/",
            image: ['/5point1.png', '/5point2.png','/5point3.jpg'],
            description: <p>If you're looking for some liquid courage before taking a trip up the Space Needle, you should definitely stop
                into 5 Point. There is nothing fancy about this place but that is why we like and why we consider it a Seattle classic.
            </p>
        },
        {
            title: 'Lola',
            subTitle: <span>Greek(ish) Restaurant <Divider type="vertical" /> Belltown</span>,
            link: "https://www.lolaseattle.com/",
            image: ['/lola1.jpg', '/lola2.png'],
            description: <p>Lola is one of our favorite downtown restaurants and our favorite of the local Tom Douglas restaurant group. 
                They describe their food as Pacfic Northwest mingled with Greek. We love their spreads and kebabs, but they are also 
                famous for their fresh donuts. If you're not interested in Mediterranean, we definitely recommend checking out some of the other
                Tom Douglas restaurants.
            </p>
        },
        {
            title: 'PCC Community Markets',
            subTitle: <span>Grocery Store <Divider type="vertical" /> Multiple Locations</span>,
            link: "https://www.pccmarkets.com/",
            image: ['/pcc1.jpg', '/pcc2.png'],
            description: <p>A grocery trip to PCC is an adventure! You might find an interesting fruit you've never heard of, a wine called "The Ned",
                or creme brulee cheese... They also have an amazing hot bar, salad bar, and dine-in eating menu if you're looking for an easy lunch. 
                Don't leave without checking out their amazing baked goods (their scones are our second favorite after Macrina).
            </p>
        },
    ]
};
