const Sekil81 = new Proxy({"src":"/_astro/Sekil-8-1.5uz6Kb84.jpg","width":1914,"height":1001,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-8-1.jpg";
							}
							
							return target[name];
						}
					});

export { Sekil81 as default };
