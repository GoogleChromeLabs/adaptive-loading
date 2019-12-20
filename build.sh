#!/bin/bash
multipleBuildsPath="../functions/builds/"
individualBuildAllFiles="build/*"

for PROJECT in  cra-battery-considerate-loading \
                cra-device-class-aware-code-splitting \
                cra-memory-considerate-loading \
                cra-memory-considerate-loading-sketchfab  \
                cra-network-aware-code-splitting \
                cra-network-aware-loading \
                cra-network-aware-only-if-cached-loading \
                cra-network-aware-data-fetching \
                cra-ua-aware-code-splitting \
                react-movie-network-aware-loading \
                react-shrine-network-aware-code-splitting \
                node-dpr-aware-loading \
                node-network-memory-considerate-loading \
                node-memory-considerate-loading \
                node-network-aware-loading \
                react-ebay-network-aware-code-splitting \
                cra-hardware-concurrency-considerate-code-splitting \
                cra-hardware-concurrency-considerate-loading \
                react-dixie-memory-considerate-loading \
                react-lottie-network-aware-loading \
                react-youtube-adaptive-loading \
                microsite \
                cna-memory-considerate-animation \
                next-show-adaptive-loading \
                "react-twitter-save-data-loading(client-hint)" \
                "react-twitter-save-data-loading(hook)"
do
    echo "Start building ${PROJECT}..."
    cd $PROJECT

    rm -rf node_modules build
    npm install
    npm run build

    mkdir -p "${multipleBuildsPath}${PROJECT}"
    cp -r $individualBuildAllFiles "${multipleBuildsPath}${PROJECT}"

    cd ..
    echo "Done building ${PROJECT}."
done

multipleBuildsStaticPath="functions/builds/static/"

rootProject="microsite"
mkdir -p "${multipleBuildsStaticPath}"
cp -r ${rootProject}/public/static/* "${multipleBuildsStaticPath}"

for PROJECT_WITH_STATIC in  cna-memory-considerate-animation \
                            node-network-aware-loading \
                            node-memory-considerate-loading

do
    mkdir -p "${multipleBuildsStaticPath}${PROJECT_WITH_STATIC}"
    cp -r ${PROJECT_WITH_STATIC}/public/static/* "${multipleBuildsStaticPath}${PROJECT_WITH_STATIC}"
done
