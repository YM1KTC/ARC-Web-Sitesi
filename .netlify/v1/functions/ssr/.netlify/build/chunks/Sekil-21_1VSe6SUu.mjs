const Sekil21 = new Proxy({"src":"/_astro/Sekil-21.z1-zMtOO.jpeg","width":738,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2025/04/Sekil-21.jpeg";
							}
							
							return target[name];
						}
					});

export { Sekil21 as default };
