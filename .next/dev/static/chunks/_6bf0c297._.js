(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/firebase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>app,
    "auth",
    ()=>auth,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyCgG4W9JhlJvykMCT_kAg1XYpo1rXOiRlI"),
    authDomain: ("TURBOPACK compile-time value", "foodcatalog-14cef.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "foodcatalog-14cef"),
    storageBucket: ("TURBOPACK compile-time value", "foodcatalog-14cef.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "1077231424960"),
    appId: ("TURBOPACK compile-time value", "1:1077231424960:web:d98222274a86f3353ae425")
};
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/providers/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    loading: true
});
const useAuth = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
};
_s(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function AuthProvider({ children }) {
    _s1();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const logout = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
        router.push("/login");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "AuthProvider.useEffect.unsub": (user)=>{
                    setUser(user);
                    setLoading(false);
                }
            }["AuthProvider.useEffect.unsub"]);
            return ({
                "AuthProvider.useEffect": ()=>unsub()
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/providers/AuthContext.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
_s1(AuthProvider, "J17Kp8z+0ojgAqGoY5o3BCjwWms=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/providers/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Navigation() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "border-b bg-card sticky top-0 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 bg-primary rounded-lg flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-5 h-5 text-primary-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navigation.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-lg hidden sm:inline",
                                    children: t("app_name")
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-foreground hover:text-primary transition",
                                    children: t("nav.browse")
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    className: "text-foreground hover:text-primary transition",
                                    children: t("nav.about")
                                }, void 0, false, {
                                    fileName: "[project]/components/navigation.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2"
                        }, void 0, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "md:hidden p-2",
                            onClick: ()=>setIsOpen(!isOpen),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/components/navigation.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/navigation.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden border-t py-4 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "block px-4 py-2 hover:bg-muted rounded",
                            children: t("nav.discover")
                        }, void 0, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about",
                            className: "block px-4 py-2 hover:bg-muted rounded",
                            children: t("nav.about")
                        }, void 0, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            className: "block px-4 py-2 hover:bg-muted rounded",
                            children: t("nav.sign_in")
                        }, void 0, false, {
                            fileName: "[project]/components/navigation.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/navigation.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/navigation.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/navigation.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Navigation, "UOtuyyLxUl3ezveU+cr9bUIv5qM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/providers/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Footer = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t bg-card mt-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-muted-foreground",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " ",
                        t("app_name"),
                        ". ",
                        t("all_rights_reserved")
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 mt-4 sm:mt-0",
                    children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>router.push("/owner/dashboard"),
                        children: user.email
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 19,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>router.push("/login"),
                        children: t("footer.login_as_owner")
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 21,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/footer.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Footer, "GAceCpMkEsl4XZTRSoBuWsHgb/8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/i18n/locales/pl/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"app_name\":\"LokalGastro\",\"all_rights_reserved\":\"Wszelkie prawa zastrzeżone.\",\"nav\":{\"home\":\"Strona główna\",\"browse\":\"Przeglądaj\",\"discover\":\"Odkryj\",\"about\":\"O nas\",\"login\":\"Zaloguj się\",\"sign_in\":\"Zaloguj się\"},\"footer\":{\"login_as_owner\":\"Zaloguj się jako właściciel\"},\"main_page\":{\"header\":\"Katalog lokalnej gastronomii\",\"subheader\":\"Znajdź najlepsze restauracje, bary i kawiarnie w swoim mieście. Wspieraj lokalną gastronomię i odkrywaj ukryte perełki w swojej okolicy.\",\"browse_restaurants\":\"Przeglądaj restauracje\",\"add_restaurant\":\"Dodaj restaurację\"},\"discover_page\":{\"header\":\"Odkryj restauracje\",\"subheader\":\"Przeglądaj restauracje dodane przez naszych użytkowników\",\"no_restaurants\":\"Brak dostępnych restauracji. Bądź pierwszym, który doda swoją!\",\"search_placeholder\":\"Wyszukaj restauracje...\",\"loading\":\"Wczytywanie restauracji\",\"no_results\":\"Nie znaleziono restauracji\",\"try_adjusting\":\"Spróbuj zmienić wyszukiwanie lub filtry\"},\"about_page\":{\"header\":\"O nas\"},\"login_page\":{\"header\":\"Właściciel - Logowanie\",\"owner_portal\":\"Panel właściciela\",\"sign_in_to_manage\":\"Zaloguj się, aby zarządzać swoją restauracją\",\"email_label\":\"Adres e-mail\",\"email_placeholder\":\"Wpisz swój adres e-mail\",\"password_label\":\"Hasło\",\"password_placeholder\":\"Wpisz swoje hasło\",\"login_button\":\"Zaloguj się jako właściciel\",\"signing_in\":\"Logowanie...\",\"sign_in\":\"Zaloguj się\",\"new_to_app\":\"Nowy w LokalGastro?\",\"create_account\":\"Utwórz konto właściciela\",\"looking_for_dining\":\"Szukasz opcji gastronomicznych?\",\"browse_restaurants\":\"Przeglądaj restauracje\",\"email_required\":\"Email jest wymagany\",\"email_min_length\":\"Email powinien mieć minimum 6 znaków\",\"password_required\":\"Hasło jest wymagane\",\"password_min_length\":\"Hasło powinno mieć minimum 10 znaków\"},\"register_page\":{\"header\":\"Zostań właścicielem\",\"subheader\":\"Zarejestruj swoją restaurację i zacznij nią zarządzać już dziś\",\"name_label\":\"Imię i nazwisko\",\"name_placeholder\":\"Wpisz swoje pełne imię i nazwisko\",\"company_label\":\"Nazwa firmy\",\"company_placeholder\":\"Wpisz nazwę swojej firmy\",\"email_label\":\"Adres e-mail\",\"email_placeholder\":\"Wpisz swój adres e-mail\",\"password_label\":\"Hasło\",\"password_placeholder\":\"Wpisz swoje hasło\",\"confirm_password_label\":\"Potwierdź hasło\",\"confirm_password_placeholder\":\"Wpisz ponownie swoje hasło\",\"create_account_button\":\"Zarejestruj się jako właściciel\",\"creating_account\":\"Tworzenie konta...\",\"already_have_account\":\"Masz już konto?\",\"login_here\":\"Zaloguj się tutaj\",\"looking_for_dining\":\"Szukasz opcji gastronomicznych?\",\"browse_restaurants\":\"Przeglądaj restauracje\",\"passwords_not_match\":\"Hasła nie są zgodne\",\"password_min_length\":\"Hasło musi mieć co najmniej 6 znaków\"},\"owner_dashboard\":{\"header\":\"Ustawienia\",\"subheader\":\"Zarządzaj swoimi restauracjami - statystyki\",\"logout\":\"Wyloguj się\",\"total_views\":\"Łączne wyświetlenia\",\"reviews\":\"Recenzje\",\"average_rating\":\"Średnia ocena\",\"active_listings\":\"Aktywne restauracje\",\"restaurants_header\":\"Twoje restauracje\",\"add_restaurant_btn\":\"Dodaj restaurację\",\"premium_plan_header\":\"Plan Premium\",\"premium_plan_about\":\"Odblokuj zaawansowane analizy, priorytetowe wsparcie i funkcje promocyjne\",\"premium_plan_unlock\":\"Odblokuj\",\"need_help\":\"Potrzebujesz pomocy?\",\"need_help_about\":\"Zobacz naszą dokumentację lub skontaktuj się z jednym z naszych pracowników\",\"need_help_button\":\"Odwiedź Centrum Pomocy\",\"subscription_header\":\"Twój plan subskrypcji\",\"subscription_plan\":\"Plan\",\"subscription_plan_starter\":\"Plan Starter\",\"subscription_plan_period\":\"Okres rozliczeniowy\",\"subscription_plan_period_monthly\":\"Miesięczny\",\"subscription_plan_amount\":\"Kwota\",\"subscription_plan_price\":\"49 PLN/miesiąc\",\"manage_subscription\":\"Zarządzaj subskrypcją\"},\"restaurants_list\":{\"edit\":\"Edytuj\",\"add_edit_menu\":\"Dodaj / Edytuj menu\",\"delete\":\"Usuń\",\"confirm_delete\":\"Czy na pewno chcesz usunąć tę restaurację?\",\"deleted_success\":\"Restauracja została usunięta\",\"active\":\"aktywny\",\"inactive\":\"nieaktywny\"},\"restaurant_form\":{\"name_placeholder\":\"Nazwa restauracji\",\"city_placeholder\":\"Miasto\",\"cuisine_type\":\"Rodzaj kuchni\",\"description_placeholder\":\"Krótki opis restauracji\",\"phone_placeholder\":\"Numer telefonu\",\"image_url_placeholder\":\"URL zdjęcia\",\"delivery\":\"Dostawa\",\"saving\":\"Zapisywanie...\",\"save_changes\":\"Zapisz zmiany\",\"add_restaurant\":\"Dodaj restaurację\",\"saved_success\":\"Zapisano zmiany\"},\"restaurant_card\":{\"price_range\":\"Przedział cenowy\"},\"restaurant_detail\":{\"loading\":\"Ładowanie danych lokalu…\",\"not_found\":\"Nie znaleziono lokalu\",\"reviews\":\"recenzje\",\"contact_info\":\"Dane kontaktowe\",\"address\":\"Adres\",\"phone\":\"Telefon\",\"opening_hours\":\"Godziny otwarcia\",\"website\":\"Strona internetowa\",\"reserve_table\":\"Zarezerwuj stolik\",\"our_menu\":\"Nasze Menu\",\"menu_not_available\":\"Menu jest obecnie niedostępne.\",\"location\":\"Lokalizacja\",\"rate_us\":\"Oceń nas\",\"rating\":\"Ocena\",\"your_review\":\"Twoja opinia\",\"describe_experience\":\"Opisz swoje doświadczenia...\",\"add_review\":\"Dodaj recenzję\",\"recent_reviews\":\"Ostatnie oceny\"},\"edit_restaurant_modal\":{\"title\":\"Edytuj restaurację\",\"name_label\":\"Nazwa restauracji\",\"description_label\":\"Opis\",\"description_placeholder\":\"Opowiedz klientom o swojej restauracji\",\"phone_label\":\"Telefon\",\"address_label\":\"Adres\",\"website_label\":\"Strona internetowa\",\"save_changes\":\"Zapisz zmiany\",\"cancel\":\"Anuluj\"},\"menu\":{\"search_placeholder\":\"Szukaj pozycji w menu...\",\"no_items_found\":\"Nie znaleziono pozycji menu pasujących do\"},\"subscription_page\":{\"title\":\"Subskrypcja i płatności\",\"manage_plan\":\"Zarządzaj planem i metodami płatności\",\"current_plan\":\"Aktualny plan\",\"current_plan_free\":\"Aktualny plan: Darmowy\",\"upgrade_message\":\"Aktualnie korzystasz z planu darmowego. Ulepsz, aby odblokować więcej funkcji.\",\"upgrade_now\":\"Ulepsz teraz\",\"available_plans\":\"Dostępne plany\",\"plan_free\":\"Darmowy\",\"plan_basic\":\"Podstawowy\",\"plan_premium\":\"Premium\",\"forever\":\"Na zawsze\",\"per_month\":\"miesięcznie\",\"perfect_for_starting\":\"Idealny na start\",\"for_growing\":\"Dla rozwijających się restauracji\",\"for_established\":\"Dla ugruntowanych firm\",\"upgrade_to\":\"Ulepsz do\",\"billing_history\":\"Historia płatności\",\"date\":\"Data\",\"amount\":\"Kwota\",\"status\":\"Status\",\"invoice\":\"Faktura\",\"download\":\"Pobierz\",\"free_plan\":\"Plan darmowy\",\"payment_methods\":\"Metody płatności\",\"add_payment_method\":\"Dodaj metodę płatności\",\"expires\":\"Wygasa\",\"edit\":\"Edytuj\",\"loading\":\"Ładowanie...\",\"logout\":\"Wyloguj się\",\"dashboard\":\"Panel\",\"subscription\":\"Subskrypcja\",\"help_center\":\"Centrum pomocy\",\"features\":{\"1_restaurant\":\"1 restauracja\",\"basic_menu\":\"Podstawowe menu\",\"5_reviews_limit\":\"Limit 5 recenzji\",\"limited_analytics\":\"Ograniczone analizy\",\"up_to_3_restaurants\":\"Do 3 restauracji\",\"advanced_menu\":\"Zaawansowane menu\",\"unlimited_reviews\":\"Nieograniczone recenzje\",\"basic_analytics\":\"Podstawowe analizy\",\"email_support\":\"Wsparcie email\",\"unlimited_restaurants\":\"Nieograniczone restauracje\",\"advanced_menu_images\":\"Zaawansowane menu ze zdjęciami\",\"advanced_analytics\":\"Zaawansowane analizy\",\"priority_support\":\"Priorytetowe wsparcie\",\"promotions_deals\":\"Promocje i oferty\"}},\"help_center_page\":{\"title\":\"Centrum pomocy\",\"subtitle\":\"Znajdź odpowiedzi i skontaktuj się z naszym zespołem wsparcia\",\"faq_title\":\"Najczęściej zadawane pytania\",\"search_faq\":\"Szukaj w FAQ...\",\"no_results\":\"Brak wyników dla\",\"quick_support\":\"Szybkie wsparcie\",\"email_support\":\"Wsparcie email\",\"phone_support\":\"Wsparcie telefoniczne\",\"resources\":\"Zasoby\",\"getting_started\":\"Przewodnik rozpoczęcia\",\"video_tutorials\":\"Samouczki wideo\",\"api_documentation\":\"Dokumentacja API\",\"community_forum\":\"Forum społeczności\",\"still_need_help\":\"Nadal potrzebujesz pomocy?\",\"form_success\":\"Dziękujemy za wiadomość! Nasz zespół wsparcia odpowie w ciągu 24 godzin.\",\"full_name\":\"Imię i nazwisko\",\"your_name\":\"Twoje imię\",\"email\":\"Email\",\"your_email\":\"twoj@email.com\",\"subject\":\"Temat\",\"what_about\":\"O co chodzi?\",\"message\":\"Wiadomość\",\"describe_issue\":\"Opisz swój problem lub pytanie...\",\"send_message\":\"Wyślij wiadomość\",\"loading\":\"Ładowanie...\",\"logout\":\"Wyloguj się\",\"dashboard\":\"Panel\",\"subscription\":\"Subskrypcja\",\"help_center\":\"Centrum pomocy\",\"faq\":{\"q1\":\"Jak dodać moją restaurację?\",\"a1\":\"Zarejestruj się jako właściciel, a będziesz mógł dodać szczegóły restauracji, w tym nazwę, opis, adres i rodzaj kuchni. Po utworzeniu profilu restauracji możesz dodać zdjęcia i menu.\",\"q2\":\"Jak zarządzać menu?\",\"a2\":\"Przejdź do edytora menu restauracji z panelu. Możesz tworzyć kategorie (Przystawki, Dania główne itp.), dodawać pozycje z opisami i cenami oraz edytować lub usuwać pozycje w dowolnym momencie.\",\"q3\":\"Jakie są różnice między planami?\",\"a3\":\"Plan darmowy obejmuje 1 restaurację z podstawowymi funkcjami. Plan podstawowy (29 PLN/miesiąc) pozwala na maksymalnie 3 restauracje i zaawansowane analizy. Plan premium (99 PLN/miesiąc) oferuje nieograniczone restauracje z pełnymi funkcjami i priorytetowym wsparciem.\",\"q4\":\"Jak odpowiadać na recenzje?\",\"a4\":\"Możesz odpowiadać na recenzje klientów bezpośrednio z panelu. Angażuj się w opinie, aby budować zaufanie klientów i poprawiać swój serwis.\",\"q5\":\"Czy mogę mieć wiele restauracji?\",\"a5\":\"W planie darmowym możesz zarządzać 1 restauracją. Ulepsz do planu podstawowego (3 restauracje) lub premium (nieograniczone restauracje), aby rozszerzyć portfolio.\",\"q6\":\"Jak przetwarza się płatności?\",\"a6\":\"Płatności za subskrypcje są bezpiecznie przetwarzane przez Stripe. Możesz dodać lub zaktualizować metodę płatności na stronie Subskrypcja i płatności w dowolnym momencie.\",\"q7\":\"Co się stanie, jeśli anuluję subskrypcję?\",\"a7\":\"Możesz anulować w dowolnym momencie. Profil restauracji przejdzie do trybu tylko do odczytu, jeśli zmienisz plan z płatnego na darmowy. Twoje dane są zawsze bezpieczne.\",\"q8\":\"Jak są rankowane restauracje?\",\"a8\":\"Restauracje są rankowane na podstawie recenzji klientów, ocen i zaangażowania. Jakościowe recenzje i terminowe odpowiedzi pomagają poprawić widoczność.\"}},\"help_page\":{\"title\":\"Pomoc\",\"welcome\":\"Witamy w sekcji pomocy FoodCatalog! Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania oraz przewodniki dotyczące korzystania z naszej aplikacji.\",\"faq_title\":\"Najczęściej zadawane pytania (FAQ)\",\"q1\":\"Jak dodać nową restaurację?\",\"a1\":\"Aby dodać nową restaurację, przejdź do panelu właściciela i kliknij przycisk \\\"Dodaj restaurację\\\". Wypełnij wymagane informacje i zapisz zmiany.\",\"q2\":\"Jak zarządzać menu restauracji?\",\"a2\":\"W panelu właściciela wybierz restaurację, a następnie przejdź do sekcji \\\"Menu\\\". Możesz dodawać, edytować lub usuwać kategorie i pozycje menu.\",\"q3\":\"Jak zmienić informacje o restauracji?\",\"a3\":\"Aby zmienić informacje o restauracji, przejdź do panelu właściciela, wybierz restaurację i kliknij \\\"Edytuj\\\". Wprowadź zmiany i zapisz je.\",\"contact_title\":\"Kontakt\",\"contact_message\":\"Jeśli potrzebujesz dalszej pomocy, skontaktuj się z naszym zespołem wsparcia pod adresem\"},\"common\":{\"loading\":\"Ładowanie...\",\"error\":\"Błąd\",\"success\":\"Sukces\",\"cancel\":\"Anuluj\",\"save\":\"Zapisz\",\"delete\":\"Usuń\",\"edit\":\"Edytuj\",\"close\":\"Zamknij\",\"confirm\":\"Potwierdź\",\"back\":\"Wstecz\",\"next\":\"Dalej\",\"yes\":\"Tak\",\"no\":\"Nie\"}}"));}),
"[project]/lib/i18n/locales/en/common.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"app_name\":\"LokalGastro\",\"all_rights_reserved\":\"All rights reserved.\",\"nav\":{\"home\":\"Home\",\"browse\":\"Browse\",\"discover\":\"Discover\",\"about\":\"About\",\"login\":\"Login\",\"sign_in\":\"Sign In\"},\"footer\":{\"login_as_owner\":\"Login as owner\"},\"main_page\":{\"header\":\"Local Gastronomy Catalog\",\"subheader\":\"Find the best restaurants, bars, and cafes in your city. Support local gastronomy and discover hidden gems in your area.\",\"browse_restaurants\":\"Browse restaurants\",\"add_restaurant\":\"Add restaurant\"},\"discover_page\":{\"header\":\"Discover restaurants\",\"subheader\":\"Browse restaurants added by our users\",\"no_restaurants\":\"No restaurants available. Be the first to add yours!\",\"search_placeholder\":\"Search restaurants...\",\"loading\":\"Loading restaurants\",\"no_results\":\"No restaurants found\",\"try_adjusting\":\"Try adjusting your search or filters\"},\"about_page\":{\"header\":\"About us\"},\"login_page\":{\"header\":\"Owner - Login\",\"owner_portal\":\"Owner Portal\",\"sign_in_to_manage\":\"Sign in to manage your restaurant\",\"email_label\":\"Email Address\",\"email_placeholder\":\"Enter your email address\",\"password_label\":\"Password\",\"password_placeholder\":\"Enter your password\",\"login_button\":\"Login as owner\",\"signing_in\":\"Signing in...\",\"sign_in\":\"Sign In\",\"new_to_app\":\"New to LokalGastro?\",\"create_account\":\"Create Owner Account\",\"looking_for_dining\":\"Looking for dining options?\",\"browse_restaurants\":\"Browse restaurants\",\"email_required\":\"Email is required\",\"email_min_length\":\"Email should have at least 6 characters\",\"password_required\":\"Password is required\",\"password_min_length\":\"Password should have at least 10 characters\"},\"register_page\":{\"header\":\"Become an owner\",\"subheader\":\"Register your restaurant and start managing it today\",\"name_label\":\"Full name\",\"name_placeholder\":\"Enter your full name\",\"company_label\":\"Company name\",\"company_placeholder\":\"Enter your company name\",\"email_label\":\"Email address\",\"email_placeholder\":\"Enter your email address\",\"password_label\":\"Password\",\"password_placeholder\":\"Enter your password\",\"confirm_password_label\":\"Confirm password\",\"confirm_password_placeholder\":\"Re-enter your password\",\"create_account_button\":\"Register as owner\",\"creating_account\":\"Creating account...\",\"already_have_account\":\"Already have an account?\",\"login_here\":\"Login here\",\"looking_for_dining\":\"Looking for dining options?\",\"browse_restaurants\":\"Browse restaurants\",\"passwords_not_match\":\"Passwords do not match\",\"password_min_length\":\"Password must be at least 6 characters\"},\"owner_dashboard\":{\"header\":\"Settings\",\"subheader\":\"Manage your restaurants - statistics\",\"logout\":\"Logout\",\"total_views\":\"Total Views\",\"reviews\":\"Reviews\",\"average_rating\":\"Average Rating\",\"active_listings\":\"Active Listings\",\"restaurants_header\":\"Your restaurants\",\"add_restaurant_btn\":\"Add restaurant\",\"premium_plan_header\":\"Premium Plan\",\"premium_plan_about\":\"Unlock advanced analytics, priority support and promotional features\",\"premium_plan_unlock\":\"Unlock\",\"need_help\":\"Need help?\",\"need_help_about\":\"Check our documentation or contact one of our staff members\",\"need_help_button\":\"Visit Help Center\",\"subscription_header\":\"Your subscription plan\",\"subscription_plan\":\"Plan\",\"subscription_plan_starter\":\"Starter Plan\",\"subscription_plan_period\":\"Billing period\",\"subscription_plan_period_monthly\":\"Monthly\",\"subscription_plan_amount\":\"Amount\",\"subscription_plan_price\":\"49 PLN/month\",\"manage_subscription\":\"Manage subscription\"},\"restaurants_list\":{\"edit\":\"Edit\",\"add_edit_menu\":\"Add / Edit menu\",\"delete\":\"Delete\",\"confirm_delete\":\"Are you sure you want to delete this restaurant?\",\"deleted_success\":\"Restaurant deleted successfully\",\"active\":\"active\",\"inactive\":\"inactive\"},\"restaurant_form\":{\"name_placeholder\":\"Restaurant name\",\"city_placeholder\":\"City\",\"cuisine_type\":\"Cuisine type\",\"description_placeholder\":\"Short restaurant description\",\"phone_placeholder\":\"Phone number\",\"image_url_placeholder\":\"Image URL\",\"delivery\":\"Delivery\",\"saving\":\"Saving...\",\"save_changes\":\"Save changes\",\"add_restaurant\":\"Add restaurant\",\"saved_success\":\"Changes saved\"},\"restaurant_card\":{\"price_range\":\"Price range\"},\"restaurant_detail\":{\"loading\":\"Loading restaurant data…\",\"not_found\":\"Restaurant not found\",\"reviews\":\"reviews\",\"contact_info\":\"Contact information\",\"address\":\"Address\",\"phone\":\"Phone\",\"opening_hours\":\"Opening hours\",\"website\":\"Website\",\"reserve_table\":\"Reserve a table\",\"our_menu\":\"Our Menu\",\"menu_not_available\":\"Menu is not available at the moment.\",\"location\":\"Location\",\"rate_us\":\"Rate us\",\"rating\":\"Rating\",\"your_review\":\"Your review\",\"describe_experience\":\"Describe your experience...\",\"add_review\":\"Add review\",\"recent_reviews\":\"Recent reviews\"},\"edit_restaurant_modal\":{\"title\":\"Edit Restaurant\",\"name_label\":\"Restaurant Name\",\"description_label\":\"Description\",\"description_placeholder\":\"Tell customers about your restaurant\",\"phone_label\":\"Phone\",\"address_label\":\"Address\",\"website_label\":\"Website\",\"save_changes\":\"Save Changes\",\"cancel\":\"Cancel\"},\"menu\":{\"search_placeholder\":\"Search menu items...\",\"no_items_found\":\"No menu items found matching\"},\"subscription_page\":{\"title\":\"Subscription & Billing\",\"manage_plan\":\"Manage your plan and payment methods\",\"current_plan\":\"Current Plan\",\"current_plan_free\":\"Current Plan: Free\",\"upgrade_message\":\"You are currently on the Free plan. Upgrade to unlock more features.\",\"upgrade_now\":\"Upgrade Now\",\"available_plans\":\"Available Plans\",\"plan_free\":\"Free\",\"plan_basic\":\"Basic\",\"plan_premium\":\"Premium\",\"forever\":\"Forever\",\"per_month\":\"per month\",\"perfect_for_starting\":\"Perfect for getting started\",\"for_growing\":\"For growing restaurants\",\"for_established\":\"For established businesses\",\"upgrade_to\":\"Upgrade to\",\"billing_history\":\"Billing History\",\"date\":\"Date\",\"amount\":\"Amount\",\"status\":\"Status\",\"invoice\":\"Invoice\",\"download\":\"Download\",\"free_plan\":\"Free Plan\",\"payment_methods\":\"Payment Methods\",\"add_payment_method\":\"Add Payment Method\",\"expires\":\"Expires\",\"edit\":\"Edit\",\"loading\":\"Loading...\",\"logout\":\"Logout\",\"dashboard\":\"Dashboard\",\"subscription\":\"Subscription\",\"help_center\":\"Help Center\",\"features\":{\"1_restaurant\":\"1 restaurant\",\"basic_menu\":\"Basic menu\",\"5_reviews_limit\":\"5 reviews limit\",\"limited_analytics\":\"Limited analytics\",\"up_to_3_restaurants\":\"Up to 3 restaurants\",\"advanced_menu\":\"Advanced menu\",\"unlimited_reviews\":\"Unlimited reviews\",\"basic_analytics\":\"Basic analytics\",\"email_support\":\"Email support\",\"unlimited_restaurants\":\"Unlimited restaurants\",\"advanced_menu_images\":\"Advanced menu with images\",\"advanced_analytics\":\"Advanced analytics\",\"priority_support\":\"Priority support\",\"promotions_deals\":\"Promotions & deals\"}},\"help_center_page\":{\"title\":\"Help Center\",\"subtitle\":\"Find answers and get in touch with our support team\",\"faq_title\":\"Frequently Asked Questions\",\"search_faq\":\"Search FAQ...\",\"no_results\":\"No results found for\",\"quick_support\":\"Quick Support\",\"email_support\":\"Email Support\",\"phone_support\":\"Phone Support\",\"resources\":\"Resources\",\"getting_started\":\"Getting Started Guide\",\"video_tutorials\":\"Video Tutorials\",\"api_documentation\":\"API Documentation\",\"community_forum\":\"Community Forum\",\"still_need_help\":\"Still need help?\",\"form_success\":\"Thank you for your message! Our support team will get back to you within 24 hours.\",\"full_name\":\"Full Name\",\"your_name\":\"Your name\",\"email\":\"Email\",\"your_email\":\"your@email.com\",\"subject\":\"Subject\",\"what_about\":\"What is this about?\",\"message\":\"Message\",\"describe_issue\":\"Describe your issue or question...\",\"send_message\":\"Send Message\",\"loading\":\"Loading...\",\"logout\":\"Logout\",\"dashboard\":\"Dashboard\",\"subscription\":\"Subscription\",\"help_center\":\"Help Center\",\"faq\":{\"q1\":\"How do I add my restaurant?\",\"a1\":\"Sign up as an owner, and you'll be able to add your restaurant details including name, description, address, and cuisine type. You can add photos and a menu after creating your restaurant profile.\",\"q2\":\"How can I manage my menu?\",\"a2\":\"Go to your restaurant's menu editor from the dashboard. You can create categories (Appetizers, Main Courses, etc.), add items with descriptions and prices, and edit or delete items anytime.\",\"q3\":\"What are the differences between plans?\",\"a3\":\"The Free plan includes 1 restaurant with basic features. Basic plan (29 PLN/month) allows up to 3 restaurants and advanced analytics. Premium plan (99 PLN/month) offers unlimited restaurants with full features and priority support.\",\"q4\":\"How do I respond to reviews?\",\"a4\":\"You can respond to customer reviews directly from your dashboard. Engage with feedback to build trust with your customers and improve your service.\",\"q5\":\"Can I have multiple restaurants?\",\"a5\":\"On the Free plan, you can manage 1 restaurant. Upgrade to Basic (3 restaurants) or Premium (unlimited restaurants) to expand your portfolio.\",\"q6\":\"How do I process payments?\",\"a6\":\"Subscription payments are processed securely through Stripe. You can add or update your payment method in the Subscription & Billing page anytime.\",\"q7\":\"What happens if I cancel my subscription?\",\"a7\":\"You can cancel anytime. Your restaurant profile will move to view-only mode if you downgrade from paid to free plan. Your data is always safe.\",\"q8\":\"How are restaurants ranked?\",\"a8\":\"Restaurants are ranked based on customer reviews, ratings, and engagement. Quality reviews and timely responses help improve your visibility.\"}},\"help_page\":{\"title\":\"Help\",\"welcome\":\"Welcome to the FoodCatalog help section! Here you'll find answers to frequently asked questions and guides on how to use our application.\",\"faq_title\":\"Frequently Asked Questions (FAQ)\",\"q1\":\"How do I add a new restaurant?\",\"a1\":\"To add a new restaurant, go to the owner dashboard and click the \\\"Add restaurant\\\" button. Fill in the required information and save your changes.\",\"q2\":\"How do I manage the restaurant menu?\",\"a2\":\"In the owner dashboard, select your restaurant, then go to the \\\"Menu\\\" section. You can add, edit, or delete categories and menu items.\",\"q3\":\"How do I change restaurant information?\",\"a3\":\"To change restaurant information, go to the owner dashboard, select your restaurant and click \\\"Edit\\\". Make your changes and save them.\",\"contact_title\":\"Contact\",\"contact_message\":\"If you need further assistance, please contact our support team at\"},\"common\":{\"loading\":\"Loading...\",\"error\":\"Error\",\"success\":\"Success\",\"cancel\":\"Cancel\",\"save\":\"Save\",\"delete\":\"Delete\",\"edit\":\"Edit\",\"close\":\"Close\",\"confirm\":\"Confirm\",\"back\":\"Back\",\"next\":\"Next\",\"yes\":\"Yes\",\"no\":\"No\"}}"));}),
"[project]/lib/i18n/i18n.client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$locales$2f$pl$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/i18n/locales/pl/common.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$locales$2f$en$2f$common$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/i18n/locales/en/common.json (json)");
"use client";
;
;
;
;
;
const resources = {
    pl: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$locales$2f$pl$2f$common$2e$json__$28$json$29$__["default"]
    },
    en: {
        common: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$locales$2f$en$2f$common$2e$json__$28$json$29$__["default"]
    }
};
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isInitialized) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initReactI18next"]).init({
        resources,
        fallbackLng: "pl",
        defaultNS: "common",
        ns: [
            "common"
        ],
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: [
                "localStorage",
                "navigator"
            ],
            caches: [
                "localStorage"
            ]
        }
    });
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/i18n/i18nProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$I18nextProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/I18nextProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$i18n$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/i18n.client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const I18nProvider = ({ children })=>{
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "I18nProvider.useEffect": ()=>{
            setIsClient(true);
        }
    }["I18nProvider.useEffect"], []);
    // During SSR and initial hydration, render null to avoid mismatch
    // This ensures translations only render after client-side i18n is ready
    if (!isClient) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$I18nextProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I18nextProvider"], {
        i18n: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$i18n$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/i18n/i18nProvider.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(I18nProvider, "k460N28PNzD7zo1YW47Q9UigQis=");
_c = I18nProvider;
var _c;
__turbopack_context__.k.register(_c, "I18nProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_6bf0c297._.js.map