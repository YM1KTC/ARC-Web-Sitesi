const articles150x150 = new Proxy({"src":"/_astro/articles-150x150.DhyqmR0T.png","width":150,"height":150,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/06/articles-150x150.png";
							}
							
							return target[name];
						}
					});

export { articles150x150 as default };
