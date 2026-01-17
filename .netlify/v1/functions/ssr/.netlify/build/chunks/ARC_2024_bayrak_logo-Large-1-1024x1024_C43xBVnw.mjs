const logoImage = new Proxy({"src":"/_astro/ARC_2024_bayrak_logo-Large-1-1024x1024.AcZ7CUN4.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2024/12/ARC_2024_bayrak_logo-Large-1-1024x1024.png";
							}
							
							return target[name];
						}
					});

export { logoImage as default };
