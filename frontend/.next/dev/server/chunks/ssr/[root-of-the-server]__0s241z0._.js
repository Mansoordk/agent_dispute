module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Disputes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$components$2f$Nav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/components/Nav.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$components$2f$StatusBadge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/components/StatusBadge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$lib$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/lib/contract.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Disputes() {
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Loading agreements…");
    async function load() {
        try {
            const n = Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$lib$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toBigIntString"])(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$lib$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"])("get_dispute_count")));
            const r = [];
            for(let i = 0; i < n; i++){
                try {
                    r.push(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$lib$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readContract"])("get_dispute", [
                        i
                    ]));
                } catch  {}
            }
            setItems(r.reverse());
            setMsg(r.length ? "" : "No agreements found yet.");
        } catch (e) {
            setMsg(e?.message || "Could not load agreements.");
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        load();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$components$2f$Nav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                lineNumber: 4,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "badge text-cyan-300",
                                        children: "AGREEMENTS"
                                    }, void 0, false, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                        lineNumber: 4,
                                        columnNumber: 93
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-4 text-4xl font-black",
                                        children: "Dispute explorer"
                                    }, void 0, false, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                        lineNumber: 4,
                                        columnNumber: 148
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                lineNumber: 4,
                                columnNumber: 88
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-dark",
                                onClick: load,
                                children: "Refresh"
                            }, void 0, false, {
                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                lineNumber: 4,
                                columnNumber: 216
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                        lineNumber: 4,
                        columnNumber: 40
                    }, this),
                    msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-8 muted",
                        children: msg
                    }, void 0, false, {
                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                        lineNumber: 4,
                        columnNumber: 292
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid-auto",
                        children: items.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/disputes/${String(d.id)}`,
                                className: "card p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-slate-500",
                                                children: [
                                                    "#",
                                                    String(d.id)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                                lineNumber: 4,
                                                columnNumber: 493
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$components$2f$StatusBadge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                status: d.status
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                                lineNumber: 4,
                                                columnNumber: 556
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                        lineNumber: 4,
                                        columnNumber: 455
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-5 text-xl font-bold",
                                        children: d.title
                                    }, void 0, false, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                        lineNumber: 4,
                                        columnNumber: 594
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm muted",
                                        children: d.requirements
                                    }, void 0, false, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                        lineNumber: 4,
                                        columnNumber: 647
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "muted",
                                                children: "Escrow"
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                                lineNumber: 4,
                                                columnNumber: 752
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$lib$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatGen"])(d.amount)
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                                lineNumber: 4,
                                                columnNumber: 789
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                        lineNumber: 4,
                                        columnNumber: 701
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "muted",
                                                children: "Score"
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                                lineNumber: 4,
                                                columnNumber: 880
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    String(d.score),
                                                    " / 100"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                                lineNumber: 4,
                                                columnNumber: 916
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                        lineNumber: 4,
                                        columnNumber: 829
                                    }, this)
                                ]
                            }, String(d.id), true, {
                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                                lineNumber: 4,
                                columnNumber: 374
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                        lineNumber: 4,
                        columnNumber: 328
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
                lineNumber: 4,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/page.js",
        lineNumber: 4,
        columnNumber: 8
    }, this);
}
}),
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
"[project]/agendispute-frontend-studionet/frontend/components/StatusBadge.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function StatusBadge({ status }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "badge text-cyan-300",
        children: String(status || "UNKNOWN")
    }, void 0, false, {
        fileName: "[project]/agendispute-frontend-studionet/frontend/components/StatusBadge.js",
        lineNumber: 1,
        columnNumber: 54
    }, this);
}
}),
"[project]/agendispute-frontend-studionet/frontend/lib/contract.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHAIN",
    ()=>CHAIN,
    "CONTRACT",
    ()=>CONTRACT,
    "STUDIONET_CHAIN_HEX",
    ()=>STUDIONET_CHAIN_HEX,
    "STUDIONET_CHAIN_ID",
    ()=>STUDIONET_CHAIN_ID,
    "STUDIONET_EXPLORER",
    ()=>STUDIONET_EXPLORER,
    "STUDIONET_RPC",
    ()=>STUDIONET_RPC,
    "ensureStudioNet",
    ()=>ensureStudioNet,
    "formatGen",
    ()=>formatGen,
    "genToWei",
    ()=>genToWei,
    "readClient",
    ()=>readClient,
    "readContract",
    ()=>readContract,
    "toBigIntString",
    ()=>toBigIntString,
    "writeClient",
    ()=>writeClient,
    "writeContract",
    ()=>writeContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/genlayer-js/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chains$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/genlayer-js/dist/chains/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$XCQTIUTU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/genlayer-js/dist/chunk-XCQTIUTU.js [app-ssr] (ecmascript)");
;
;
const CONTRACT = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS?.trim() || "0xd21c82603a64Bd42ff37FB04cD004699c6A4BbeA";
const CHAIN = __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$XCQTIUTU$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studionet"];
const STUDIONET_CHAIN_ID = 61999;
const STUDIONET_CHAIN_HEX = "0xf22f";
const STUDIONET_RPC = "https://studio.genlayer.com/api";
const STUDIONET_EXPLORER = "https://explorer-studio.genlayer.com";
async function ensureStudioNet() {
    if (!window.ethereum) throw new Error("Browser wallet provider not found.");
    const current = await window.ethereum.request({
        method: "eth_chainId"
    });
    if (String(current).toLowerCase() === STUDIONET_CHAIN_HEX) return;
    try {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    chainId: STUDIONET_CHAIN_HEX
                }
            ]
        });
    } catch (error) {
        if (error?.code !== 4902) throw error;
        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: STUDIONET_CHAIN_HEX,
                    chainName: "GenLayer Studionet",
                    nativeCurrency: {
                        name: "GEN",
                        symbol: "GEN",
                        decimals: 18
                    },
                    rpcUrls: [
                        STUDIONET_RPC
                    ],
                    blockExplorerUrls: [
                        STUDIONET_EXPLORER
                    ]
                }
            ]
        });
    }
}
function readClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
        chain: CHAIN
    });
}
async function writeClient(account) {
    if (!account) throw new Error("Connect your wallet first.");
    await ensureStudioNet();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
        chain: CHAIN,
        account,
        provider: window.ethereum
    });
}
async function readContract(functionName, args = []) {
    return readClient().readContract({
        address: CONTRACT,
        functionName,
        args
    });
}
async function writeContract(account, functionName, args = [], value) {
    const client = await writeClient(account);
    return client.writeContract({
        address: CONTRACT,
        functionName,
        args,
        ...value !== undefined ? {
            value
        } : {}
    });
}
function toBigIntString(v) {
    if (typeof v === "bigint") return v.toString();
    if (v && typeof v.toString === "function") return v.toString();
    return String(v ?? "0");
}
function formatGen(v) {
    try {
        const n = BigInt(toBigIntString(v));
        return `${n / 1000000000000000000n}.${(n % 1000000000000000000n).toString().padStart(18, "0").slice(0, 4)} GEN`;
    } catch  {
        return "0 GEN";
    }
}
function genToWei(v) {
    const s = String(v).trim();
    if (!/^\d+(\.\d+)?$/.test(s)) throw new Error("Enter a valid GEN amount.");
    const [w, f = ""] = s.split(".");
    return BigInt(w) * 1000000000000000000n + BigInt((f + "000000000000000000").slice(0, 18));
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0s241z0._.js.map