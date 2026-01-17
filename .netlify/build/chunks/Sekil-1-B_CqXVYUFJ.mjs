const Sekil1B = new Proxy({"src":"/_astro/Sekil-1-B.qK8ZKrE_.png","width":500,"height":234,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-1-B.png";
							}
							
							return target[name];
						}
					});

export { Sekil1B as default };
