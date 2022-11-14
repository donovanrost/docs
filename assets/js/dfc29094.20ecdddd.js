"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[2411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:h,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,s.U)(),[x,w]=(0,r.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==x&&k.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==x&&(T(t),w(a),null!=h&&y(h,String(a)))},G=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:G,onClick:E},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},1618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={id:"routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",sidebar_position:1},s=void 0,p={unversionedId:"guide/routing",id:"guide/routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",source:"@site/docs/guide/routing.md",sourceDirName:"guide",slug:"/guide/routing",permalink:"/docs/guide/routing",draft:!1,editUrl:"https://github.com/gofiber/docs/edit/docusaurus-migration/docs/guide/routing.md",tags:[],version:"current",lastUpdatedBy:"Muhammed Efe \xc7etin",lastUpdatedAt:1668443837,formattedLastUpdatedAt:"Nov 14, 2022",sidebarPosition:1,frontMatter:{id:"routing",title:"\ud83d\udd0c Routing",description:"Routing refers to how an application's endpoints (URIs) respond to client requests.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guide",permalink:"/docs/category/guide"},next:{title:"\ud83c\udfad Grouping",permalink:"/docs/guide/grouping"}},u={},c=[{value:"Paths",id:"paths",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Constraints",id:"constraints",level:3},{value:"Middleware",id:"middleware",level:2},{value:"Grouping",id:"grouping",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"paths"},"Paths"),(0,r.kt)("p",null,"Route paths, combined with a request method, define the endpoints at which requests can be made. Route paths can be ",(0,r.kt)("strong",{parentName:"p"},"strings")," or ",(0,r.kt)("strong",{parentName:"p"},"string patterns"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples of route paths based on strings")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// This route path will match requests to the root route, "/":\napp.Get("/", func(c *fiber.Ctx) error {\n      return c.SendString("root")\n})\n\n// This route path will match requests to "/about":\napp.Get("/about", func(c *fiber.Ctx) error {\n    return c.SendString("about")\n})\n\n// This route path will match requests to "/random.txt":\napp.Get("/random.txt", func(c *fiber.Ctx) error {\n    return c.SendString("random.txt")\n})\n')),(0,r.kt)("p",null,"As with the expressJs framework, the order of the route declaration plays a role.\nWhen a request is received, the routes are checked in the order in which they are declared."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"So please be careful to write routes with variable parameters after the routes that contain fixed parts, so that these variable parts do not match instead and unexpected behavior occurs.")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"Route parameters are dynamic elements in the route, which are ",(0,r.kt)("strong",{parentName:"p"},"named")," or ",(0,r.kt)("strong",{parentName:"p"},"not named segments"),". This segments that are used to capture the values specified at their position in the URL. The obtained values can be retrieved using the ",(0,r.kt)("a",{parentName:"p",href:"https://fiber.wiki/context#params"},"Params")," function, with the name of the route parameter specified in the path as their respective keys or for unnamed parameters the character","(","*",", +",")"," and the counter of this."),(0,r.kt)("p",null,"The characters :, +, and ","*"," are characters that introduce a parameter."),(0,r.kt)("p",null,"Greedy parameters are indicated by wildcard","(","*",")"," or plus","(","+",")"," signs."),(0,r.kt)("p",null,'The routing also offers the possibility to use optional parameters, for the named parameters these are marked with a final "?", unlike the plus sign which is not optional, you can use the wildcard character for a parameter range which is optional and greedy.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of define routes with route parameters")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Parameters\napp.Get("/user/:name/books/:title", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s\\n", c.Params("name"))\n    fmt.Fprintf(c, "%s\\n", c.Params("title"))\n    return nil\n})\n// Plus - greedy - not optional\napp.Get("/user/+", func(c *fiber.Ctx) error {\n    return c.SendString(c.Params("+"))\n})\n\n// Optional parameter\napp.Get("/user/:name?", func(c *fiber.Ctx) error {\n    return c.SendString(c.Params("name"))\n})\n\n// Wildcard - greedy - optional\napp.Get("/user/*", func(c *fiber.Ctx) error {\n    return c.SendString(c.Params("*"))\n})\n\n// This route path will match requests to "/v1/some/resource/name:customVerb", since the parameter character is escaped\napp.Get("/v1/some/resource/name\\\\:customVerb", func(c *fiber.Ctx) error {\n    return c.SendString("Hello, Community")\n})\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Since the hyphen ","(",(0,r.kt)("inlineCode",{parentName:"p"},"-"),")"," and the dot ","(",(0,r.kt)("inlineCode",{parentName:"p"},"."),")"," are interpreted literally, they can be used along with route parameters for useful purposes.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All special parameter characters can also be escaped with ",(0,r.kt)("inlineCode",{parentName:"p"},'"\\\\"')," and lose their value, so you can use them in the route if you want, like in the custom methods of the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/apis/design/custom_methods"},"google api design guide"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// http://localhost:3000/plantae/prunus.persica\napp.Get("/plantae/:genus.:species", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s.%s\\n", c.Params("genus"), c.Params("species"))\n    return nil // prunus.persica\n})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// http://localhost:3000/flights/LAX-SFO\napp.Get("/flights/:from-:to", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s-%s\\n", c.Params("from"), c.Params("to"))\n    return nil // LAX-SFO\n})\n')),(0,r.kt)("p",null,"Our intelligent router recognizes that the introductory parameter characters should be part of the request route in this case and can process them as such."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// http://localhost:3000/shop/product/color:blue/size:xs\napp.Get("/shop/product/color::color/size::size", func(c *fiber.Ctx) error {\n    fmt.Fprintf(c, "%s:%s\\n", c.Params("color"), c.Params("size"))\n    return nil // blue:xs\n})\n')),(0,r.kt)("p",null,"In addition, several parameters in a row and several unnamed parameter characters in the route, such as the wildcard or plus character, are possible, which greatly expands the possibilities of the router for the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// GET /@v1\n// Params: "sign" -> "@", "param" -> "v1"\napp.Get("/:sign:param", handler)\n\n// GET /api-v1\n// Params: "name" -> "v1" \napp.Get("/api-:name", handler)\n\n// GET /customer/v1/cart/proxy\n// Params: "*1" -> "customer/", "*2" -> "/cart"\napp.Get("/*v1*/proxy", handler)\n\n// GET /v1/brand/4/shop/blue/xs\n// Params: "*1" -> "brand/4", "*2" -> "blue/xs"\napp.Get("/v1/*/shop/*", handler)\n')),(0,r.kt)("p",null,"We have adapted the routing strongly to the express routing, but currently without the possibility of the regular expressions, because they are quite slow. The possibilities can be tested with version 0.1.7 ","(","express 4",")"," in the online ",(0,r.kt)("a",{parentName:"p",href:"http://forbeslindesay.github.io/express-route-tester/"},"Express route tester"),"."),(0,r.kt)("h3",{id:"constraints"},"Constraints"),(0,r.kt)("p",null,"Route constraints execute when a match has occurred to the incoming URL and the URL path is tokenized into route values by parameters. The feature was intorduced in ",(0,r.kt)("inlineCode",{parentName:"p"},"v2.37.0")," and inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/routing?view=aspnetcore-6.0#route-constraints"},".NET Core"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Constraints aren't validation for parameters. If constraint aren't valid for parameter value, Fiber returns ",(0,r.kt)("strong",{parentName:"p"},"404 handler"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Constraint"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Example matches"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},":id<int",">"),(0,r.kt)("td",{parentName:"tr",align:null},"123456789, -123456789")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},":active<bool",">"),(0,r.kt)("td",{parentName:"tr",align:null},"true,false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"guid"),(0,r.kt)("td",{parentName:"tr",align:null},":id<guid",">"),(0,r.kt)("td",{parentName:"tr",align:null},"CD2C1638-1638-72D5-1638-DEADBEEF1638")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},":weight<float",">"),(0,r.kt)("td",{parentName:"tr",align:null},"1.234, -1,001.01e8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minLen(value)"),(0,r.kt)("td",{parentName:"tr",align:null},":username<minLen(4)",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Test (must be at least 4 characters)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxLen(value)"),(0,r.kt)("td",{parentName:"tr",align:null},":filename<maxLen(8)",">"),(0,r.kt)("td",{parentName:"tr",align:null},"MyFile (must be no more than 8 characters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"len(length)"),(0,r.kt)("td",{parentName:"tr",align:null},":filename<len(12)",">"),(0,r.kt)("td",{parentName:"tr",align:null},"somefile.txt (exactly 12 characters)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min(value)"),(0,r.kt)("td",{parentName:"tr",align:null},":age<min(18)",">"),(0,r.kt)("td",{parentName:"tr",align:null},"19 (Integer value must be at least 18)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max(value)"),(0,r.kt)("td",{parentName:"tr",align:null},":age<max(120)",">"),(0,r.kt)("td",{parentName:"tr",align:null},"91 (Integer value must be no more than 120)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"range(min,max)"),(0,r.kt)("td",{parentName:"tr",align:null},":age<range(18,120)",">"),(0,r.kt)("td",{parentName:"tr",align:null},"91 (Integer value must be at least 18 but no more than 120)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alpha"),(0,r.kt)("td",{parentName:"tr",align:null},":name<alpha",">"),(0,r.kt)("td",{parentName:"tr",align:null},"Rick (String must consist of one or more alphabetical characters, a-z and case-insensitive)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},":dob<datetime(2006","\\","\\","-01","\\","\\","-02)",">"),(0,r.kt)("td",{parentName:"tr",align:null},"2005-11-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regex(expression)"),(0,r.kt)("td",{parentName:"tr",align:null},":date<regex(","\\","d{4}-","\\","d{2}-","\\","d{2})}",">"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-08-27 (Must match regular expression)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"single-constraint",label:"Single Constraint",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/:test<min(5)>", func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("test"))\n})\n\n// curl -X GET http://localhost:3000/12\n// 12\n\n// curl -X GET http://localhost:3000/1\n// Cannot GET /1\n'))),(0,r.kt)(l.Z,{value:"multiple-constraints",label:"Multiple Constraints",mdxType:"TabItem"},(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},";")," for multiple constraints."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/:test<min(100);maxLen(5)>", func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("test"))\n})\n\n// curl -X GET http://localhost:3000/120000\n// Cannot GET /120000\n\n// curl -X GET http://localhost:3000/1\n// Cannot GET /1\n\n// curl -X GET http://localhost:3000/250\n// 250\n'))),(0,r.kt)(l.Z,{value:"regex-constraint",label:"Regex Constraint",mdxType:"TabItem"},(0,r.kt)("p",null,"Fiber precompiles regex query when to register routes. So there're no performance overhead for regex constraint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/:date<regex(\\\\d{4}-\\\\d{2}-\\\\d{2})}>", func(c *fiber.Ctx) error {\n  return c.SendString(c.Params("date"))\n})\n\n// curl -X GET http://localhost:3000/125\n// Cannot GET /125\n\n// curl -X GET http://localhost:3000/test\n// Cannot GET /test\n\n// curl -X GET http://localhost:3000/2022-08-27\n// 2022-08-27\n')))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You should use ",(0,r.kt)("inlineCode",{parentName:"p"},"\\\\")," before routing-specific characters when to use datetime constraint (",(0,r.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},":"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", ",(0,r.kt)("inlineCode",{parentName:"p"},";"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"("),", ",(0,r.kt)("inlineCode",{parentName:"p"},")"),"), to avoid wrong parsing.")),(0,r.kt)("h2",{id:"middleware"},"Middleware"),(0,r.kt)("p",null,"Functions that are designed to make changes to the request or response are called ",(0,r.kt)("strong",{parentName:"p"},"middleware functions"),". The ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/ctx#next"},"Next")," is a ",(0,r.kt)("strong",{parentName:"p"},"Fiber")," router function, when called, executes the ",(0,r.kt)("strong",{parentName:"p"},"next")," function that ",(0,r.kt)("strong",{parentName:"p"},"matches")," the current route."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example of a middleware function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'app.Use(func(c *fiber.Ctx) error {\n  // Set a custom header on all responses:\n  c.Set("X-Custom-Header", "Hello, World")\n\n  // Go to next middleware:\n  return c.Next()\n})\n\napp.Get("/", func(c *fiber.Ctx) error {\n  return c.SendString("Hello, World!")\n})\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Use")," method path is a ",(0,r.kt)("strong",{parentName:"p"},"mount"),", or ",(0,r.kt)("strong",{parentName:"p"},"prefix")," path, and limits middleware to only apply to any paths requested that begin with it."),(0,r.kt)("h2",{id:"grouping"},"Grouping"),(0,r.kt)("p",null,"If you have many endpoints, you can organize your routes using ",(0,r.kt)("inlineCode",{parentName:"p"},"Group"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n  app := fiber.New()\n\n  api := app.Group("/api", middleware) // /api\n\n  v1 := api.Group("/v1", middleware)   // /api/v1\n  v1.Get("/list", handler)             // /api/v1/list\n  v1.Get("/user", handler)             // /api/v1/user\n\n  v2 := api.Group("/v2", middleware)   // /api/v2\n  v2.Get("/list", handler)             // /api/v2/list\n  v2.Get("/user", handler)             // /api/v2/user\n\n  log.Fatal(app.Listen(":3000"))\n}\n')))}m.isMDXComponent=!0}}]);