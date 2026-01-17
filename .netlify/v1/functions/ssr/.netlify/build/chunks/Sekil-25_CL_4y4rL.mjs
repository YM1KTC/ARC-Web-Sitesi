const Sekil25 = new Proxy({"src":"/_astro/Sekil-25.AkjwJT66.jpg","width":615,"height":30,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-25.jpg";
							}
							
							return target[name];
						}
					});

export { Sekil25 as default };
