const MoxonAnten150x150 = new Proxy({"src":"/_astro/Moxon-Anten-150x150.B2NCFP8J.png","width":150,"height":150,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Moxon-Anten-150x150.png";
							}
							
							return target[name];
						}
					});

export { MoxonAnten150x150 as default };
