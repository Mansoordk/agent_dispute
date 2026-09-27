module.exports = [
"[project]/agendispute-frontend-studionet/frontend/components/Nav.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Nav() {
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!window.ethereum) return;
        window.ethereum.request({
            method: "eth_accounts"
        }).then((a)=>a?.[0] && setAccount(a[0]));
        const f = (a)=>setAccount(a?.[0] || "");
        window.ethereum.on("accountsChanged", f);
        return ()=>window.ethereum.removeListener("accountsChanged", f);
    }, []);
    async function connect() {
        if (!window.ethereum) {
            alert("Install MetaMask or another EVM wallet.");
            return;
        }
        const a = await window.ethereum.request({
            method: "eth_requestAccounts"
        });
        setAccount(a?.[0] || "");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "border-b border-slate-800 bg-black/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shell !py-4 flex items-center justify-between gap-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "font-black text-xl",
                    children: [
                        "Agent",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-cyan-400",
                            children: "Dispute"
                        }, void 0, false, {
                            fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
                            lineNumber: 6,
                            columnNumber: 183
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
                    lineNumber: 6,
                    columnNumber: 132
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex gap-5 text-sm text-slate-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/create",
                            children: "Create agreement"
                        }, void 0, false, {
                            fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
                            lineNumber: 6,
                            columnNumber: 297
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/disputes",
                            children: "Disputes"
                        }, void 0, false, {
                            fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
                            lineNumber: 6,
                            columnNumber: 341
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
                    lineNumber: 6,
                    columnNumber: 236
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn btn-primary text-sm",
                    onClick: connect,
                    children: account ? `${account.slice(0, 6)}…${account.slice(-4)}` : "Connect wallet"
                }, void 0, false, {
                    fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
                    lineNumber: 6,
                    columnNumber: 385
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
            lineNumber: 6,
            columnNumber: 63
        }, this)
    }, void 0, false, {
        fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
        lineNumber: 6,
        columnNumber: 8
    }, this);
}
}),
];

//# sourceMappingURL=agendispute-frontend-studionet_frontend_components_Nav_194t75x.js.map