const mtSampleBackground300x200 = new Proxy({"src":"/_astro/mt-sample-background-300x200.qNSpYvV1.jpg","width":300,"height":200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/bugracanata/Developer/[Telsiz]/ARC-Web-Sitesi/src/assets/images/2024/12/mt-sample-background-300x200.jpg";
							}
							
							return target[name];
						}
					});

export { mtSampleBackground300x200 as default };
