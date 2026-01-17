const Sekil20150x150 = new Proxy({"src":"/_astro/Sekil-20-150x150.qu1GHO0a.jpeg","width":150,"height":150,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-20-150x150.jpeg";
							}
							
							return target[name];
						}
					});

export { Sekil20150x150 as default };
