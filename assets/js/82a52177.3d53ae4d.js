"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[2331],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(7294),a=t(6010);const o="tabItem_Ymn6";function i(e){let{children:r,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>m});var n=t(7462),a=t(7294),o=t(6010),i=t(2389),l=t(7392),s=t(7094),c=t(2466);const d="tabList__CuJ",u="tabItem_LNqP";function p(e){var r;const{lazy:t,block:i,defaultValue:p,values:m,groupId:f,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??b.map((e=>{let{props:{value:r,label:t,attributes:n}}=e;return{value:r,label:t,attributes:n}})),v=(0,l.l)(g,((e,r)=>e.value===r.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(r=b.find((e=>e.props.default)))?void 0:r.props.value)??b[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,s.U)(),[x,w]=(0,a.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=f){const e=k[f];null!=e&&e!==x&&g.some((r=>r.value===e))&&w(e)}const S=e=>{const r=e.currentTarget,t=N.indexOf(r),n=g[t].value;n!==x&&(T(r),w(n),null!=f&&E(f,String(n)))},C=e=>{var r;let t=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const r=N.indexOf(e.currentTarget)+1;t=N[r]??N[0];break}case"ArrowLeft":{const r=N.indexOf(e.currentTarget)-1;t=N[r]??N[N.length-1];break}}null==(r=t)||r.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},g.map((e=>{let{value:r,label:t,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===r?0:-1,"aria-selected":x===r,key:r,ref:e=>N.push(e),onKeyDown:C,onClick:S},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":x===r})}),t??r)}))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==x})))))}function m(e){const r=(0,i.Z)();return a.createElement(p,(0,n.Z)({key:String(r)},e))}},5943:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=t(7462),a=(t(7294),t(3905)),o=t(5488),i=t(5162);const l={id:"error-handling",title:"\ud83d\udc1b Error Handling",description:"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.",sidebar_position:5},s=void 0,c={unversionedId:"guide/error-handling",id:"version-v1.x/guide/error-handling",title:"\ud83d\udc1b Error Handling",description:"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.",source:"@site/versioned_docs/version-v1.x/guide/error-handling.md",sourceDirName:"guide",slug:"/guide/error-handling",permalink:"/docs/v1.x/guide/error-handling",draft:!1,editUrl:"https://github.com/gofiber/docs/edit/docusaurus-migration/versioned_docs/version-v1.x/guide/error-handling.md",tags:[],version:"v1.x",lastUpdatedBy:"Muhammed Efe \xc7etin",lastUpdatedAt:1668443837,formattedLastUpdatedAt:"Nov 14, 2022",sidebarPosition:5,frontMatter:{id:"error-handling",title:"\ud83d\udc1b Error Handling",description:"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd0e Validating",permalink:"/docs/v1.x/guide/validating"},next:{title:"Misc",permalink:"/docs/v1.x/category/misc"}},d={},u=[{value:"Catching Errors",id:"catching-errors",level:2},{value:"Default Error Handler",id:"default-error-handler",level:2},{value:"Custom Error Handler",id:"custom-error-handler",level:2}],p={toc:u};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"catching-errors"},"Catching Errors"),(0,a.kt)("p",null,"It\u2019s essential to ensure that Fiber catches all errors that occur while running route handlers and middleware. You must return them to the handler function, where Fiber will catch and process them."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/", func(c *fiber.Ctx) {\n    err := c.SendFile("file-does-not-exist")\n\n    if err != nil {\n        c.Next(err) // Pass error to Fiber\n    }\n})\n')))),(0,a.kt)("p",null,"Fiber does not handle ",(0,a.kt)("a",{parentName:"p",href:"https://blog.golang.org/defer-panic-and-recover"},"panics")," by default. To recover from a panic thrown by any handler in the stack, you need to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"Recover")," middleware below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'package main\n\nimport (\n    "github.com/gofiber/fiber"\n    "github.com/gofiber/fiber/middleware"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use(middleware.Recover())\n\n    app.Get("/", func(c *fiber.Ctx) {\n        panic("This panic is catched by the ErrorHandler")\n    })\n\n    log.Fatal(app.Listen(3000))\n}\n')),(0,a.kt)("p",null,"Because ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.Next()")," accepts an ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," interface, you could use Fiber's custom error struct to pass an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"status code")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"fiber.NewError()"),". It's optional to pass a message; if this is left empty, it will default to the status code message ","(",(0,a.kt)("inlineCode",{parentName:"p"},"404")," equals ",(0,a.kt)("inlineCode",{parentName:"p"},"Not Found"),")","."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app.Get("/", func(c *fiber.Ctx) {\n    err := fiber.NewError(503)\n    c.Next(err) // 503 Service Unavailable\n\n    err := fiber.NewError(404, "Sorry, not found!")\n    c.Next(err) // 404 Sorry, not found!\n})\n')),(0,a.kt)("h2",{id:"default-error-handler"},"Default Error Handler"),(0,a.kt)("p",null,"Fiber provides an error handler by default. For a standard error, the response is sent as ",(0,a.kt)("strong",{parentName:"p"},"500 Internal Server Error"),". If error is of type ",(0,a.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/gofiber/fiber#Error"},"fiber","*","Error"),", response is sent with the provided status code and message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"// Default error handler\napp.Settings.ErrorHandler = func(ctx *fiber.Ctx, err error) {\n    // Statuscode defaults to 500\n    code := fiber.StatusInternalServerError\n\n    // Check if it's an fiber.Error type\n    if e, ok := err.(*fiber.Error); ok {\n        code = e.Code\n    }\n\n    // Return HTTP response\n    ctx.Set(fiber.HeaderContentType, fiber.MIMETextPlainCharsetUTF8)\n    ctx.Status(code).SendString(err.Error())\n}\n")),(0,a.kt)("h2",{id:"custom-error-handler"},"Custom Error Handler"),(0,a.kt)("p",null,"A custom error handler can be set via ",(0,a.kt)("inlineCode",{parentName:"p"},"app.Settings.ErrorHandler")),(0,a.kt)("p",null,"In most cases, the default error handler should be sufficient. However, a custom error handler can come in handy if you want to capture different types of errors and take action accordingly e.g., send a notification email or log an error to the centralized system. You can also send customized responses to the client e.g., error page or just a JSON response."),(0,a.kt)("p",null,"The following example shows how to display error pages for different types of errors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app := fiber.New()\n\n// Custom error handler\napp.Settings.ErrorHandler = func(ctx *fiber.Ctx, err error) {\n    // Statuscode defaults to 500\n    code := fiber.StatusInternalServerError\n\n    // Retrieve the custom statuscode if it\'s an fiber.*Error\n    if e, ok := err.(*fiber.Error); ok {\n        code = e.Code\n    }\n\n    // Send custom error page\n    err = ctx.Status(code).SendFile(fmt.Sprintf("./%d.html", code))\n    if err != nil {\n        ctx.Status(500).SendString("Internal Server Error")\n    }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Special thanks to the ",(0,a.kt)("a",{parentName:"p",href:"https://echo.labstack.com/"},"Echo")," & ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express")," framework for inspiration regarding error handling.")))}m.isMDXComponent=!0}}]);