const Sekil2 = new Proxy({"src":"/_astro/Sekil-2.P1sI1e9H.png","width":500,"height":234,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-2.png";
							}
							
							return target[name];
						}
					});

export { Sekil2 as default };
