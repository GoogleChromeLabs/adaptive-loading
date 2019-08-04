#!/bin/bash
multipleBuildsPath="../functions/builds/"
individualBuildAllFiles="build/*"

craBatteryConsiderateLoading="cra-battery-considerate-loading"
craDeviceClassAwareLoading="cra-device-class-aware-loading"
craMemoryConsiderateLoading="cra-memory-considerate-loading"
craMemoryConsiderateLoadingSketchfab="cra-memory-considerate-loading-sketchfab"
craNetworkAwareCodeSplitting="cra-network-aware-code-splitting"
craNetworkAwareComponent="cra-network-aware-loading"
craNetworkAwareDataFetching="cra-network-aware-data-fetching"
craUaAwareCodeSplitting="cra-ua-aware-code-splitting"
reactMovieNetworkAwareComponents="react-movie-network-aware-components"
reactShrineNetworkAwareCodeSplitting="react-shrine-network-aware-code-splitting"

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

cd $craNetworkAwareComponent
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${craNetworkAwareComponent}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${craNetworkAwareComponent}"
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

cd $reactMovieNetworkAwareComponents
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${reactMovieNetworkAwareComponents}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${reactMovieNetworkAwareComponents}"
cd ..

cd $reactShrineNetworkAwareCodeSplitting
rm -rf node_modules build
npm install
npm run build
mkdir -p "${multipleBuildsPath}${reactShrineNetworkAwareCodeSplitting}"
cp -r $individualBuildAllFiles "${multipleBuildsPath}${reactShrineNetworkAwareCodeSplitting}"
cd ..