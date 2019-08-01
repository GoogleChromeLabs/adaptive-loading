#!/bin/bash
multipleBuildsPath="../functions/builds/"
individualBuildAllFiles="build/*"

craBatteryConsiderateLoading="cra-battery-considerate-loading"
craDeviceClassAwareLoading="cra-device-class-aware-loading"
craMemoryConsiderateLoading="cra-memory-considerate-loading"
craMemoryConsiderateLoadingSketchfab="cra-memory-considerate-loading-sketchfab"
craNetworkAwareCodeSplitting="cra-network-aware-code-splitting"
craNetworkAwareComponent="cra-network-aware-component"
craNetworkAwareDataFetching="cra-network-aware-data-fetching"
craUaAwareCodeSplitting="cra-ua-aware-code-splitting"
reactMovieNetworkAwareComponents="react-movie-network-aware-components"
reactShrineNetworkAwareCodeSplitting="react-shrine-network-aware-code-splitting"

cd functions
rm -rf node_modules builds
cd ..

cd $craBatteryConsiderateLoading
rm -rf node_modules build
cd ..

cd $craDeviceClassAwareLoading
rm -rf node_modules build
cd ..

cd $craMemoryConsiderateLoading
rm -rf node_modules build
cd ..

cd $craMemoryConsiderateLoadingSketchfab
rm -rf node_modules build
cd ..

cd $craNetworkAwareCodeSplitting
rm -rf node_modules build
cd ..

cd $craNetworkAwareComponent
rm -rf node_modules build
cd ..

cd $craNetworkAwareDataFetching
rm -rf node_modules build
cd ..

cd $craUaAwareCodeSplitting
rm -rf node_modules build
cd ..

cd $reactMovieNetworkAwareComponents
rm -rf node_modules build
cd ..

cd $reactShrineNetworkAwareCodeSplitting
rm -rf node_modules build
cd ..