"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[7608],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(7294),a=t(6010);const o="tabItem_Ymn6";function i(e){let{children:r,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>f});var n=t(7462),a=t(7294),o=t(6010),i=t(2389),l=t(7392),s=t(7094),c=t(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var r;const{lazy:t,block:i,defaultValue:p,values:f,groupId:m,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=f??b.map((e=>{let{props:{value:r,label:t,attributes:n}}=e;return{value:r,label:t,attributes:n}})),v=(0,l.l)(g,((e,r)=>e.value===r.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(r=b.find((e=>e.props.default)))?void 0:r.props.value)??b[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,s.U)(),[w,N]=(0,a.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==w&&g.some((r=>r.value===e))&&N(e)}const T=e=>{const r=e.currentTarget,t=x.indexOf(r),n=g[t].value;n!==w&&(S(r),N(n),null!=m&&E(m,String(n)))},C=e=>{var r;let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const r=x.indexOf(e.currentTarget)+1;t=x[r]??x[0];break}case"ArrowLeft":{const r=x.indexOf(e.currentTarget)-1;t=x[r]??x[x.length-1];break}}null==(r=t)||r.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},g.map((e=>{let{value:r,label:t,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===r?0:-1,"aria-selected":w===r,key:r,ref:e=>x.push(e),onKeyDown:C,onClick:T},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":w===r})}),t??r)}))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==w})))))}function f(e){const r=(0,i.Z)();return a.createElement(p,(0,n.Z)({key:String(r)},e))}},7931:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=t(7462),a=(t(7294),t(3905)),o=t(5488),i=t(5162);const l={id:"error-handling",title:"\ud83d\udc1b Error Handling",description:"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.",sidebar_position:4},s=void 0,c={unversionedId:"guide/error-handling",id:"guide/error-handling",title:"\ud83d\udc1b Error Handling",description:"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.",source:"@site/docs/guide/error-handling.md",sourceDirName:"guide",slug:"/guide/error-handling",permalink:"/docs/guide/error-handling",draft:!1,editUrl:"https://github.com/gofiber/docs/edit/docusaurus-migration/docs/guide/error-handling.md",tags:[],version:"current",lastUpdatedBy:"Muhammed Efe \xc7etin",lastUpdatedAt:1668443837,formattedLastUpdatedAt:"Nov 14, 2022",sidebarPosition:4,frontMatter:{id:"error-handling",title:"\ud83d\udc1b Error Handling",description:"Fiber supports centralized error handling by returning an error to the handler which allows you to log errors to external services or send a customized HTTP response to the client.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcdd Templates",permalink:"/docs/guide/templates"},next:{title:"\ud83d\udd0e Validation",permalink:"/docs/guide/validation"}},u={},d=[{value:"Catching Errors",id:"catching-errors",level:2},{value:"Default Error Handler",id:"default-error-handler",level:2},{value:"Custom Error Handler",id:"custom-error-handler",level:2}],p={toc:d};function f(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"catching-errors"},"Catching Errors"),(0,a.kt)("p",null,"It\u2019s essential to ensure that Fiber catches all errors that occur while running route handlers and middleware. You must return them to the handler function, where Fiber will catch and process them."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"example",label:"Example",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'app.Get("/", func(c *fiber.Ctx) error {\n    // Pass error to Fiber\n    return c.SendFile("file-does-not-exist")\n})\n')))),(0,a.kt)("p",null,"Fiber does not handle ",(0,a.kt)("a",{parentName:"p",href:"https://go.dev/blog/defer-panic-and-recover"},"panics")," by default. To recover from a panic thrown by any handler in the stack, you need to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"Recover")," middleware below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/recover"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use(recover.New())\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        panic("This panic is caught by fiber")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("p",null,"You could use Fiber's custom error struct to pass an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"status code")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"fiber.NewError()"),". It's optional to pass a message; if this is left empty, it will default to the status code message ","(",(0,a.kt)("inlineCode",{parentName:"p"},"404")," equals ",(0,a.kt)("inlineCode",{parentName:"p"},"Not Found"),")","."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'app.Get("/", func(c *fiber.Ctx) error {\n    // 503 Service Unavailable\n    return fiber.ErrServiceUnavailable\n\n    // 503 On vacation!\n    return fiber.NewError(fiber.StatusServiceUnavailable, "On vacation!")\n})\n')),(0,a.kt)("h2",{id:"default-error-handler"},"Default Error Handler"),(0,a.kt)("p",null,"Fiber provides an error handler by default. For a standard error, the response is sent as ",(0,a.kt)("strong",{parentName:"p"},"500 Internal Server Error"),". If the error is of type ",(0,a.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/gofiber/fiber#Error"},"fiber.Error"),", the response is sent with the provided status code and message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},"// Default error handler\nvar DefaultErrorHandler = func(c *fiber.Ctx, err error) error {\n    // Status code defaults to 500\n    code := fiber.StatusInternalServerError\n\n    // Retrieve the custom status code if it's a *fiber.Error\n    var e *fiber.Error\n    if errors.As(err, &e) {\n        code = e.Code\n    }\n\n    // Set Content-Type: text/plain; charset=utf-8\n    c.Set(fiber.HeaderContentType, fiber.MIMETextPlainCharsetUTF8)\n\n    // Return status code with error message\n    return c.Status(code).SendString(err.Error())\n}\n")),(0,a.kt)("h2",{id:"custom-error-handler"},"Custom Error Handler"),(0,a.kt)("p",null,"A custom error handler can be set using a ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/fiber#config"},"Config "),"when initializing a ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/fiber#new"},"Fiber instance"),"."),(0,a.kt)("p",null,"In most cases, the default error handler should be sufficient. However, a custom error handler can come in handy if you want to capture different types of errors and take action accordingly e.g., send a notification email or log an error to the centralized system. You can also send customized responses to the client e.g., error page or just a JSON response."),(0,a.kt)("p",null,"The following example shows how to display error pages for different types of errors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'// Create a new fiber instance with custom config\napp := fiber.New(fiber.Config{\n    // Override default error handler\n    ErrorHandler: func(ctx *fiber.Ctx, err error) error {\n        // Status code defaults to 500\n        code := fiber.StatusInternalServerError\n\n        // Retrieve the custom status code if it\'s a *fiber.Error\n        var e *fiber.Error\n        if errors.As(err, &e) {\n            code = e.Code\n        }\n\n        // Send custom error page\n        err = ctx.Status(code).SendFile(fmt.Sprintf("./%d.html", code))\n        if err != nil {\n            // In case the SendFile fails\n            return ctx.Status(fiber.StatusInternalServerError).SendString("Internal Server Error")\n        }\n\n        // Return from handler\n        return nil\n    },\n})\n\n// ...\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Special thanks to the ",(0,a.kt)("a",{parentName:"p",href:"https://echo.labstack.com/"},"Echo")," & ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express")," framework for inspiration regarding error handling.")))}f.isMDXComponent=!0}}]);