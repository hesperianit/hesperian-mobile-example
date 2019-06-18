NODE_BIN=./node_modules/.bin
WEBPACK=$(NODE_BIN)/webpack
BABELNODE=$(NODE_BIN)/babel-node
HTMLPDF=$(NODE_BIN)/html-pdf
CORDOVA=$(NODE_BIN)/cordova

VERSION=1.0.1

BUILDDIR=cordova

.PHONY: build clean webpack watch

build: webpack
	rm -rf ${BUILDDIR}/www
	cp -R dist ${BUILDDIR}/www
	cp $(BUILDDIR)/config.xml.template $(BUILDDIR)/config.xml
	perl -pi -e 's/"VERSION"/"$(VERSION)"/g' $(BUILDDIR)/config.xml
	@(cd ${BUILDDIR}; cordova build --device --release -- --password="${CORDOVA_SIGNING_PASSPHRASE}" --storePassword="${CORDOVA_SIGNING_PASSPHRASE}")
	mkdir -p output
	cp ${BUILDDIR}/platforms/ios/build/device/*.ipa output
	cp ${BUILDDIR}/platforms/android/app/build/outputs/apk/*/*.apk output

clean:
	rm -rf ${BUILDDIR}/platforms/ios/build/
	(cd ${BUILDDIR}; cordova clean)


webpack:
	rm -rf dist
	VERSION=$(VERSION) $(WEBPACK)
watch:
	VERSION=$(VERSION) $(WEBPACK) --watch


link:
	rm -rf ./node_modules/mobile-app-library
	mkdir ./node_modules/mobile-app-library
	cp -R ../index.js ../lib ./node_modules/mobile-app-library
