const Sekil4 = new Proxy({"src":"/_astro/Sekil-4.qPZMo5wy.png","width":500,"height":255,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-4.png";
							}
							
							return target[name];
						}
					});

export { Sekil4 as default };
