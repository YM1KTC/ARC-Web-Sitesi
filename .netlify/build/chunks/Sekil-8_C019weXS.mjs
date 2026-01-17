const Sekil8 = new Proxy({"src":"/_astro/Sekil-8.D0kcunUO.jpg","width":1914,"height":1001,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-8.jpg";
							}
							
							return target[name];
						}
					});

export { Sekil8 as default };
