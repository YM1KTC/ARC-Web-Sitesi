const Sekil24 = new Proxy({"src":"/_astro/Sekil-24.a469P2DG.jpg","width":587,"height":27,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-24.jpg";
							}
							
							return target[name];
						}
					});

export { Sekil24 as default };
