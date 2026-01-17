const articles300x200 = new Proxy({"src":"/_astro/articles-300x200.DyxsC1VI.png","width":300,"height":200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/06/articles-300x200.png";
							}
							
							return target[name];
						}
					});

export { articles300x200 as default };
