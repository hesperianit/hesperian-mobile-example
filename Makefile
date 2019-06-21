NODE_BIN=./node_modules/.bin
WEBPACK=$(NODE_BIN)/webpack
BABELNODE=$(NODE_BIN)/babel-node
HTMLPDF=$(NODE_BIN)/html-pdf
CORDOVA=$(NODE_BIN)/cordova
HANDLEBARS=$(NODE_BIN)/hesperian-handlebars-cmd
CORDOVA_CONFIG=$(BUILDDIR)/config.xml


BUILDDIR=cordova

.PHONY: build clean webpack watch cordova

build: webpack $(CORDOVA_CONFIG)
	rm -rf ${BUILDDIR}/www
	cp -R dist ${BUILDDIR}/www
	@(cd ${BUILDDIR}; cordova build --device --release -- --password="${CORDOVA_SIGNING_PASSPHRASE}" --storePassword="${CORDOVA_SIGNING_PASSPHRASE}")
	mkdir -p output
	cp ${BUILDDIR}/platforms/ios/build/device/*.ipa output
	cp ${BUILDDIR}/platforms/android/app/build/outputs/apk/*/*.apk output

$(CORDOVA_CONFIG): $(BUILDDIR)/config.xml.template app-config.json
	cat $(BUILDDIR)/config.xml.template | ${HANDLEBARS} app-config.json > $(CORDOVA_CONFIG)


clean:
	rm -rf ${BUILDDIR}/platforms/ios/build/
	(cd ${BUILDDIR}; cordova clean)

distclean:
	rm -rf ${BUILDDIR}/platforms/
	rm -rf ${BUILDDIR}/node_modules package-lock.json
	rm -rf ${BUILDDIR}/www ${BUILDDIR}/platforms ${BUILDDIR}/plugins

install:
	npm install
	npm link hesperian-mobile

cordova-install: $(CORDOVA_CONFIG) webpack
	(cd ${BUILDDIR}; npm install)
	rm -rf ${BUILDDIR}/www
	cp -R dist ${BUILDDIR}/www
	(cd ${BUILDDIR}; cordova prepare)


webpack:
	rm -rf dist
	$(WEBPACK)
watch:
	$(WEBPACK) --watch

