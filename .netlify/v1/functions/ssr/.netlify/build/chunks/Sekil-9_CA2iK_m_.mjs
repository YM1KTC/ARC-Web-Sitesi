const Sekil9 = new Proxy({"src":"/_astro/Sekil-9.ZUtOvQgS.jpeg","width":738,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-9.jpeg";
							}
							
							return target[name];
						}
					});

export { Sekil9 as default };
