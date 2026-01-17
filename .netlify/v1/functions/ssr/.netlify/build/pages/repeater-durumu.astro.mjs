import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BfDhyAjM.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_CDwIBOQs.mjs';
import { $ as $$Hero } from '../chunks/Hero_BhRdE1X0.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

function DMRDashboard() {
  const [repeaters, setRepeaters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("/api/repeaters.json").then((r) => {
      if (!r.ok) throw new Error("Failed to fetch");
      return r.json();
    }).then((data) => {
      setRepeaters(data);
      setLoading(false);
    }).catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, []);
  const formatLastSeen = (dateString) => {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 6e4);
    if (diffMins < 1) return "Şimdi";
    if (diffMins < 60) return `${diffMins} dakika önce`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} saat önce`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} gün önce`;
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center p-8", children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" }) });
  }
  if (error) {
    return /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-red-800", children: [
        "Hata: ",
        error
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.location.reload(),
          className: "mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",
          children: "Yeniden Dene"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: repeaters.map((r) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: `p-4 rounded-lg border-2 transition-all ${r.status === "online" ? "bg-green-50 border-green-200 hover:shadow-md" : "bg-red-50 border-red-200"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: r.name }),
          /* @__PURE__ */ jsx("span", { className: `px-2 py-1 text-xs rounded-full ${r.status === "online" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`, children: r.status === "online" ? "Çevrimiçi" : "Çevrimdışı" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-700", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Frekans:" }),
          " ",
          r.frequency
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-700", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Offset:" }),
          " ",
          r.offset
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-700", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "CTCSS:" }),
          " ",
          r.tone,
          " Hz"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-700", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Color Code:" }),
          " ",
          r.colorCode
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 mt-2", children: [
          "Son duyulum: ",
          formatLastSeen(r.lastheard)
        ] })
      ]
    },
    r.id
  )) });
}

function MemberSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setSearched(true);
    try {
      const res = await fetch(`/api/dmr-contacts.json`);
      const data = await res.json();
      const filtered = data.filter(
        (member) => member.callsign.toLowerCase().includes(query.toLowerCase()) || member.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } catch (err) {
      console.error("Search failed:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: query,
          onChange: (e) => setQuery(e.target.value),
          onKeyPress: handleKeyPress,
          placeholder: "Çağrı işareti veya isim ara...",
          className: "flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleSearch,
          disabled: loading || !query.trim(),
          className: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",
          children: loading ? "Aranıyor..." : "Ara"
        }
      )
    ] }),
    searched && results.length === 0 && !loading && /* @__PURE__ */ jsx("div", { className: "mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-yellow-800", children: "Sonuç bulunamadı. Lütfen farklı bir arama deneyin." }) }),
    results.length > 0 && /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2", children: results.map((member) => /* @__PURE__ */ jsx(
      "li",
      {
        className: "p-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow",
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg text-blue-600", children: member.callsign }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: member.name }),
            member.location && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: member.location })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "📻" })
        ] })
      },
      member.id
    )) })
  ] });
}

const $$RepeaterDurumu = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "DMR R\xF6le Durumu - ARC"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "title": "\u{1F4E1} DMR R\xF6le Durumu", "subtitle": "DMR r\xF6le sistemlerimizin anl\u0131k durumunu buradan takip edebilirsiniz." })}  ${maybeRenderHead()}<section class="mx-auto max-w-4xl px-4 py-8"> <h2 class="text-2xl font-bold mb-4">🔍 Üye Ara</h2> ${renderComponent($$result2, "MemberSearch", MemberSearch, { "client:load": true, "client:component-hydration": "load", "client:component-path": "~/react/MemberSearch", "client:component-export": "default" })} </section>  <section class="mx-auto max-w-6xl px-4 py-8"> <h2 class="text-2xl font-bold mb-4">📻 Röle Durumları</h2> ${renderComponent($$result2, "DMRDashboard", DMRDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "~/react/DMRDashboard", "client:component-export": "default" })} </section> ` })}`;
}, "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/repeater-durumu.astro", void 0);

const $$file = "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/pages/repeater-durumu.astro";
const $$url = "/repeater-durumu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RepeaterDurumu,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
