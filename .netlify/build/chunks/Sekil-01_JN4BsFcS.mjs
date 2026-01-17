const Sekil01 = new Proxy({"src":"/_astro/Sekil-01.BNmbYrH7.png","width":1903,"height":912,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-01.png";
							}
							
							return target[name];
						}
					});

export { Sekil01 as default };
