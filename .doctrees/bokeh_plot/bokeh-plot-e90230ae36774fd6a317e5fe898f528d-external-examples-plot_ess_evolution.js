(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("997d7332-bcc9-47d2-88eb-fbc194761500");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '997d7332-bcc9-47d2-88eb-fbc194761500' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js": "XypntL49z55iwGVUW4qsEu83zKL3XEcz0MjuGOQ9SlaaQ68X/g+k1FcioZi7oQAc", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js": "bEsM86IHGDTLCS0Zod8a8WM6Y4+lafAL/eSiyQcuPzinmWNgNO2/olUF0Z2Dkn5i", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js": "TX0gSQTdXTTeScqxj6PVQxTiRW8DOoGVwinyi1D3kxv7wuxQ02XkOxv0xwiypcAH"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"ae31aea6-0a79-4f45-b909-98bc77fe3ee6":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18158","type":"LinearScale"},{"attributes":{},"id":"18165","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18189","type":"Circle"},{"attributes":{"text":"b"},"id":"18211","type":"Title"},{"attributes":{"source":{"id":"18202"}},"id":"18206","type":"CDSView"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18207","type":"Span"},{"attributes":{},"id":"18224","type":"UnionRenderers"},{"attributes":{},"id":"18154","type":"DataRange1d"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"18190"},{"id":"18195"}]},"id":"18209","type":"LegendItem"},{"attributes":{"click_policy":"hide","items":[{"id":"18209"},{"id":"18210"}],"location":"center_right","orientation":"horizontal"},"id":"18208","type":"Legend"},{"attributes":{},"id":"18216","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18194","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18229"},"selection_policy":{"id":"18228"}},"id":"18202","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18202"},"glyph":{"id":"18203"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18204"},"view":{"id":"18206"}},"id":"18205","type":"GlyphRenderer"},{"attributes":{},"id":"18226","type":"UnionRenderers"},{"attributes":{"source":{"id":"18187"}},"id":"18191","type":"CDSView"},{"attributes":{"children":[{"id":"18233"},{"id":"18231"}]},"id":"18234","type":"Column"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"18205"},{"id":"18200"}]},"id":"18210","type":"LegendItem"},{"attributes":{"axis_label":"ESS","formatter":{"id":"18216"},"major_label_policy":{"id":"18214"},"ticker":{"id":"18165"}},"id":"18164","type":"LinearAxis"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18198","type":"Line"},{"attributes":{"callback":null},"id":"18175","type":"HoverTool"},{"attributes":{},"id":"18173","type":"UndoTool"},{"attributes":{},"id":"18225","type":"Selection"},{"attributes":{"data_source":{"id":"18197"},"glyph":{"id":"18198"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18199"},"view":{"id":"18201"}},"id":"18200","type":"GlyphRenderer"},{"attributes":{},"id":"18214","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18227"},"selection_policy":{"id":"18226"}},"id":"18197","type":"ColumnDataSource"},{"attributes":{},"id":"18227","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18225"},"selection_policy":{"id":"18224"}},"id":"18192","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"18164"},"dimension":1,"ticker":null},"id":"18167","type":"Grid"},{"attributes":{"axis":{"id":"18160"},"ticker":null},"id":"18163","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18177","type":"PolyAnnotation"},{"attributes":{"source":{"id":"18192"}},"id":"18196","type":"CDSView"},{"attributes":{"data_source":{"id":"18187"},"glyph":{"id":"18188"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18189"},"view":{"id":"18191"}},"id":"18190","type":"GlyphRenderer"},{"attributes":{},"id":"18228","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18192"},"glyph":{"id":"18193"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18194"},"view":{"id":"18196"}},"id":"18195","type":"GlyphRenderer"},{"attributes":{},"id":"18161","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18199","type":"Line"},{"attributes":{"overlay":{"id":"18177"}},"id":"18172","type":"LassoSelectTool"},{"attributes":{"source":{"id":"18197"}},"id":"18201","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"18168"},{"id":"18169"},{"id":"18170"},{"id":"18171"},{"id":"18172"},{"id":"18173"},{"id":"18174"},{"id":"18175"}]},"id":"18178","type":"Toolbar"},{"attributes":{},"id":"18156","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18204","type":"Circle"},{"attributes":{"children":[[{"id":"18151"},0,0]]},"id":"18231","type":"GridBox"},{"attributes":{"above":[{"id":"18208"}],"below":[{"id":"18160"}],"center":[{"id":"18163"},{"id":"18167"}],"height":500,"left":[{"id":"18164"}],"output_backend":"webgl","renderers":[{"id":"18190"},{"id":"18195"},{"id":"18200"},{"id":"18205"},{"id":"18207"}],"title":{"id":"18211"},"toolbar":{"id":"18178"},"toolbar_location":null,"width":500,"x_range":{"id":"18152"},"x_scale":{"id":"18156"},"y_range":{"id":"18154"},"y_scale":{"id":"18158"}},"id":"18151","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18168","type":"ResetTool"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18203","type":"Circle"},{"attributes":{},"id":"18219","type":"BasicTickFormatter"},{"attributes":{},"id":"18223","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18188","type":"Circle"},{"attributes":{"toolbars":[{"id":"18178"}],"tools":[{"id":"18168"},{"id":"18169"},{"id":"18170"},{"id":"18171"},{"id":"18172"},{"id":"18173"},{"id":"18174"},{"id":"18175"}]},"id":"18232","type":"ProxyToolbar"},{"attributes":{},"id":"18169","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18176","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"18176"}},"id":"18170","type":"BoxZoomTool"},{"attributes":{},"id":"18222","type":"UnionRenderers"},{"attributes":{},"id":"18171","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"18232"},"toolbar_location":"above"},"id":"18233","type":"ToolbarBox"},{"attributes":{},"id":"18217","type":"AllLabels"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18193","type":"Line"},{"attributes":{},"id":"18174","type":"SaveTool"},{"attributes":{},"id":"18152","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18223"},"selection_policy":{"id":"18222"}},"id":"18187","type":"ColumnDataSource"},{"attributes":{},"id":"18229","type":"Selection"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"18219"},"major_label_policy":{"id":"18217"},"ticker":{"id":"18161"}},"id":"18160","type":"LinearAxis"}],"root_ids":["18234"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"ae31aea6-0a79-4f45-b909-98bc77fe3ee6","root_ids":["18234"],"roots":{"18234":"997d7332-bcc9-47d2-88eb-fbc194761500"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();