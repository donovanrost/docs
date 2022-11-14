"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[4182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,d=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?i.createElement(d,o(o({ref:t},f),{},{components:n})):i.createElement(d,o({ref:t},f))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={id:"filesystem",title:"FileSystem",sidebar_position:11},o=void 0,l={unversionedId:"api/middleware/filesystem",id:"api/middleware/filesystem",title:"FileSystem",description:"optionals? within the prefix path are not supported!",source:"@site/docs/api/middleware/filesystem.md",sourceDirName:"api/middleware",slug:"/api/middleware/filesystem",permalink:"/docs/api/middleware/filesystem",draft:!1,editUrl:"https://github.com/gofiber/docs/edit/docusaurus-migration/docs/api/middleware/filesystem.md",tags:[],version:"current",lastUpdatedBy:"Muhammed Efe \xc7etin",lastUpdatedAt:1668443837,formattedLastUpdatedAt:"Nov 14, 2022",sidebarPosition:11,frontMatter:{id:"filesystem",title:"FileSystem",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Favicon",permalink:"/docs/api/middleware/favicon"},next:{title:"Limiter",permalink:"/docs/api/middleware/limiter"}},s={},p=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Signatures",id:"signatures",level:3},{value:"Examples",id:"examples",level:3},{value:"pkger",id:"pkger",level:2},{value:"packr",id:"packr",level:2},{value:"go.rice",id:"gorice",level:2},{value:"fileb0x",id:"fileb0x",level:2},{value:"statik",id:"statik",level:2},{value:"Config",id:"config",level:3},{value:"Default Config",id:"default-config",level:3}],f={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},":params")," & ",(0,a.kt)("inlineCode",{parentName:"strong"},":optionals?")," within the prefix path are not supported!"))),(0,a.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/middleware/filesystem#signatures"},"Signatures")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/middleware/filesystem#examples"},"Examples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/middleware/filesystem#config"},"Config")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/middleware/filesystem#default-config"},"Default Config"))),(0,a.kt)("h3",{id:"signatures"},"Signatures"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func New(config Config) fiber.Handler\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n)\n')),(0,a.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Provide a minimal config\napp.Use(filesystem.New(filesystem.Config{\n    Root: http.Dir("./assets")\n}))\n\n// Or extend your config for customization\napp.Use(filesystem.New(filesystem.Config{\n    Root:         http.Dir("./assets"),\n    Browse:       true,\n    Index:        "index.html",\n    NotFoundFile: "404.html",\n    MaxAge:       3600,\n}))\n')),(0,a.kt)("h2",{id:"pkger"},"pkger"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/markbates/pkger"},"https://github.com/markbates/pkger")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "github.com/markbates/pkger"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: pkger.Dir("/assets"),\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("h2",{id:"packr"},"packr"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/gobuffalo/packr"},"https://github.com/gobuffalo/packr")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "github.com/gobuffalo/packr/v2"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: packr.New("Assets Box", "/assets"),\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("h2",{id:"gorice"},"go.rice"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/GeertJohan/go.rice"},"https://github.com/GeertJohan/go.rice")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "github.com/GeertJohan/go.rice"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: rice.MustFindBox("assets").HTTPBox(),\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("h2",{id:"fileb0x"},"fileb0x"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/UnnoTed/fileb0x"},"https://github.com/UnnoTed/fileb0x")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "<Your go module>/myEmbeddedFiles"\n)\n\nfunc main() {\n    app := fiber.New()\n\n    app.Use("/assets", filesystem.New(filesystem.Config{\n        Root: myEmbeddedFiles.HTTP,\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("h2",{id:"statik"},"statik"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rakyll/statik"},"https://github.com/rakyll/statik")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/filesystem"\n\n    "<Your go module>/statik"\n    fs "github.com/rakyll/statik/fs"\n)\n\nfunc main() {\n    statik, err := fs.New()\n    if err != nil {\n        panic(err)\n    }\n\n    app := fiber.New()\n\n    app.Use("/", filesystem.New(filesystem.Config{\n        Root: statikFS,\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n')),(0,a.kt)("h3",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Root is a FileSystem that provides access\n    // to a collection of files and directories.\n    //\n    // Required. Default: nil\n    Root http.FileSystem `json:"-"`\n\n    // Enable directory browsing.\n    //\n    // Optional. Default: false\n    Browse bool `json:"browse"`\n\n    // Index file for serving a directory.\n    //\n    // Optional. Default: "index.html"\n    Index string `json:"index"`\n\n    // The value for the Cache-Control HTTP-header\n    // that is set on the file response. MaxAge is defined in seconds.\n    //\n    // Optional. Default value 0.\n    MaxAge    int `json:"max_age"`\n\n    // File to return if path is not found. Useful for SPA\'s.\n    //\n    // Optional. Default: ""\n    NotFoundFile string `json:"not_found_file"`\n}\n')),(0,a.kt)("h3",{id:"default-config"},"Default Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'var ConfigDefault = Config{\n    Next:   nil,\n    Root:   nil,\n    Browse: false,\n    Index:  "/index.html",\n    MaxAge: 0,\n}\n')))}m.isMDXComponent=!0}}]);