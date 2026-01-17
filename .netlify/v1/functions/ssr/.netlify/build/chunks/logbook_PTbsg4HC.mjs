const logbook = new Proxy({"src":"/_astro/logbook.D2TteF5Y.png","width":1536,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/logbook.png";
							}
							
							return target[name];
						}
					});

export { logbook as default };
