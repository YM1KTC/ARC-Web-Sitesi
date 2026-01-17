const Sekil1150x150 = new Proxy({"src":"/_astro/Sekil-1-150x150.D555x3ux.jpeg","width":150,"height":150,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-1-150x150.jpeg";
							}
							
							return target[name];
						}
					});

export { Sekil1150x150 as default };
