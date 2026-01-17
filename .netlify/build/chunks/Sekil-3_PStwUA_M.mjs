const Sekil3 = new Proxy({"src":"/_astro/Sekil-3.N98I6qa7.jpeg","width":738,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-3.jpeg";
							}
							
							return target[name];
						}
					});

export { Sekil3 as default };
