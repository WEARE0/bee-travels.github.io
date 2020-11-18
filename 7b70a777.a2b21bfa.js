(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{119:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/wkshp1-c800455c1e343ab38e62cfbd44e6c899.png"},120:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/wkshp2-1948d4f8984778a948adbf19da505f65.png"},121:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/wkshp3-468f7ee46c596832b5f71ce91b9e170e.png"},122:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/wkshp4-1c19366a8abc2e89a0e13331bd188d6c.png"},123:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/wkshp5-a074376c6fb1ccdaf3e3d876ac528259.png"},124:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/wkshp6-613bff42dfaa39943d4f59a25fdda030.png"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(80)),c={id:"Workshop",title:"Code Gen Workshop",sidebar_label:"Code Gen Workshop",slug:"/"},i={unversionedId:"Workshop",id:"Workshop",isDocsHomePage:!1,title:"Code Gen Workshop",description:"About",source:"@site/workshop/workshop.md",slug:"/",permalink:"/workshop/",version:"current",lastUpdatedBy:"Pooja",lastUpdatedAt:1605712957,sidebar_label:"Code Gen Workshop",sidebar:"workshop"},l=[{value:"About",id:"about",children:[]},{value:"Objective",id:"objective",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Getting Started with Code Generation Node Template",id:"getting-started-with-code-generation-node-template",children:[{value:"Step 1",id:"step-1",children:[]},{value:"Step 2",id:"step-2",children:[]},{value:"Step 3",id:"step-3",children:[]}]},{value:"Building a Buget Microservice",id:"building-a-buget-microservice",children:[{value:"Step 1",id:"step-1-1",children:[]},{value:"Step 2",id:"step-2-1",children:[]},{value:"Step 3",id:"step-3-1",children:[]},{value:"Step 4",id:"step-4",children:[]},{value:"Step 5",id:"step-5",children:[]},{value:"Congratulations",id:"congratulations",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"about"},"About"),Object(o.b)("p",null,"Bee Travels is a travel booking application that is composed of several mircoservices.\nThese microservices include: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Hotel Microservice"),Object(o.b)("li",{parentName:"ul"},"Car Rental Microservice "),Object(o.b)("li",{parentName:"ul"},"Flight Microservice "),Object(o.b)("li",{parentName:"ul"},"Currency Exchange Microservice "),Object(o.b)("li",{parentName:"ul"},"UI Front End "),Object(o.b)("li",{parentName:"ul"},"UI Back End ")),Object(o.b)("p",null,"Each mircoservice can be run independently, or together to form the full service. Bee Travels can be used to search and book hotels, flights and car rentals for various destinations across the world."),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(119).default})),Object(o.b)("h2",{id:"objective"},"Objective"),Object(o.b)("p",null,"In this workshop we will be using the Node.js code generation service template to seemlesly create microservices in Node.js. We will be creating our own bugeting microservice using the Bee Travels Node hotel and car rental microservice to build a service that gives us both hotel and car rental data based on our maximum budget. "),Object(o.b)("p",null,"Let's get started! "),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/get-docker/"}),"Install Docker")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://classic.yarnpkg.com/en/docs/install/#mac-stable"}),"Install Yarn")),Object(o.b)("li",{parentName:"ul"},"Install Node Version 12.0.0 : ",Object(o.b)("inlineCode",{parentName:"li"},"nvm install v12.0.0"))),Object(o.b)("h2",{id:"getting-started-with-code-generation-node-template"},"Getting Started with Code Generation Node Template"),Object(o.b)("h3",{id:"step-1"},"Step 1"),Object(o.b)("p",null," Make a directory with any name and cd into it. Once you are in the directory run :\n",Object(o.b)("inlineCode",{parentName:"p"},"npx bee-bootstrap node")," "),Object(o.b)("p",null,"Name the following : "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Service name (destination-basic): budget-v1\nService route (destinations): budget\nService port (9000):9000 \n")),Object(o.b)("h3",{id:"step-2"},"Step 2"),Object(o.b)("p",null,"At this point you should see a folder in your directory with the service name you just created. In our case this folder is called ",Object(o.b)("inlineCode",{parentName:"p"},"budget-v1"),". If you cd into that folder you will see a ",Object(o.b)("inlineCode",{parentName:"p"},"src")," folder, a dockerfile , a package.json, and a README.md file :  "),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(120).default})),Object(o.b)("p",null,"Cd into ",Object(o.b)("inlineCode",{parentName:"p"},"budget-v1")," and run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"}," Make sure you are using Node version 12.0.0 if not you can install with ",Object(o.b)("inlineCode",{parentName:"p"},"nvm install v12.0.0"))),Object(o.b)("p",null,"You should see : "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn install v1.22.5\ninfo No lockfile found.\n[1/4] \ud83d\udd0d  Resolving packages...\n[2/4] \ud83d\ude9a  Fetching packages...\n[3/4] \ud83d\udd17  Linking dependencies...\n[4/4] \ud83d\udd28  Building fresh packages...\nsuccess Saved lockfile.\n\u2728  Done in 9.64s.\n")),Object(o.b)("h3",{id:"step-3"},"Step 3"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," and you should see : "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn run v1.22.5\n$ nodemon -r esm ./src/bin/www.js\n[nodemon] 2.0.6\n[nodemon] to restart at any time, enter `rs`\n[nodemon] watching path(s): *.*\n[nodemon] watching extensions: js,mjs,json\n[nodemon] starting `node -r esm ./src/bin/www.js`\n\n\u2728 You've saved 6 lines of extra YAML (\u25bc 24.0%)\n\nListening on port 9000\n")),Object(o.b)("p",null,"Now go to ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:9000/api-docs/")),Object(o.b)("p",null,"You should see the service up and running"),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(121).default})),Object(o.b)("p",null,"Congrats you have the Node Service template up and running! Lets get started with building the hotel and car microservice. "),Object(o.b)("h2",{id:"building-a-buget-microservice"},"Building a Buget Microservice"),Object(o.b)("h3",{id:"step-1-1"},"Step 1"),Object(o.b)("p",null,"Our budget service api will be taking in data such as : "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"city"),Object(o.b)("li",{parentName:"ul"},"country"),Object(o.b)("li",{parentName:"ul"},"date to (departing date)"),Object(o.b)("li",{parentName:"ul"},"date from (drriving date)"),Object(o.b)("li",{parentName:"ul"},"max cost ")),Object(o.b)("p",null,"We need to create a GET request api endpoint that requires this information "),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"budget-v1 > src > routes")," you will see a file called ",Object(o.b)("inlineCode",{parentName:"p"},"budget.js")," This is the file where we will be creating our GET request api. "),Object(o.b)("p",null,"The api endpoint of this file will be ",Object(o.b)("inlineCode",{parentName:"p"},"/api/v1/budget/{country}/{city}")," "),Object(o.b)("p",null,"You can replace all the code in this file with this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pmmistry/bee-travels-workshop/blob/main/budget-v1/src/routes/budget.js"}),"budget.js code")," "),Object(o.b)("p",null,"The GET Request is the main aspect of this code that is created to set up the data that will be required by this API"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'/**\n * GET /api/v1/budget/{country}/{city}\n * @tag Budget\n * @summary Get list of hotels and car rentals that fit a budget\n * @description Gets data for hotel and cars associated with a specific city and budget.\n * @pathParam {string} country - Country of the hotel using slug casing.\n * @pathParam {string} city - City of the hotel using slug casing.\n * @queryParam {string} dateFrom - Date From\n * @queryParam {string} dateTo - Date To\n * @queryParam {number} maxcost - Max Cost.\n * @response 200 - OK\n * @response 500 - Internal Server Error\n */\nrouter.get("/:country/:city", async (req, res, next) => {\n  // const context = new Jaeger("city", req, res);\n  const { country, city } = req.params;\n  \n  const {\n    maxcost,\n    dateFrom,\n    dateTo,\n  } = req.query;\n  req.log.info(`getting budget data for -> /${country}/${city}`);\n \n  try {\n    const data = await breaker.fire(\n      country,\n      city,\n      {\n        maxCost: parseInt(maxcost, 10) || undefined,\n        dateFrom: dateFrom || undefined,\n        dateTo: dateTo|| undefined,\n      },\n      context\n    );\n    res.json(data);\n  } catch (e) {\n    console.log(e)\n    next(e);\n  }\n});\n\n')),Object(o.b)("h3",{id:"step-2-1"},"Step 2"),Object(o.b)("p",null,"The budget service is dependent on the hotel microservice\nand the car rental microservice. We will be creating a budget service that gives us both hotel and car data based on our max budget. "),Object(o.b)("p",null,"The first thing we need to do before we build our microservice is get both the hotel microservice and car microservice up and running "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Run Hotel Service")," "),Object(o.b)("p",null,"Make sure you have docker installed and run the following commands : "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"docker pull beetravels/hotel-v1:node-540d5182fe943a3ad87c559dd7fcce025cec9833\ndocker run -p 9101:9101 beetravels/hotel-v1:node-540d5182fe943a3ad87c559dd7fcce025cec9833\n")),Object(o.b)("p",null,"You should see : "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\u2728 You've saved 53 lines of extra YAML (\u25bc 54.6%)\nListening on port 9101\n")),Object(o.b)("p",null,"If you go to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:9101/api-docs/")," in your browser you should see your hotel service up and running. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(122).default})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Run Car Service")," "),Object(o.b)("p",null,"Run the following commands to run the car service : "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"docker pull beetravels/carrental-v1:node-540d5182fe943a3ad87c559dd7fcce025cec9833\ndocker run -p 9102:9102 beetravels/carrental-v1:node-540d5182fe943a3ad87c559dd7fcce025cec9833\n")),Object(o.b)("p",null,"You should see : "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"\u2728 You've saved 57 lines of extra YAML (\u25bc 54.8%)\n\nListening on port 9102\n")),Object(o.b)("p",null,"If you go to ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:9102/api-docs/")," in your browser you should see your car service up and running."),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(123).default})),Object(o.b)("p",null,"Now that you have both these services up and running you can call both hotel and car apis in your buget microservice "),Object(o.b)("h3",{id:"step-3-1"},"Step 3"),Object(o.b)("p",null,"With both Hotel and Car microservices up and running we can create a service js file that calls on these apis to get both hotel and car data "),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"budget-v1 > src > services")," create a ",Object(o.b)("inlineCode",{parentName:"p"},"hotel.js")," file and then create a ",Object(o.b)("inlineCode",{parentName:"p"},"car.js")," file "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"hotel.js file :"),"  "),Object(o.b)("p",null,"Add this code to the ",Object(o.b)("inlineCode",{parentName:"p"},"hotel.js")," file to call the hotel microservice "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'import axios from "axios";\n\nconst HOTEL_URL = process.env.HOTEL_URL || "http://localhost:9101";\n\nexport async function getHotelData(country,city,dateFrom,dateTo) {\n  const data = {\n    dateFrom: dateFrom,\n    dateTo: dateTo\n  };\n  const res = await axios.get(HOTEL_URL + `/api/v1/hotels/${country}/${city}`, {params:data});\n  return res.data;\n}\n\nexport async function hotelReadinessCheck() {\n  const isReady = await axios.get(HOTEL_URL + "/ready");\n  return isReady;\n}\n\n')),Object(o.b)("p",null,"Notice that you are calling the hotel api with the country and city end point. You can use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pmmistry/bee-travels-workshop/blob/main/budget-v1/src/services/hotel.js"}),"hotel.js code")," as a reference"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"car.js file :")," "),Object(o.b)("p",null,"Add this code to the ",Object(o.b)("inlineCode",{parentName:"p"},"car.js")," file to call the car microservice : "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'import axios from "axios";\n\nconst CAR_URL = process.env.CAR_URL || "http://localhost:9102";\n\nexport async function getCarData(country,city,dateFrom,dateTo) {\n  const data = {\n    dateFrom: dateFrom,\n    dateTo: dateTo\n  };\n  const res = await axios.get(CAR_URL + `/api/v1/cars/${country}/${city}`, {params:data});\n  return res.data;\n}\n\nexport async function carReadinessCheck() {\n  const isReady = await axios.get(CAR_URL + "/ready");\n  return isReady;\n}\n')),Object(o.b)("p",null,"You can use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pmmistry/bee-travels-workshop/blob/main/budget-v1/src/services/car.js"}),"car.js code")," as a reference"),Object(o.b)("h3",{id:"step-4"},"Step 4"),Object(o.b)("p",null,"Now that we have created both hotel.js and car.js files we are going to be adding some code to the ",Object(o.b)("inlineCode",{parentName:"p"},"budget-v1 > src > services")," ",Object(o.b)("inlineCode",{parentName:"p"},"dataHandler.js")," file "),Object(o.b)("p",null,"In this file we will be creating a function that does 5 steps"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Makes sure date range is valid "),Object(o.b)("li",{parentName:"ol"},"Calls the hotel service api end point"),Object(o.b)("li",{parentName:"ol"},"Calls the car service api end point"),Object(o.b)("li",{parentName:"ol"},"Finds car and hotel based on max price , date range and location"),Object(o.b)("li",{parentName:"ol"},"Return a list of hotel and car data based on max price, date range and location")),Object(o.b)("p",null,"You can replace all the code in the dataHandler.js file with this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pmmistry/bee-travels-workshop/blob/main/budget-v1/src/services/dataHandler.js"}),"dataHandler.js code")),Object(o.b)("h3",{id:"step-5"},"Step 5"),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"budget-v1 > src > errors")," folder create a file called ",Object(o.b)("inlineCode",{parentName:"p"},"IllegalDateError.js")," to flag any errors with incorrect date format. "),Object(o.b)("p",null,"Add the following code or refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pmmistry/bee-travels-workshop/blob/main/budget-v1/src/errors/IllegalDateError.js"}),"IllegalDateError.js")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"class IllegalDateError extends Error {\n  constructor(date) {\n    super(`Date not legal ${date}`);\n    // Ensure the name of this error is the same as the class name\n    this.name = this.constructor.name;\n    // This clips the constructor invocation from the stack trace.\n    // It's not absolutely essential, but it does make the stack trace a little nicer.\n    Error.captureStackTrace(this, this.constructor);\n  }\n}\n\nexport default IllegalDateError;\n")),Object(o.b)("p",null,"Once you have these files set up you are ready to run the application "),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," "),Object(o.b)("p",null,"You should see : "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn run v1.22.5\n$ nodemon -r esm ./src/bin/www.js\n[nodemon] 2.0.6\n[nodemon] to restart at any time, enter `rs`\n[nodemon] watching path(s): *.*\n[nodemon] watching extensions: js,mjs,json\n[nodemon] starting `node -r esm ./src/bin/www.js`\n\n\u2728 You've saved 33 lines of extra YAML (\u25bc 55.9%)\n\nListening on port 9000\n")),Object(o.b)("p",null,"If you go to ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:9000/api-docs/")," you should see the api end point.If you try it out with the required parameters you should see the following output : "),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(124).default})),Object(o.b)("h3",{id:"congratulations"},"Congratulations"),Object(o.b)("p",null,"Congrats on creating the budget microservice! You can now consider deploying this application. "))}b.isMDXComponent=!0},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,h=d["".concat(c,".").concat(p)]||d[p]||u[p]||o;return n?r.a.createElement(h,i(i({ref:t},s),{},{components:n})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);