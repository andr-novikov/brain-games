instal:
	npm install

start:
	node bin/brain-games.js

publish:
	npm publish --dry-run
	
make lint:
	npx eslint .
	


.PHONY: test
