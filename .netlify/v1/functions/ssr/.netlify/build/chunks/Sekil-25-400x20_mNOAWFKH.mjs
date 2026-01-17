const Sekil25400x20 = new Proxy({"src":"/_astro/Sekil-25-400x20.DOuKrlGL.jpg","width":400,"height":20,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-25-400x20.jpg";
							}
							
							return target[name];
						}
					});

export { Sekil25400x20 as default };
