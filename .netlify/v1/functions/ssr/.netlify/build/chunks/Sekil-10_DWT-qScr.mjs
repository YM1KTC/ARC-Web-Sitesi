const Sekil10 = new Proxy({"src":"/_astro/Sekil-10.C4GCRHIP.jpeg","width":738,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-10.jpeg";
							}
							
							return target[name];
						}
					});

export { Sekil10 as default };
