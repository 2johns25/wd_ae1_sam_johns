## Web Design for Industry AE1

### Sam Johns

#### 12/04/2019

The final solution can be accessed here: [https://wd-ae1-autora.firebaseapp.com/](https://wd-ae1-autora.firebaseapp.com/)

The GitHub repo can be accessed here: [https://github.com/2johns25/wd_ae1_sam_johns](https://github.com/2johns25/wd_ae1_sam_johns)

#

## Background

The Spontaneous Travel Company offer tours and sightseeing services to consumers through the use of autonomous vehicles, and have developed an API called Autoura, for third party developers to integrate their services with theirs.

STC require a solution be implemented, enabling customers to interact with the Autoura data. The required solution needs to be in the form of a single-page web application, build using a modern JavaScript framework. It would need to connect to the API, consume and process the data and display it back to the user in an interesting and user-friendly way. The site should also be hosted on the internet and be supported by a real-time database.

The resulting solution was a web application called London Sightseer, that enabled people to discover food establishments within London via a map and list of destinations. Using the site, users could visit individual food establishment own websites and favourite a particular food establishment, which would be seen by all other users, giving them an idea of what establishments were regarded as worthwhile.

## Methods 

### Workflow

For this project, due to time constraints and the need to adopt a “learn as you go” approach while developing, a custom linear workflow was used, which is comprised of seven main phases.

##### Phase 1: Project specification
Project specifications were gathered through a live presentation given by the Autoura API platform developer.

##### Phase 2: Design
Initial designs in the form of simple digital wireframes were produced.

##### Phase 3: Set up
Project source files were set up, including required assets and dependencies.

##### Phase 4: Implementation
To minimise the risks of errors occurring and being able to easily identify problems, the implementation phase is broken down into 4 sub-phases

##### Phase 4.1 Structure
The overall structure of the SPA was built, including the header, navigation, authentication forms and other individual elements.
    
##### Phase 4.2 Logic
Once the web app’s structure was built and tested for responsiveness, the JavaScript and back-end functionality was implemented. 

##### Phase 4.3 Design
Styling and design considerations such as colour, size and use of icons were added.

##### Phase 4.4 Test
Initial functionality testing was conducted to check for bugs.

##### Phase 5: Deployment
The web application was deployed using the Firebase CLI tool.

##### Phase 6: Testing
Further functional testing was carried out in addition to automated testing using Google Lighthouse.

##### Phase 7: Evaluation
An evaluation was provided based on the results from the testing.

### Techstack

Below is a list of the tools and technologies that went into creating this web application.

##### Development tools
VSCode  
Git/GitHub  
Chrome Developer Tools  
NPM  
Webpack  

#### Front-end
Vue.JS (HTML, CSS, JavaScript)  

#### Dependencies
Vue Router  
Axios  
Vue2-Leaflet  

#### Back-end
Google’s Firebase and Firestore  


## Implementation

### Design

The design of this web app was kept simplistic and clean, making it easy for people of all demographics to use. This was accomplished by incorporating the Don Norman Design Principles (visibility, feedback, affordance, mapping, consistency and constraints) [(Rekhi, 2017)](https://medium.com/@sachinrekhi/don-normans-principles-of-interaction-design-51025a2c0f33) and the Gestalt Design principles (proximity, closure, similarity, symmetry, asymmetry). [(Gkogka, 2018)](https://medium.muz.li/gestalt-principles-in-ui-design-6b75a41e9965). 

These design principles were implemented primarily through the use of colour, icons, font weights and text-decorations. For example, interactive elements such as buttons and links were coloured blue, which would change colour when they were hovered over or clicked. Similarly, links would become underlined, when they were hovered over. Icons were used to visually indicate to a user what a particular button would do. For example, the favourite button indicated that it would perform a particular action. Feedback could’ve been further advanced with some animations after user interaction, to indicate a state change.


### Development

There were various technologies that were used to develop this web app. The front-end was created using the popular JavaScript framework: Vue.JS, while the back-end was implemented using Google’s Cloud Service: Firebase.

#### Front-end

Vue was chosen for this project because of it’s ease of use and small library size of 80KB (compared to Angular’s 500KB and React’s 100KB file size). This makes developing web applications faster and increases their performances. Furthermore, Vue can be scaled up to develop more complex web apps, similar to those built using Angular or React  [(Daityari, 2019)](https://www.codeinwp.com/blog/angular-vs-vue-vs-react/).

No CSS frameworks were used for this project, due to it being preferable to create original elements and be able to freely customise them and not be restricted by another frameworks source code, for example, not wanting to use specific syntax and classes in the mark-up.

In order to communicate with the Autoura API, the JavaScript HTTP client library “Axios” was used. Unlike alternatives such as Fetch, Axios uses the promises API as default, enabling a site to make asynchronous requests. Furthermore, Axios doesn’t require a site to carry out to separate processes in order to retrieve the data within a response, unlike Fetch [(Kollegger, 2018)](https://medium.com/@MinimalGhost/what-is-axios-js-and-why-should-i-care-7eb72b111dc0).

#### Design patterns

For this project, the concept of JavaScript design patterns was used when it came to the header and sign-in and sign-up forms. The header is single piece of code but is displayed differently based on whether a user is signed in or not. Using a similar technique, one authentication form was able to be used to display different elements depending on what page the user was viewing. This is done for a number of reasons; firstly to speed up development by removing the need for developers to repeat code; secondly, it speeds up the sites load time because there is less repeated code; and thirdly, it makes debugging much easier [(Osmani, 2012)](https://addyosmani.com/resources/essentialjsdesignpatterns/book/).

On reflection, this development technique could’ve been used on the food establishments information boxes that appear in three places on the site with slightly different styling  (favourites panel, map pop-up and list view).


#### Mapping and geo-location

As an app providing travel and tourism/exploration services, the core element of this web app was the mapping and geolocation features. In this case, Leaflet was used to display a map of a particular location (London) and show users where certain locations (food establishments) were, using custom map markers.

Leaflet was used in this project due to the fact that it’s an open-source JavaScript plug-in and therefore is easily and highly customisable, as opposed to commercial products such as Google Maps and Mapbox. With leaflet, the site was able to display custom map markers and styled pop-up boxes. Also, because of it’s open-source nature, a separate map rendering service called ThunderForest was used, which displays a different style map, that is more aesthetically pleasing and user friendly [(Temprano, 2016)](https://www.codementor.io/victorgerardtemprano/google-maps-api-or-leaflet--what-s-best-for-your-project-faaev60vm).  

While Leaflet has it’s advantages, there is one major drawback, which is that it doesn’t provide a mapping service, similar to Google’s meaning that routes and traffic information couldn’t be incorporated into a site that would’ve benefited from such a feature.


#### PWA (Progressive Web Apps)

With the rise of a wide variety of different sized devices, varying in their capabilities, a new concept taking advantage of advance HTML and JavaScript technology, known as PWA’s has emerged and gaining popularity [(Frankston, 2018)](https://ieeexplore.ieee.org/document/8287006). PWA’s are supposed be adaptable based on the user agent and optimised to be used offline, taking advantage of native mobile and desktop apps, but for the internet [(Pande, 2018)](https://ieeexplore.ieee.org/document/8456349).

When carrying out testing using Google Lighthouse, the extent to which London Sightseer was considered a progressive web app was measured and while many aspects were highlighted as present, such as fast page load, the use of HTTPS and content sized correctly for the viewport, there were crucial elements that were missing, such as pages responding with 200 when offline and no service worker or web app manifest. So while Vue provides the perfect environment to create a PWA, it wasn’t used in this instance.


#### Real-time databases

Google’s Firebase platform was used for the data storage solution for this project. Specifically, it was used to provide an email/password authentication method and to store various information about the food establishments that users had favourited, which could then be displayed back to the user.

Due to the simplicity of this web app, It was not necessary to opt for the common approach to databases, which is usually an SQL relational system that requires vast numbers of tables with harshly defined relationships and an encapsulating schema [(Schindler, 2013)](https://dl.acm.org/citation.cfm?id=2479782).

Firebase provides a flexible, flat-structured, NoSQL database, where data is stored in collections of JSON documents, as key-value pairs. It comes with built in functions for common read and write operations, such as authentication,  making querying and updating the database incredibly efficient and fast. Not only that, but because it updates in real-time, the information stored in the database updates instantly across all platforms [(Alsalemi, at al. 2017)](https://ieeexplore.ieee.org/document/8276748).


#### Deployment

The Firebase platform also provides a deployment and hosting solution, which is far easier and cheaper to use than alternatives such as the likes of GoDaddy or FastHosts. Instead of having to use third party software to upload the projects source files to a shared or dedicated server, Firebase allows you to instantly deploy your site to the cloud using their CLI tool. This means that as more or less traffic appears on the site, necessary resources will be automatically allocated to the site. Furthermore, as new versions of a site are developed, with new improvements and bug fixes, they can be instantly deployed and replace the old version of the site.

#### Testing

Testing was carried out using the Chrome Developer Tools and Google Lighthouse. Google Lighthouse conducts automated tests on a site and provides detailed results with scores on various aspects of a site, such as performance, PWA compliance, accessibility and SEO. Two tests were carried out on the LS site; firstly as a desktop connected to Wi-Fi and then as a mobile device using 3G. As well as automated tests, manual functionality tests were carried out to determine if all implemented features functioned correctly. 


Click this link to view the test plan: [https://github.com/2johns25/wd_ae1_sam_johns/blob/master/London%20Sightseer%20Test%20Plan.pdf](https://github.com/2johns25/wd_ae1_sam_johns/blob/master/London%20Sightseer%20Test%20Plan.pdf)


### Evaluation

Based on the functional testing and automated testing carried out by Google Lighthouse, it could be concurred that the intended outcomes were met – in that the single-page application consumes data from the Autoura API and processes and displays that data in an interesting way. Furthermore, the implemented features function correctly and as designed, and users are able to easily use the site. However, some improvements to the functionality could be made

One significant improvement is to do with the favourites panel. Firstly, the favourites panel fails to show any data from the database when it is first opened. In order to show data, the web app needs to be refreshed by pressing cmd+r or fn+f5. Furthermore, the same button that is used to display the favourites panel can’t be clicked again to hide the panel, as what was intended. This required that a separate close button be implemented within the favourites panel itself. Additionally, when viewed on smaller screen sizes, the favourites panel doesn’t adjust and instead displays outside of the viewport.

When it comes to performance, both on mobile and desktop, the site received exceptional scores of 93 and above. More specifically, pages were only taking 15-19ms to display once a navigation button was clicked. While some content took longer to display, such as 539ms, it’s still very impressive. The ability of the browser to cache the site resources helped with this.

Other metrics provided by the automated tests for things like accessibility and SEO were scored between 70 and 80, and while not awful, they’re still not within the 90-100 range, as they should be. These scores could vastly be improved through the implementation of more semantic HTML mark-up and through the use of accessibility features such as the alt attribute and ARIA (Accessible Rich Internet Applications) attributes, used for assistive technology [(Bailey, 2019)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA).


### Reflection

On reflection, there are a number of things that could’ve been changed to make the site more advanced and better functionality, but there are two main elements that stand out, which is the primary functionality and the ability to filter different types of destinations.

Firstly, the sites functionality was very basic. Only allowing people to indicate that they liked a particular food establishment through the use of a favourite button, which would be shown in a drop-down menu, isn’t very useful to a user. It would’ve been more meaningful to allow users to review and/or rate a particular food establishment and display that within the list view. The favourites feature could’ve been a separate feature which is private to that particular user.

Originally, the site was built to allow users to filter through the different types of destinations they could visit within a particular city, such as events, tours, POIs, attractions, food establishments and accommodation. However, this wasn’t implemented for two reasons. Firstly, because the Autoura API didn’t have enough information about all these types of destinations within a particular city, i.e. it was a choice between food establishments in London, or tours in South Africa; and secondly it was difficult to implement for what it would’ve produced.

There was particular aspect of this project that was particularly challenging but was solvable. This was the issue with the favourites panel, which was a struggle to display and hide with a single click event. This was dealt with through the use of the v-on directive and a separate button to hide the favourites panel. 


### References

ALSALEMI, A. et al., Jun 2017. Real-Time Communication Network Using Firebase Cloud IoT Platform for ECMO Simulation. 2017 IEEE International Conference on Internet of Things (iThings) and IEEE Green Computing and Communications (GreenCom) and IEEE Cyber, Physical and Social Computing (CPSCom) and IEEE Smart Data (SmartData). IEEE, pp.178-182 from: https://ieeexplore.ieee.org/document/8276748  

BAILEY, E.W., 2019. ARIA [viewed Apr 7, 2019]. Available from: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA  

DAITYARI, S., 2019. Angular vs Vue vs React: Which Framework to Choose in 2019. In: CodeinWP. -01-10T14:36:33+00:00 [viewed Apr 4, 2019]. Available from: https://www.codeinwp.com/blog/angular-vs-vue-vs-react/  

FRANKSTON, B., 2018. Progressive Web Apps. IEEE Consumer Electronics Magazine, March, 106-117 
from: https://ieeexplore.ieee.org/document/8287006

GKOGKA, E., 2018. Gestalt principles in UI design.[viewed Apr 5, 2019]. Available from: https://medium.muz.li/gestalt-principles-in-ui-design-6b75a41e9965  

KOLLEGGER, E., 2018. What is Axios.js and why should I care? In: Eric Kollegger. -05-14T20:44:38.676Z [viewed Apr 4, 2019]. Available from: https://medium.com/@MinimalGhost/what-is-axios-js-and-why-should-i-care-7eb72b111dc0  

OSMANI, A., 2012. Learning javascript design patterns. Beijing [u.a.]: O'Reilly
from https://addyosmani.com/resources/essentialjsdesignpatterns/book/

PANDE, N. et al., Jul 2018. Enhanced Web Application and Browsing Performance through Service-Worker Infusion Framework. 2018 IEEE International Conference on Web Services (ICWS). IEEE, pp.195-202
from: https://ieeexplore.ieee.org/document/8456349

REKHI, S., 2017. Don Norman’s Principles of Interaction Design. In: Medium.com. -01-23T17:33:23.822Z [viewed Apr 6, 2019]. Available from: https://medium.com/@sachinrekhi/don-normans-principles-of-interaction-design-51025a2c0f33 

SCHINDLER, J., 2013. Profiling and Analyzing the I/O Performance of NoSQL DBs. ACM SIGMETRICS/international conference on Measurement and modeling of computer systems. New York, NY, USA: ACM, pp.389–390
from: https://dl.acm.org/citation.cfm?id=2479782

TEMPRANO, V.G., 2016. Google Maps API or Leaflet: What's Best for your Project? | Codementor [viewed Apr 4, 2019]. Available from: https://www.codementor.io/victorgerardtemprano/google-maps-api-or-leaflet--what-s-best-for-your-project-faaev60vm  



### Bibliography

BEMENDERFER, J., 2017. Vue.js REST API Consumption with Axios [viewed Apr 4, 2019]. Available from: https://alligator.io/vuejs/rest-api-axios/  

CHADWIN, T., 2018. A time for free maps. In: Tom Chadwin. -05-05T13:14:27.140Z [viewed Apr 4, 2019]. Available from: https://medium.com/@tomchadwin/a-time-for-free-maps-aec1fddcdffa  

DB-ENGINES, System Properties Comparison Firebase Realtime Database vs. MySQL vs. SQLite [viewed April 3, 2019]. Available from: https://db-engines.com/en/system/Firebase+Realtime+Database%3BMySQL%3BSQLite  

EDELMAN, G., 2017. How to Choose Your Tech Stack. In: Silicon Valley Software Group. -01-08T18:58:09+00:00 [viewed Apr 4, 2019]. Available from: https://svsg.co/how-to-choose-your-tech-stack/  

ENAOHWO, O.M., 2017. The Ultimate Guide to Workflow Management. In: SweetProcess. -10-11T04:21:51+00:00 [viewed Apr 4, 2019]. Available from: https://www.sweetprocess.com/workflow-management/  

ESCHWEILER, S., 2017. Getting Started With Axios. In: CodingTheSmartWay.com Blog. -03-07T17:06:30.179Z [viewed Apr 4, 2019]. Available from: https://medium.com/codingthesmartway-com-blog/getting-started-with-axios-166cb0035237  

ESPINETT, C.A.P., 2018. MySQL Review: "One of the best open source solutions in the market of relational database managers.". In: www.trustradius.com. December 19, Available from: https://www.trustradius.com/reviews/mysql-2018-12-19-10-24-55  

GAMBHIR, A. and G. RAJ, Jun 2018. Analysis of Cache in Service Worker and Performance Scoring of Progressive Web Application. 2018 International Conference on Advances in Computing and Communication Engineering (ICACCE). IEEE, pp.294-299  

KATSOV, I., 2012. NoSQL Data Modeling Techniques. In: Highly Scalable Blog. -03-01T12:54:40+00:00 [viewed Apr 3, 2019]. Available from: https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/  

KIRKWOOD, L., 2017. Hydric - We’re app developers passionate about what we do.[viewed Apr 4, 2019]. Available from: https://www.hydric.fm/blog/in-plain-english-what-is-a-tech-stack/  

LARDINOIS, F., 2019. Google’s Cloud Firestore NoSQL database hits general availability [viewed Apr 3, 2019]. Available from: https://search.proquest.com/technology1/docview/2173999807/2D70619ED2E948C1PQ/14  

LI, W. et al., Feb 2018. JustIoT Internet of Things based on the Firebase real-time database. 2018 IEEE International Conference on Smart Manufacturing, Industrial & Logistics Engineering (SMILE). IEEE, pp.43-47  

LUNTOVSKYY, A., Feb 2018. Advanced software-technological approaches for mobile apps development. 2018 14th International Conference on Advanced Trends in Radioelecrtronics, Telecommunications and Computer Engineering (TCSET). IEEE, pp.113-118  

MADDALONE, J., 2014. Is Leaflet a better tool than Google Maps?[viewed Apr 4, 2019]. Available from: https://www.creativebloq.com/web-design/leaflet-google-maps-121413738  

MONGODB, NoSQL Vs Relational Databases [viewed Apr 3, 2019]. Available from: https://www.mongodb.com/scale/nosql-vs-relational-databases  


