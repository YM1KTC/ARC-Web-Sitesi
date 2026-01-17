const Sekil2 = new Proxy({"src":"/_astro/Sekil-2.BUf3iQz8.jpeg","width":738,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-2.jpeg";
							}
							
							return target[name];
						}
					});

export { Sekil2 as default };
