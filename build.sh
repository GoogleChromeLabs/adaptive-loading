#!/bin/bash
multipleBuildsPath="../functions/builds/"
individualBuildAllFiles="build/*"

craBatteryConsiderateLoading="cra-battery-considerate-loading"
craDeviceClassAwareLoading="cra-device-class-aware-loading"
craMemoryConsiderateLoading="cra-memory-considerate-loading"
craMemoryConsiderateLoadingSketchfab="cra-memory-considerate-loading-sketchfab"
craNetworkAwareCodeSplitting="cra-network-aware-code-splitting"
craNetworkAwareLoading="cra-network-aware-loading"
craNetworkAwareOnlyIfCachedLoading="cra-network-aware-only-if-cached-loading"
craNetworkAwareDataFetching="cra-network-aware-data-fetching"
craUaAwareCodeSplitting="cra-ua-aware-code-splitting"
reactMovieNetworkAwareLoading="react-movie-network-aware-loading"
reactShrineNetworkAwareCodeSplitting="react-shrine-network-aware-code-splitting"
nodeDprAwareLoading="node-dpr-aware-loading"
nodeNetworkMemoryConsiderateLoading="node-network-memory-considerate-loading"
nodeMemoryConsiderateLoading="node-memory-considerate-loading"
nodeNetworkAwareLoading="node-network-aware-loading"

# cd cra-battery-considerate-loading
cd $craBatteryConsiderateLoading
rm -rf node_modules build
npm install
npm run build
# mkdir -p ../functions/builds/cra-battery-considerate-loading
mkdir -p "${multipleBuildsPath}${craBatteryConsiderateLoading}"
# cp -r build/* ../functions/builds/cra-battery-considerate-loading
cp -r $individualBuildAllFiles "${multipleBuildsPath}${craBatteryConsiderateLoading}"
cd ..

cd $craDeviceClassAwareLoading
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${craDeviceClassAwareLoading}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${craDeviceClassAwareLoading}"
cd ..

cd $craMemoryConsiderateLoading
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${craMemoryConsiderateLoading}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${craMemoryConsiderateLoading}"
cd ..

cd $craMemoryConsiderateLoadingSketchfab
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${craMemoryConsiderateLoadingSketchfab}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${craMemoryConsiderateLoadingSketchfab}"
cd ..

cd $craNetworkAwareCodeSplitting
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${craNetworkAwareCodeSplitting}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${craNetworkAwareCodeSplitting}"
cd ..

cd $craNetworkAwareLoading
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${craNetworkAwareLoading}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${craNetworkAwareLoading}"
cd ..

cd $craNetworkAwareOnlyIfCachedLoading
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${craNetworkAwareOnlyIfCachedLoading}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${craNetworkAwareOnlyIfCachedLoading}"
cd ..

cd $craNetworkAwareDataFetching
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${craNetworkAwareDataFetching}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${craNetworkAwareDataFetching}"
cd ..

cd $craUaAwareCodeSplitting
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${craUaAwareCodeSplitting}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${craUaAwareCodeSplitting}"
cd ..

cd $reactMovieNetworkAwareLoading
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${reactMovieNetworkAwareLoading}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${reactMovieNetworkAwareLoading}"
cd ..

cd $reactShrineNetworkAwareCodeSplitting
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${reactShrineNetworkAwareCodeSplitting}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${reactShrineNetworkAwareCodeSplitting}"
cd ..

cd $nodeDprAwareLoading
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${nodeDprAwareLoading}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${nodeDprAwareLoading}"
cd ..

cd $nodeNetworkMemoryConsiderateLoading
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${nodeNetworkMemoryConsiderateLoading}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${nodeNetworkMemoryConsiderateLoading}"
cd ..

cd $nodeMemoryConsiderateLoading
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${nodeMemoryConsiderateLoading}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${nodeMemoryConsiderateLoading}"
cd ..

cd $nodeNetworkAwareLoading
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${nodeNetworkAwareLoading}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${nodeNetworkAwareLoading}"
cd ..
