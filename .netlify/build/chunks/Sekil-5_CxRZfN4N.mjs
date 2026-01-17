const Sekil5 = new Proxy({"src":"/_astro/Sekil-5.DnJtdocT.jpeg","width":921,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-5.jpeg";
							}
							
							return target[name];
						}
					});

export { Sekil5 as default };
