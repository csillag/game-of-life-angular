FIXLANG = LC_ALL=C

dev:
	@cd gof; $(FIXLANG) meteor

build:
	@cd gof; meteor-build-client ../docs -p ""
	@touch docs/.nojekyll

