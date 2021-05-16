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
    
      
      
    
      var element = document.getElementById("93a2603e-32dc-4de0-9e43-2995fca0b781");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '93a2603e-32dc-4de0-9e43-2995fca0b781' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4f9c79a6-da41-4731-88ac-a787c8aef0e3":{"defs":[],"roots":{"references":[{"attributes":{},"id":"17942","type":"UnionRenderers"},{"attributes":{},"id":"17898","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"17918"}],"tools":[{"id":"17908"},{"id":"17909"},{"id":"17910"},{"id":"17911"},{"id":"17912"},{"id":"17913"},{"id":"17914"},{"id":"17915"}]},"id":"17946","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"17904"},"dimension":1,"ticker":null},"id":"17907","type":"Grid"},{"attributes":{"children":[{"id":"17947"},{"id":"17945"}]},"id":"17948","type":"Column"},{"attributes":{"toolbar":{"id":"17946"},"toolbar_location":"above"},"id":"17947","type":"ToolbarBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17917","type":"PolyAnnotation"},{"attributes":{},"id":"17936","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"17928"},"glyph":{"id":"17927"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17930"}},"id":"17929","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"17891"},0,0]]},"id":"17945","type":"GridBox"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17927","type":"Scatter"},{"attributes":{},"id":"17939","type":"BasicTickFormatter"},{"attributes":{},"id":"17909","type":"PanTool"},{"attributes":{},"id":"17914","type":"SaveTool"},{"attributes":{"source":{"id":"17928"}},"id":"17930","type":"CDSView"},{"attributes":{"below":[{"id":"17900"}],"center":[{"id":"17903"},{"id":"17907"}],"height":288,"left":[{"id":"17904"}],"output_backend":"webgl","renderers":[{"id":"17929"}],"title":{"id":"17931"},"toolbar":{"id":"17918"},"toolbar_location":null,"width":432,"x_range":{"id":"17892"},"x_scale":{"id":"17896"},"y_range":{"id":"17894"},"y_scale":{"id":"17898"}},"id":"17891","subtype":"Figure","type":"Plot"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17931","type":"Title"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17943"},"selection_policy":{"id":"17942"}},"id":"17928","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17916","type":"BoxAnnotation"},{"attributes":{},"id":"17905","type":"BasicTicker"},{"attributes":{},"id":"17896","type":"LinearScale"},{"attributes":{"formatter":{"id":"17939"},"major_label_policy":{"id":"17937"},"ticker":{"id":"17901"}},"id":"17900","type":"LinearAxis"},{"attributes":{},"id":"17901","type":"BasicTicker"},{"attributes":{},"id":"17943","type":"Selection"},{"attributes":{},"id":"17911","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"17916"}},"id":"17910","type":"BoxZoomTool"},{"attributes":{},"id":"17934","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"17908"},{"id":"17909"},{"id":"17910"},{"id":"17911"},{"id":"17912"},{"id":"17913"},{"id":"17914"},{"id":"17915"}]},"id":"17918","type":"Toolbar"},{"attributes":{},"id":"17892","type":"DataRange1d"},{"attributes":{},"id":"17894","type":"DataRange1d"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17936"},"major_label_policy":{"id":"17934"},"ticker":{"id":"17905"}},"id":"17904","type":"LinearAxis"},{"attributes":{},"id":"17908","type":"ResetTool"},{"attributes":{},"id":"17913","type":"UndoTool"},{"attributes":{"axis":{"id":"17900"},"ticker":null},"id":"17903","type":"Grid"},{"attributes":{},"id":"17937","type":"AllLabels"},{"attributes":{"callback":null},"id":"17915","type":"HoverTool"},{"attributes":{"overlay":{"id":"17917"}},"id":"17912","type":"LassoSelectTool"}],"root_ids":["17948"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"4f9c79a6-da41-4731-88ac-a787c8aef0e3","root_ids":["17948"],"roots":{"17948":"93a2603e-32dc-4de0-9e43-2995fca0b781"}}];
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