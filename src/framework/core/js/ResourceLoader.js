var fluid_2_0_0=fluid_2_0_0||{};!function($,fluid){"use strict";fluid.defaults("fluid.resourceLoader",{gradeNames:["fluid.component"],listeners:{"onCreate.loadResources":{listener:"fluid.resourceLoader.loadResources",args:["{that}",{expander:{func:"{that}.resolveResources"}}]}},defaultLocale:null,locale:null,terms:{},resources:{},resourceOptions:{},invokers:{transformURL:{funcName:"fluid.stringTemplate",args:["{arguments}.0","{that}.options.terms"]},resolveResources:{funcName:"fluid.resourceLoader.resolveResources",args:"{that}"}},events:{onResourcesLoaded:null}}),fluid.resourceLoader.resolveResources=function(that){var mapped=fluid.transform(that.options.resources,that.transformURL);return fluid.transform(mapped,function(url){var resourceSpec={url:url,forceCache:!0,options:that.options.resourceOptions};return $.extend(resourceSpec,fluid.filterKeys(that.options,["defaultLocale","locale"]))})},fluid.resourceLoader.loadResources=function(that,resources){fluid.fetchResources(resources,function(){that.resources=resources,that.events.onResourcesLoaded.fire(resources)})}}(jQuery,fluid_2_0_0);