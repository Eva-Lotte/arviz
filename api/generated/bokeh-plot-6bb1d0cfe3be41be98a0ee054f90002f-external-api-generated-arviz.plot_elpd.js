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
    
      
      
    
      var element = document.getElementById("860174e6-7924-4a88-b8e2-c9c21e1e9857");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '860174e6-7924-4a88-b8e2-c9c21e1e9857' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4b0e529f-9332-415e-b070-448d3462b5ed":{"defs":[],"roots":{"references":[{"attributes":{"children":[[{"id":"14812"},0,0]]},"id":"14866","type":"GridBox"},{"attributes":{"callback":null},"id":"14836","type":"HoverTool"},{"attributes":{"toolbar":{"id":"14867"},"toolbar_location":"above"},"id":"14868","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"14849"},"glyph":{"id":"14848"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14851"}},"id":"14850","type":"GlyphRenderer"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14857"},"major_label_policy":{"id":"14855"},"ticker":{"id":"14826"}},"id":"14825","type":"LinearAxis"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14864"},"selection_policy":{"id":"14863"}},"id":"14849","type":"ColumnDataSource"},{"attributes":{},"id":"14830","type":"PanTool"},{"attributes":{},"id":"14864","type":"Selection"},{"attributes":{},"id":"14822","type":"BasicTicker"},{"attributes":{},"id":"14857","type":"BasicTickFormatter"},{"attributes":{"active_multi":null,"tools":[{"id":"14829"},{"id":"14830"},{"id":"14831"},{"id":"14832"},{"id":"14833"},{"id":"14834"},{"id":"14835"},{"id":"14836"}]},"id":"14839","type":"Toolbar"},{"attributes":{},"id":"14858","type":"AllLabels"},{"attributes":{},"id":"14834","type":"UndoTool"},{"attributes":{},"id":"14813","type":"DataRange1d"},{"attributes":{},"id":"14829","type":"ResetTool"},{"attributes":{},"id":"14815","type":"DataRange1d"},{"attributes":{"axis":{"id":"14821"},"ticker":null},"id":"14824","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14838","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"14868"},{"id":"14866"}]},"id":"14869","type":"Column"},{"attributes":{"toolbars":[{"id":"14839"}],"tools":[{"id":"14829"},{"id":"14830"},{"id":"14831"},{"id":"14832"},{"id":"14833"},{"id":"14834"},{"id":"14835"},{"id":"14836"}]},"id":"14867","type":"ProxyToolbar"},{"attributes":{},"id":"14817","type":"LinearScale"},{"attributes":{"text":"centered model - non centered model"},"id":"14852","type":"Title"},{"attributes":{"source":{"id":"14849"}},"id":"14851","type":"CDSView"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14848","type":"Scatter"},{"attributes":{},"id":"14863","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14837","type":"BoxAnnotation"},{"attributes":{},"id":"14826","type":"BasicTicker"},{"attributes":{"overlay":{"id":"14838"}},"id":"14833","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"14821"}],"center":[{"id":"14824"},{"id":"14828"}],"height":288,"left":[{"id":"14825"}],"output_backend":"webgl","renderers":[{"id":"14850"}],"title":{"id":"14852"},"toolbar":{"id":"14839"},"toolbar_location":null,"width":432,"x_range":{"id":"14813"},"x_scale":{"id":"14817"},"y_range":{"id":"14815"},"y_scale":{"id":"14819"}},"id":"14812","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"14825"},"dimension":1,"ticker":null},"id":"14828","type":"Grid"},{"attributes":{"formatter":{"id":"14860"},"major_label_policy":{"id":"14858"},"ticker":{"id":"14822"}},"id":"14821","type":"LinearAxis"},{"attributes":{"overlay":{"id":"14837"}},"id":"14831","type":"BoxZoomTool"},{"attributes":{},"id":"14832","type":"WheelZoomTool"},{"attributes":{},"id":"14860","type":"BasicTickFormatter"},{"attributes":{},"id":"14835","type":"SaveTool"},{"attributes":{},"id":"14819","type":"LinearScale"},{"attributes":{},"id":"14855","type":"AllLabels"}],"root_ids":["14869"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"4b0e529f-9332-415e-b070-448d3462b5ed","root_ids":["14869"],"roots":{"14869":"860174e6-7924-4a88-b8e2-c9c21e1e9857"}}];
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