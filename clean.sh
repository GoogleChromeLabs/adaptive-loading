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

cd $craNetworkAwareLoading
rm -rf node_modules build
cd ..

cd $craNetworkAwareOnlyIfCachedLoading
rm -rf node_modules build
cd ..

cd $craNetworkAwareDataFetching
rm -rf node_modules build
cd ..

cd $craUaAwareCodeSplitting
rm -rf node_modules build
cd ..

cd $reactMovieNetworkAwareLoading
rm -rf node_modules build
cd ..

cd $reactShrineNetworkAwareCodeSplitting
rm -rf node_modules build
cd ..

cd $nodeDprAwareLoading
rm -rf node_modules build
cd ..

cd $nodeNetworkMemoryConsiderateLoading
rm -rf node_modules build
cd ..

cd $nodeMemoryConsiderateLoading
rm -rf node_modules build
cd ..

cd $nodeNetworkAwareLoading
rm -rf node_modules build
cd ..
