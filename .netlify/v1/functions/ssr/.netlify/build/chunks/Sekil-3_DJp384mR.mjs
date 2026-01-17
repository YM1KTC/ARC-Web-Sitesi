const Sekil3 = new Proxy({"src":"/_astro/Sekil-3.FSpqGhqg.png","width":630,"height":295,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-3.png";
							}
							
							return target[name];
						}
					});

export { Sekil3 as default };
