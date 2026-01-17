const MoxonAnten = new Proxy({"src":"/_astro/Moxon-Anten.MtorOslD.png","width":2240,"height":1260,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Moxon-Anten.png";
							}
							
							return target[name];
						}
					});

export { MoxonAnten as default };
