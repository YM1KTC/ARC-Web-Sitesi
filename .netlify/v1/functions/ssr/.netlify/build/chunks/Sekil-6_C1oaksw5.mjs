const Sekil6 = new Proxy({"src":"/_astro/Sekil-6.6Jrev4Lj.jpeg","width":921,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-6.jpeg";
							}
							
							return target[name];
						}
					});

export { Sekil6 as default };
