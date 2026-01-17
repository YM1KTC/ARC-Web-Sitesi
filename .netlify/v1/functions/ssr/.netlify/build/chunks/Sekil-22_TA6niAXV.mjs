const Sekil22 = new Proxy({"src":"/_astro/Sekil-22.BJqdHU_Y.jpg","width":1900,"height":790,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-22.jpg";
							}
							
							return target[name];
						}
					});

export { Sekil22 as default };
