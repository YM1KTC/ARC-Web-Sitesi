const Sekil1 = new Proxy({"src":"/_astro/Sekil-1.BYjuwAr1.png","width":604,"height":394,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-1.png";
							}
							
							return target[name];
						}
					});

export { Sekil1 as default };
