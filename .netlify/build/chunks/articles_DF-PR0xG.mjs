const articles = new Proxy({"src":"/_astro/articles.CJu7blqq.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/06/articles.png";
							}
							
							return target[name];
						}
					});

export { articles as default };
