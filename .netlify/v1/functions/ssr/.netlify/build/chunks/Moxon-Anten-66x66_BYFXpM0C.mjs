const MoxonAnten66x66 = new Proxy({"src":"/_astro/Moxon-Anten-66x66.9_4orXn6.png","width":66,"height":66,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Moxon-Anten-66x66.png";
							}
							
							return target[name];
						}
					});

export { MoxonAnten66x66 as default };
