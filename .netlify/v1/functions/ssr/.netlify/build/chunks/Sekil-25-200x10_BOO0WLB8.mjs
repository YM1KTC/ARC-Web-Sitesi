const Sekil25200x10 = new Proxy({"src":"/_astro/Sekil-25-200x10.BThIFw_X.jpg","width":200,"height":10,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-25-200x10.jpg";
							}
							
							return target[name];
						}
					});

export { Sekil25200x10 as default };
