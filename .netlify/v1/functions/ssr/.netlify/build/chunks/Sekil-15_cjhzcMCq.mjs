const Sekil15 = new Proxy({"src":"/_astro/Sekil-15.CD5bRKxJ.jpg","width":949,"height":527,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-15.jpg";
							}
							
							return target[name];
						}
					});

export { Sekil15 as default };
