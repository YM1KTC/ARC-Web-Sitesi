const mtSampleBackground150x150 = new Proxy({"src":"/_astro/mt-sample-background-150x150.BAHw-ibZ.jpg","width":150,"height":150,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2024/12/mt-sample-background-150x150.jpg";
							}
							
							return target[name];
						}
					});

export { mtSampleBackground150x150 as default };
