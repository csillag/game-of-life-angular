FIXLANG = LC_ALL=C

prepare:
	@cd app; meteor npm install

dev: prepare
	@cd app; $(FIXLANG) meteor

build: prepare
	@cd app; ./node_modules/.bin/meteor-build-client ../docs -p ""
	@touch docs/.nojekyll
	@echo "This directory hosts the statically built demo. See here: https://csillag.github.io/game-of-life/" > docs/readme.md

