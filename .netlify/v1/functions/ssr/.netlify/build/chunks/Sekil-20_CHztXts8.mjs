const Sekil20 = new Proxy({"src":"/_astro/Sekil-20.BDmlX4Sd.jpeg","width":738,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-20.jpeg";
							}
							
							return target[name];
						}
					});

export { Sekil20 as default };
