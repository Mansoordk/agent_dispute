(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Detail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$components$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/components/Nav.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$components$2f$StatusBadge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/components/StatusBadge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$lib$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/lib/contract.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Detail() {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [d, setD] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [a, setA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sub, setSub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Loading…");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    async function connect() {
        if (!window.ethereum) throw new Error("Install MetaMask or another EVM wallet.");
        const x = await window.ethereum.request({
            method: "eth_requestAccounts"
        });
        setA(x?.[0] || "");
        return x?.[0] || "";
    }
    async function load() {
        try {
            const x = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$lib$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"])("get_dispute", [
                Number(id)
            ]);
            setD(x);
            setSub(x.submission_url || "");
            setMsg("");
        } catch (e) {
            setMsg(e?.message || "Could not load dispute.");
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Detail.useEffect": ()=>{
            if (id !== undefined) load();
        }
    }["Detail.useEffect"], [
        id
    ]);
    async function act(name, args = []) {
        try {
            setBusy(true);
            let acct = a;
            if (!acct) acct = await connect();
            setMsg(`Submitting ${name}…`);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$lib$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeContract"])(acct, name, args);
            await new Promise((r)=>setTimeout(r, 2500));
            await load();
            setMsg(`${name} submitted.`);
        } catch (e) {
            setMsg(e?.message || `${name} failed.`);
        } finally{
            setBusy(false);
        }
    }
    if (!d) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$components$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                lineNumber: 7,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "shell",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "muted",
                    children: msg
                }, void 0, false, {
                    fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                    lineNumber: 7,
                    columnNumber: 46
                }, this)
            }, void 0, false, {
                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                lineNumber: 7,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
        lineNumber: 7,
        columnNumber: 14
    }, this);
    const s = String(d.status);
    const deadlinePassed = d.deadline && Date.now() >= Date.parse(d.deadline);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$components$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                lineNumber: 9,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500",
                                        children: [
                                            "AGREEMENT #",
                                            String(d.id)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                        lineNumber: 9,
                                        columnNumber: 99
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-2 text-4xl font-black",
                                        children: d.title
                                    }, void 0, false, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                        lineNumber: 9,
                                        columnNumber: 166
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                lineNumber: 9,
                                columnNumber: 94
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$components$2f$StatusBadge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                status: s
                            }, void 0, false, {
                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                lineNumber: 9,
                                columnNumber: 227
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                        lineNumber: 9,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid lg:grid-cols-[1.4fr_.8fr] gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500",
                                                children: "REQUIREMENTS"
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 374
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 whitespace-pre-wrap leading-7",
                                                children: d.requirements
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 428
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                        lineNumber: 9,
                                        columnNumber: 348
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500",
                                                children: "EVIDENCE"
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 530
                                            }, this),
                                            d.submission_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "mt-3 block break-all text-cyan-300 underline",
                                                href: d.submission_url,
                                                target: "_blank",
                                                children: [
                                                    " ",
                                                    d.submission_url
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 598
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 muted",
                                                children: "No evidence submitted."
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 722
                                            }, this),
                                            s === "OPEN" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "field",
                                                        value: sub,
                                                        onChange: (e)=>setSub(e.target.value),
                                                        placeholder: "https://github.com/... or https://vercel.app/..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 810
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn btn-primary mt-3",
                                                        disabled: busy,
                                                        onClick: ()=>act("submit_dispute", [
                                                                Number(id),
                                                                sub.trim()
                                                            ]),
                                                        children: "Submit evidence"
                                                    }, void 0, false, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 948
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 788
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                        lineNumber: 9,
                                        columnNumber: 504
                                    }, this),
                                    d.verdict && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500",
                                                children: "GENLAYER ADJUDICATION"
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 1140
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 grid md:grid-cols-3 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-950 rounded-xl p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500",
                                                                children: "VERDICT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 1296
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-2xl font-black",
                                                                children: String(d.verdict)
                                                            }, void 0, false, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 1345
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 1251
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-950 rounded-xl p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500",
                                                                children: "SCORE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 1459
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-2xl font-black",
                                                                children: [
                                                                    String(d.score),
                                                                    " / 100"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 1506
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 1414
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-950 rounded-xl p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-500",
                                                                children: "STATUS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 1624
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-2xl font-black",
                                                                children: s
                                                            }, void 0, false, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 1672
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 1579
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 1203
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 bg-slate-950 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-500",
                                                        children: "EXPLANATION"
                                                    }, void 0, false, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 1781
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 leading-6 text-slate-300",
                                                        children: String(d.explanation || "")
                                                    }, void 0, false, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 1834
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 1731
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                        lineNumber: 9,
                                        columnNumber: 1114
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                lineNumber: 9,
                                columnNumber: 317
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500",
                                                children: "ESCROW"
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 1988
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-3xl font-black",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$lib$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGen"])(d.amount)
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 2036
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 space-y-3 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "muted",
                                                                children: "Creator"
                                                            }, void 0, false, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 2179
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: [
                                                                    String(d.creator).slice(0, 8),
                                                                    "…"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 2217
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 2141
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "muted",
                                                                children: "Provider"
                                                            }, void 0, false, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 2305
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: [
                                                                    String(d.provider).slice(0, 8),
                                                                    "…"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 2344
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 2267
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "muted",
                                                                children: "Deadline"
                                                            }, void 0, false, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 2433
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: String(d.deadline)
                                                            }, void 0, false, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 2472
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 2395
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 2101
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                        lineNumber: 9,
                                        columnNumber: 1962
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500",
                                                children: "ACTIONS"
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 2549
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 grid gap-3",
                                                children: [
                                                    s === "OPEN" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn btn-dark",
                                                        disabled: busy,
                                                        onClick: ()=>act("cancel_dispute", [
                                                                Number(id)
                                                            ]),
                                                        children: "Cancel & refund creator"
                                                    }, void 0, false, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 2644
                                                    }, this),
                                                    s === "OPEN" && deadlinePassed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn btn-dark",
                                                        disabled: busy,
                                                        onClick: ()=>act("expire_dispute", [
                                                                Number(id)
                                                            ]),
                                                        children: "Expire agreement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 2804
                                                    }, this),
                                                    s === "SUBMITTED" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn btn-cyan",
                                                        disabled: busy,
                                                        onClick: ()=>act("evaluate_submission", [
                                                                Number(id)
                                                            ]),
                                                        children: "Run GenLayer evaluation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 2946
                                                    }, this),
                                                    s === "PARTIAL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn btn-primary",
                                                        disabled: busy,
                                                        onClick: ()=>act("settle_partial", [
                                                                Number(id)
                                                            ]),
                                                        children: "Settle by score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 3098
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 2598
                                            }, this),
                                            msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-4 text-sm text-cyan-200 break-words",
                                                children: msg
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 3236
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                        lineNumber: 9,
                                        columnNumber: 2523
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-500",
                                                children: "SETTLEMENT"
                                            }, void 0, false, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 3332
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 space-y-3 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "muted",
                                                                children: "Provider payout"
                                                            }, void 0, false, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 3462
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$lib$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGen"])(d.provider_payout)
                                                            }, void 0, false, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 3508
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 3424
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "muted",
                                                                children: "Creator refund"
                                                            }, void 0, false, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 3595
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$lib$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatGen"])(d.creator_refund)
                                                            }, void 0, false, {
                                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                                lineNumber: 9,
                                                                columnNumber: 3640
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                        lineNumber: 9,
                                                        columnNumber: 3557
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                                lineNumber: 9,
                                                columnNumber: 3384
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                        lineNumber: 9,
                                        columnNumber: 3306
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                                lineNumber: 9,
                                columnNumber: 1933
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                        lineNumber: 9,
                        columnNumber: 258
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
                lineNumber: 9,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/agendispute-frontend-studionet/frontend/app/disputes/[id]/page.js",
        lineNumber: 9,
        columnNumber: 8
    }, this);
}
_s(Detail, "qeWA3LbpQZvwCd1CxOTBvhXfBIE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = Detail;
var _c;
__turbopack_context__.k.register(_c, "Detail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/agendispute-frontend-studionet/frontend/components/Nav.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Nav() {
    _s();
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            if (!window.ethereum) return;
            window.ethereum.request({
                method: "eth_accounts"
            }).then({
                "Nav.useEffect": (a)=>a?.[0] && setAccount(a[0])
            }["Nav.useEffect"]);
            const f = {
                "Nav.useEffect.f": (a)=>setAccount(a?.[0] || "")
            }["Nav.useEffect.f"];
            window.ethereum.on("accountsChanged", f);
            return ({
                "Nav.useEffect": ()=>window.ethereum.removeListener("accountsChanged", f)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "border-b border-slate-800 bg-black/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shell !py-4 flex items-center justify-between gap-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "font-black text-xl",
                    children: [
                        "Agent",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex gap-5 text-sm text-slate-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/create",
                            children: "Create agreement"
                        }, void 0, false, {
                            fileName: "[project]/agendispute-frontend-studionet/frontend/components/Nav.js",
                            lineNumber: 6,
                            columnNumber: 297
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(Nav, "/d5dAUKqP3Bh7veajmH+JpSiZ6U=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/agendispute-frontend-studionet/frontend/components/StatusBadge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function StatusBadge({ status }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "badge text-cyan-300",
        children: String(status || "UNKNOWN")
    }, void 0, false, {
        fileName: "[project]/agendispute-frontend-studionet/frontend/components/StatusBadge.js",
        lineNumber: 1,
        columnNumber: 54
    }, this);
}
_c = StatusBadge;
var _c;
__turbopack_context__.k.register(_c, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/agendispute-frontend-studionet/frontend/lib/contract.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/genlayer-js/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chains$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/genlayer-js/dist/chains/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$XCQTIUTU$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/agendispute-frontend-studionet/frontend/node_modules/genlayer-js/dist/chunk-XCQTIUTU.js [app-client] (ecmascript)");
;
;
const CONTRACT = __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONTRACT_ADDRESS?.trim() || "0xd21c82603a64Bd42ff37FB04cD004699c6A4BbeA";
const CHAIN = __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$chunk$2d$XCQTIUTU$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studionet"];
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
        chain: CHAIN
    });
}
async function writeClient(account) {
    if (!account) throw new Error("Connect your wallet first.");
    await ensureStudioNet();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$agendispute$2d$frontend$2d$studionet$2f$frontend$2f$node_modules$2f$genlayer$2d$js$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=agendispute-frontend-studionet_frontend_19njd3q._.js.map