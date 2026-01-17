const mtSampleBackground = new Proxy({"src":"/_astro/mt-sample-background.94tqXRRd.jpg","width":1920,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2024/12/mt-sample-background.jpg";
							}
							
							return target[name];
						}
					});

export { mtSampleBackground as default };
