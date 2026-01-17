const Sekil4 = new Proxy({"src":"/_astro/Sekil-4.Cmfb3b4A.jpeg","width":738,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-4.jpeg";
							}
							
							return target[name];
						}
					});

export { Sekil4 as default };
