FIXLANG = LC_ALL=C

prepare:
	@cd gof; meteor npm install

dev: prepare
	@cd gof; $(FIXLANG) meteor

build:
	@cd gof; meteor-build-client ../docs -p ""
	@touch docs/.nojekyll

