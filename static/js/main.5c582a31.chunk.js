(this["webpackJsonpinfo340-project"]=this["webpackJsonpinfo340-project"]||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/FoodList.6e6429c9.csv"},34:function(e,a,t){e.exports=t(41)},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(22),o=t.n(c),l=(t(39),t(1)),i=t(2),s=t(4),m=t(3),u=(t(40),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).handleClick=function(e){0===e?r.setState({calActive:!0,aboutActive:!1,resActive:!1}):1===e?r.setState({calActive:!1,aboutActive:!0,resActive:!1}):r.setState({calActive:!1,aboutActive:!1,resActive:!0})},r.state={calActive:!0,aboutActive:!1,resActive:!1},r}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.props.onAboutClicked,t=this.state,r=t.calActive,c=t.aboutActive,o=t.resActive;return n.a.createElement("div",{id:"header",style:{background:"url(".concat("/project-01-wendelli-1839314","/Calculator-bg.jpg")}},n.a.createElement("div",{id:"logo"},n.a.createElement("h1",null,"Food Carbon Emissions Calculator")),n.a.createElement("div",{id:"menu"},n.a.createElement("ul",null,n.a.createElement("li",{onClick:function(){a(0),e.handleClick(0)},style:{backgroundColor:r?"#3b945e":""}},"Calculator"),n.a.createElement("li",{onClick:function(){a(1),e.handleClick(1)},style:{backgroundColor:c?"#3b945e":""}},"About Us"),n.a.createElement("li",{onClick:function(){a(2),e.handleClick(2)},style:{backgroundColor:o?"#3b945e":""}},"Resources"))))}}]),t}(r.Component)),d=function(){return n.a.createElement("div",{className:"row"})},g=t(11),b=[{category:"fruit",name:"Lemons",imageSrc:"/icons/lemon.png",imageAlt:"lemon",number:0},{category:"fruit",name:"Oranges",imageSrc:"/icons/orange.png",imageAlt:"oranges",number:1},{category:"fruit",name:"Apples",imageSrc:"/icons/apples.png",imageAlt:"apples",number:2},{category:"fruit",name:"Avocados",imageSrc:"/icons/avocado.png",imageAlt:"avocados",number:3},{category:"fruit",name:"Bananas",imageSrc:"/icons/banana.png",imageAlt:"bananas",number:4},{category:"grain",name:"Bread",imageSrc:"/icons/bread.png",imageAlt:"bread",number:5},{category:"grain",name:"Cornflakes",imageSrc:"/icons/cereal.png",imageAlt:"cornflakes",number:6},{category:"grain",name:"Crackers",imageSrc:"/icons/crackers.png",imageAlt:"crackers",number:7},{category:"grain",name:"Plain Flour",imageSrc:"/icons/flour.png",imageAlt:"plain flour",number:8},{category:"grain",name:"Whole Wheat Flour",imageSrc:"/icons/flour.png",imageAlt:"whole wheat flour",number:9},{category:"proteins",name:"Tofu",imageSrc:"/icons/tofu.png",imageAlt:"tofu",number:10},{category:"proteins",name:"Beef",imageSrc:"/icons/beef.png",imageAlt:"beef",number:11},{category:"proteins",name:"Cheese",imageSrc:"/icons/cheese.png",imageAlt:"cheese",number:12},{category:"proteins",name:"Eggs",imageSrc:"/icons/eggs.png",imageAlt:"eggs",number:13},{category:"proteins",name:"Milk",imageSrc:"/icons/milk.png",imageAlt:"milk",number:14},{category:"vegetables",name:"Peas",imageSrc:"/icons/peas.png",imageAlt:"peas",number:15},{category:"vegetables",name:"Mushroom",imageSrc:"/icons/mushroom.png",imageAlt:"mushroom",number:16},{category:"vegetables",name:"Potato",imageSrc:"/icons/potato.png",imageAlt:"potato",number:17},{category:"vegetables",name:"Cucumber",imageSrc:"/icons/cucumber.png",imageAlt:"cucumber",number:18},{category:"vegetables",name:"Lettuce",imageSrc:"/icons/lettuce.png",imageAlt:"lettuce",number:19},{category:"seafood",name:"Cod",imageSrc:"/icons/cod.png",imageAlt:"cod",number:20},{category:"seafood",name:"Salmon",imageSrc:"/icons/salmon.png",imageAlt:"salmon",number:21},{category:"seafood",name:"Sardine",imageSrc:"/icons/sardines.png",imageAlt:"sardine",number:22},{category:"seafood",name:"Trout",imageSrc:"/icons/trout.png",imageAlt:"trout",number:23},{category:"seafood",name:"Tuna",imageSrc:"/icons/tuna.png",imageAlt:"tuna",number:24}],p=[{category:"fruit",name:"Cherries",imageSrc:"/icons/cherries.png",imageAlt:"cherries",number:25},{category:"fruit",name:"Grapes",imageSrc:"/icons/grapes.png",imageAlt:"grapes",number:26},{category:"fruit",name:"Pineapples",imageSrc:"/icons/pineapple.png",imageAlt:"pineapples",number:27},{category:"fruit",name:"Blackberries",imageSrc:"/icons/blackberry.png",imageAlt:"blackberries",number:28},{category:"fruit",name:"Blueberries",imageSrc:"/icons/blueberries.png",imageAlt:"blueberries",number:29},{category:"grain",name:"Pasta",imageSrc:"/icons/pasta.png",imageAlt:"pasta",number:30},{category:"grain",name:"Rice",imageSrc:"/icons/rice.png",imageAlt:"rice",number:31},{category:"proteins",name:"Pork",imageSrc:"/icons/pork.png",imageAlt:"pork",number:32},{category:"proteins",name:"Chicken",imageSrc:"/icons/chicken.png",imageAlt:"chicken",number:33},{category:"vegetables",name:"Tomato",imageSrc:"/icons/tomato.png",imageAlt:"tomato",number:34},{category:"vegetables",name:"Carrot",imageSrc:"/icons/carrot.png",imageAlt:"carrot",number:35},{category:"seafood",name:"Squid",imageSrc:"/icons/squid.png",imageAlt:"squid",number:36},{category:"seafood",name:"Prawn",imageSrc:"/icons/prawn.png",imageAlt:"prawn",number:37}],v=["Fruit","Grain","Proteins","Vegetables","Seafood"],h=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).state={button:!0},r}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state.button,a=this.props,t=a.category,r=a.name,c=a.number,o=a.imageSrc,l=a.imageAlt,i=a.isClicked,s=a.onClick,m={name:r,number:c,activityDuration:0,imageSrc:o,imageAlt:l};return n.a.createElement("div",{className:"flex-activity-item ".concat(t," ").concat(e?"buttonTrue":"buttonFalse"),role:"button",onClick:function(){return s(m)},style:{backgroundColor:i?"lightgrey":""}},n.a.createElement("div",{tabIndex:"0",className:"row"},n.a.createElement("div",{className:"col-1 icon"},n.a.createElement("img",{src:"".concat("/project-01-wendelli-1839314").concat(o),alt:l,className:"activityIcon"})),n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,r))))}}]),t}(r.Component),f=v.map((function(e){return e.toLowerCase()})),E=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).chooseCategory=function(e){r.setState({category:e})},r.displayCards=function(e){var a=r.state.category,t=r.props,c=t.onCardClicked,o=t.chosenCards,l=0===e?b:p,i=o.map((function(e){return e.number}));return n.a.createElement("section",null,l.filter((function(e){return f.indexOf(e.category)===a})).map((function(e){return n.a.createElement(h,{key:e.number,category:e.category,name:e.name,imageSrc:e.imageSrc,imageAlt:e.imageAlt,number:e.number,onClick:c,isClicked:-1!==i.indexOf(e.number)})})))},r.state={category:0,button:!0},r}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.button,r=a.category;return n.a.createElement("div",{className:"col-auto col-md-auto col-xl d-flex ".concat(t?"buttonTrue":"buttonFalse"),id:"pg2-1"},n.a.createElement("section",{className:"flex2-item-1"},n.a.createElement("h2",null,"Food Picker"),n.a.createElement("p",null,'Click the food cards to add them to "My Food", then select the number of portions of that food item you have. Once you are done and satisfied, hit the calculate button to get your result.'),n.a.createElement("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons",role:"button"},v.map((function(a,t){return n.a.createElement("button",{className:"menuButton ".concat(r===t?"active":""),name:"options",key:t,onClick:function(){return e.chooseCategory(t)}},a)}))),n.a.createElement("div",{className:"activityList"},n.a.createElement("div",{className:"list-container"},n.a.createElement("div",{className:"row",id:"allRows"},n.a.createElement("div",{className:"col-auto col-xl-6 d-flex",key:0},this.displayCards(0)),n.a.createElement("div",{className:"col-auto col-xl-6 d-flex",key:1},this.displayCards(1)))))))}}]),t}(r.Component),y=t(17),w=["1 serving","2 servings","3 servings","4 servings","5 servings"],C=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var r;Object(l.a)(this,t),(r=a.call(this,e)).handleChangeDropdown=function(e){var a=parseInt(e.target.value),t=r.state.card;a!==t.activityDuration&&r.setState({card:Object(y.a)(Object(y.a)({},t),{},{activityDuration:a})},(function(){return r.props.onUpdateCard(r.state.card)}))};var n=r.props,c=n.name,o=n.number,i=n.imageAlt,s=n.imageSrc;return r.state={card:{name:c,number:o,imageSrc:s,imageAlt:i,activityDuration:0}},r}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state.card,t=this.props,r=t.imageAlt,c=t.imageSrc,o=t.name,l=t.onDeleteCard;return n.a.createElement("div",{className:"flex-my-activity-item",role:"form"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{onClick:function(){return l(a)}},n.a.createElement("div",{className:"close",role:"button","aria-label":"Close"},"\xd7")),n.a.createElement("div",{className:"col-1 icon"},n.a.createElement("img",{src:"".concat("/project-01-wendelli-1839314").concat(c),alt:r,className:"activityIcon"})),n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,o))),n.a.createElement("div",{className:"card-select-box"},n.a.createElement("label",null,"Quantity"),n.a.createElement("select",{name:"duration",value:a.activityDuration,onChange:function(a){return e.handleChangeDropdown(a)}},w.map((function(e,a){return n.a.createElement("option",{key:a,value:a},e)})))))}}]),t}(r.Component),N=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.onCardClicked,t=e.chosenCards,r=e.updateCard,c=e.calculateLevel;return n.a.createElement("div",{className:"col",id:"pg2-2"},n.a.createElement("section",{className:"flex3-item-1"},n.a.createElement("h2",null,"My Food"),n.a.createElement("p",null,"Enter the quantity of your food and click 'Calculate'."),n.a.createElement("div",{className:"dropzone"},n.a.createElement("div",{className:"list-container"},n.a.createElement("div",{className:"row my-activity-row"},n.a.createElement("div",{className:"col-auto col-md-auto col-xl-auto d-flex"},n.a.createElement("section",{className:"flex3-item1-1"},t.map((function(e){return n.a.createElement(C,{key:e.number,name:e.name,number:e.number,imageSrc:e.imageSrc,imageAlt:e.imageAlt,onDeleteCard:a,onUpdateCard:r})}))))))),n.a.createElement("div",{className:"row calculator-row"},n.a.createElement("div",{className:"col-auto col-md-auto col-xl-9 d-flex"},n.a.createElement("p",{className:"calculation-description"},"Note: We calculate your carbon emissions by factoring all food you consume in a day with the associated attributes.")),n.a.createElement("div",{className:"col-auto col-md-auto col-xl d-flex",id:"calculate-btn"},n.a.createElement("button",{type:"button",className:"btn btn-success btn-md",id:"calculate",onClick:function(){return c()}},"Calculate")))))}}]),t}(r.Component),k=t(24),S=t(23),A=t.n(S),j=[{level:"Low",levelColor:"carbon-level-low",description:"Your carbon emission level is well below the US average, congrats! For context, your emissions are equivalent to about 8kWh of natural gas, or enough electrcity to run your oven for 2.5 hours.",arrow:"lowcarbonArrow"},{level:"Low Moderate",levelColor:"carbon-level-low-moderate",description:"Your carbon emission is below the US average! For context, your emissions would be taken out of the air by a tree in 6 months.",arrow:"lowModeratecarbonArrow"},{level:"Moderate",levelColor:"carbon-level-moderate",description:"Your carbon emission is around the US average. For context, your emissions are equivalent to driving a car for 30 miles.",arrow:"moderatecarbonArrow"},{level:"Moderate High",levelColor:"carbon-level-moderate-high",description:"Your carbon level above the US average. Just for context, your emissions are equivalent to the energy use of your phone for an entire year.",arrow:"moderateHighcarbonArrow"},{level:"High",levelColor:"carbon-level-high",description:"Your carbon level is well above the US average, oh dear. For context, your emissions are similar to taking a 10 lb lump of coal and burning it all.",arrow:"highcarbonArrow"}],x=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.displayLevel;return n.a.createElement("div",{className:"flex-container",id:"pg3"},n.a.createElement("div",null,n.a.createElement("h2",null,"Result"),n.a.createElement("div",{className:"result"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm col-md col-lg"},n.a.createElement("div",{className:"contain-result"},n.a.createElement("section",{className:"flex4-item-1"},n.a.createElement("h3",{id:"carbon-level-title"},"Carbon Emission Level:"),n.a.createElement("h3",{id:j[e].levelColor},j[e].level),n.a.createElement("div",{className:"progress-bar-container"},n.a.createElement("div",{className:"progress"},n.a.createElement("div",{id:"low",className:"progress-bar bg-success",role:"progressbar","aria-valuenow":"20","aria-valuemin":"0","aria-valuemax":"100"},"Low"),n.a.createElement("div",{id:"low-moderate",className:"progress-bar bg-warning",role:"progressbar","aria-valuenow":"40","aria-valuemin":"0","aria-valuemax":"100"},"Low moderate"),n.a.createElement("div",{id:"moderate",className:"progress-bar",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100"},"Moderate"),n.a.createElement("div",{id:"moderate-high",className:"progress-bar",role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"},"Moderate High"),n.a.createElement("div",{id:"high",className:"progress-bar bg-danger",role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"},"High"))),n.a.createElement("div",{className:"arrow-up ".concat(j[e].arrow),"aria-label":"arrow up"})))),n.a.createElement("div",{className:"col-sm-12 col-md-4 col-lg-4"},n.a.createElement("div",{className:"contain-result"},n.a.createElement("section",{className:"flex4-item-2"},n.a.createElement("p",{id:"result-description"},j[e].description))))))))}}]),t}(r.Component),O=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).addToMyFood=function(e){r.setState({cardsInMyFood:[].concat(Object(g.a)(r.state.cardsInMyFood),[e])})},r.removeFromMyFood=function(e){r.setState({cardsInMyFood:r.state.cardsInMyFood.filter((function(a){return a.number!==e.number}))})},r.updateCard=function(e){var a=r.state.cardsInMyFood,t=a.map((function(e){return e.number})).indexOf(e.number);r.setState({cardsInMyFood:[].concat(Object(g.a)(a.slice(0,t)),[e],Object(g.a)(a.slice(t+1)))})},r.calculateLevel=function(){var e=r.state.cardsInMyFood,a=0;k.a(A.a).then((function(t){t.forEach((function(t){for(var r=0;r<e.length;r++){if(e[r].name===t.Food){console.log("Each card data:",t.Food,t.Carbon,t.Category);var n=t.Carbon;a+=n*=2,console.log(n),console.log("Level Index:",a)}}}));var n=Math.floor(a/e.length);console.log("Level Num:",n),n=a>30?4:a>21?3:a>14?2:a>7?1:0,r.setState({calculateLevelNumber:n})})).catch((function(e){throw e}))},r.state={cardsInMyFood:[],calculateLevelNumber:0},r}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,a=e.cardsInMyFood,t=e.calculateLevelNumber;return n.a.createElement("div",null,n.a.createElement("div",{className:"flex-container"},n.a.createElement("div",{className:"row"},n.a.createElement(E,{onCardClicked:this.addToMyFood,chosenCards:a}),n.a.createElement(N,{onCardClicked:this.removeFromMyFood,chosenCards:a,updateCard:this.updateCard,calculateLevel:this.calculateLevel}))),n.a.createElement("div",{className:"flex-container",id:"pg3"},n.a.createElement("div",null,n.a.createElement(x,{displayLevel:t}))))}}]),t}(r.Component),F=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"wrapper"},n.a.createElement("div",{class:"flex2-item-1 main-resource"},n.a.createElement("h2",null,"Who are we?"),n.a.createElement("p",null,"We are Infodawgs, a 5 person team at the UW dedicated to using data to make a difference in the challenges we face in the world today. Our focus in creating the food carbon emissions calculator is to give users a readily accessible and quick way to determine the carbon impact of their eating habits. As food accounts for a third of the world's carbon emissions, choosing more sustainable options in our diet is a great first step to making a difference on our carbon footprint.")),n.a.createElement("div",{className:"flex-container pg1-about"},n.a.createElement("div",{className:"row info"},n.a.createElement("div",{className:"col-20 col-md-20 col-xl-auto d-flex about-secion-container"},n.a.createElement("section",{className:"flex-item-6 about-secion"},n.a.createElement("img",{className:"rounded-circle profile",src:"".concat("/project-01-wendelli-1839314","/wendell.jpg"),alt:"people"}),n.a.createElement("h2",{className:"name"},"Wendell Li"),n.a.createElement("ul",{className:"list"},n.a.createElement("li",null,"Full-stack Developer"),n.a.createElement("li",null,"Student at the University of Washington"),n.a.createElement("li",null,"Class of 2022"))),n.a.createElement("section",{className:"flex-item-6 about-secion"},n.a.createElement("img",{className:"rounded-circle profile",src:"".concat("/project-01-wendelli-1839314","/anika.jpg"),alt:"people"}),n.a.createElement("h2",{className:"name"},"Anika Mishra"),n.a.createElement("ul",{className:"list"},n.a.createElement("li",null,"UI/UX Designer"),n.a.createElement("li",null,"Student at the University of Washington"),n.a.createElement("li",null,"Class of 2022"))),n.a.createElement("section",{className:"flex-item-6 about-secion"},n.a.createElement("img",{className:"rounded-circle profile",src:"".concat("/project-01-wendelli-1839314","/hongyi.jpg"),alt:"people"}),n.a.createElement("h2",{className:"name"},"Hongyi Tang"),n.a.createElement("ul",{className:"list"},n.a.createElement("li",null,"Front-end Engineer"),n.a.createElement("li",null,"Student at the University of Washington"),n.a.createElement("li",null,"Class of 2022"))),n.a.createElement("section",{className:"flex-item-6 about-secion"},n.a.createElement("img",{className:"rounded-circle profile",src:"".concat("/project-01-wendelli-1839314","/ben.jpg"),alt:"people"}),n.a.createElement("h2",{className:"name"},"Benjamin Chan "),n.a.createElement("ul",{className:"list"},n.a.createElement("li",null,"Data Engineer"),n.a.createElement("li",null,"Student at the University of Washington"),n.a.createElement("li",null,"Class of 2022"))),n.a.createElement("section",{className:"flex-item-6 about-secion"},n.a.createElement("img",{className:"rounded-circle profile",src:"".concat("/project-01-wendelli-1839314","/maya.jpg"),alt:"people"}),n.a.createElement("h2",{className:"name"},"Maya Nair"),n.a.createElement("ul",{className:"list"},n.a.createElement("li",null,"Project Manager"),n.a.createElement("li",null,"Student at the University of Washington"),n.a.createElement("li",null,"Class of 2022")))))))}}]),t}(r.Component),M=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"container copyright"},n.a.createElement("p",null,"Copyright \xa9 2021 Anika Mishra, Benjamin Chan, Maya Nair, Steven Tang, Wendell Li")))},_=function(){return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",{class:"flex2-item-1 main-resource"},n.a.createElement("h2",null,"Additional Resources"),n.a.createElement("p",null,"If you are interested in more about how food choices and sustainability intertwine, there are plenty of resources available to explore further how your choice impacts the planet. Feel free to read more about the topics below to learn more!")),n.a.createElement("iframe",{className:"youtube",src:"https://www.youtube.com/embed/PyiVf26C5pc",title:"Food Science"}),n.a.createElement("ul",{class:"cards-resource "},n.a.createElement("li",{class:"cards_item-resource "},n.a.createElement("div",{class:"card-resource "},n.a.createElement("div",{class:"card_image-resource "},n.a.createElement("img",{src:"".concat("/project-01-wendelli-1839314","/food.jpg"),alt:"food"})),n.a.createElement("div",{class:"card_content-resource "},n.a.createElement("h2",{class:"card_title-resource "},"Food Sciences"),n.a.createElement("p",{class:"card_text-resource "},"Why low carbon emssion Food are good for you"),n.a.createElement("a",{href:"https://www.sierraclub.org/sierra/low-carbon-diets-are-good-for-planet-and-your-health"},n.a.createElement("button",{class:"btn-resource card_btn-resource"},"Read More"))))),n.a.createElement("li",{class:"cards_item-resource "},n.a.createElement("div",{class:"card-resource "},n.a.createElement("div",{class:"card_image-resource "},n.a.createElement("img",{src:"".concat("/project-01-wendelli-1839314","/img2.jpg"),alt:"img2"})),n.a.createElement("div",{class:"card_content-resource "},n.a.createElement("h2",{class:"card_title-resource "},"Interview with Expert"),n.a.createElement("p",{class:"card_text-resource "},"How experts think about this issue"),n.a.createElement("a",{href:"https://www.npr.org/2021/11/11/1054884140/when-consumers-want-to-reduce-their-carbon-footprint-food-choices-matter "},n.a.createElement("button",{class:"btn-resource card_btn-resource"},"Read More"))))),n.a.createElement("li",{class:"cards_item-resource "},n.a.createElement("div",{class:"card-resource "},n.a.createElement("div",{class:"card_image-resource "},n.a.createElement("img",{src:"".concat("/project-01-wendelli-1839314","/img3.jpg"),alt:"img3"})),n.a.createElement("div",{class:"card_content-resource "},n.a.createElement("h2",{class:"card_title-resource "},"Food Guides"),n.a.createElement("p",{class:"card_text-resource "},"Breakdown views to know food carbon emssion"),n.a.createElement("a",{href:"https://www.bbcgoodfood.com/howto/guide/what-food-carbon-footprint "},n.a.createElement("button",{class:"btn-resource card_btn-resource"},"Read More"))))),n.a.createElement("li",{class:"cards_item-resource "},n.a.createElement("div",{class:"card-resource "},n.a.createElement("div",{class:"card_image-resource "},n.a.createElement("img",{src:"".concat("/project-01-wendelli-1839314","/img4.jpg"),alt:"img4"})),n.a.createElement("div",{class:"card_content-resource "},n.a.createElement("h2",{class:"card_title-resource "},"Informational Stories"),n.a.createElement("p",{class:"card_text-resource "},"Let's take a look on other people's stories"),n.a.createElement("a",{href:"https://www.carbonbrief.org/food-systems-responsible-for-one-third-of-human-caused-emissions"},n.a.createElement("button",{class:"btn-resource card_btn-resource"},"Read More"))))),n.a.createElement("li",{class:"cards_item-resource "},n.a.createElement("div",{class:"card-resource "},n.a.createElement("div",{class:"card_image-resource "},n.a.createElement("img",{src:"".concat("/project-01-wendelli-1839314","/img5.jpg"),alt:"img5"})),n.a.createElement("div",{class:"card_content-resource "},n.a.createElement("h2",{class:"card_title-resource "},"Fact Sheets"),n.a.createElement("p",{class:"card_text-resource "},"Quick facts about food carbon footprint"),n.a.createElement("a",{href:"https://css.umich.edu/factsheets/carbon-footprint-factsheet "},n.a.createElement("button",{class:"btn-resource card_btn-resource"},"Read More"))))),n.a.createElement("li",{class:"cards_item-resource "},n.a.createElement("div",{class:"card-resource "},n.a.createElement("div",{class:"card_image-resource "},n.a.createElement("img",{src:"".concat("/project-01-wendelli-1839314","/img6.jpg"),alt:"img6"})),n.a.createElement("div",{class:"card_content-resource "},n.a.createElement("h2",{class:"card_title-resource "},"Sustainability Stories"),n.a.createElement("p",{class:"card_text-resource "},"How to live a susatinable lifestyle"),n.a.createElement("a",{href:"https://time.com/6114999/carbon-emissions-food/"},n.a.createElement("button",{class:"btn-resource card_btn-resource",href:"https://ourworldindata.org/food-choice-vs-eating-local"},"Read More"))))))))},L=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).currentPage=function(e){r.setState({page:e})},r.state={page:0},r}return Object(i.a)(t,[{key:"render",value:function(){var e;return e=0===this.state.page?n.a.createElement("div",null,n.a.createElement(d,null),n.a.createElement(O,null)):1===this.state.page?n.a.createElement(F,null):n.a.createElement(_,null),n.a.createElement("div",null,n.a.createElement(u,{onAboutClicked:this.currentPage}),e,n.a.createElement(M,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.5c582a31.chunk.js.map