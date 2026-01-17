const Sekil5 = new Proxy({"src":"/_astro/Sekil-5.N7ImLRvi.png","width":511,"height":259,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-5.png";
							}
							
							return target[name];
						}
					});

export { Sekil5 as default };
