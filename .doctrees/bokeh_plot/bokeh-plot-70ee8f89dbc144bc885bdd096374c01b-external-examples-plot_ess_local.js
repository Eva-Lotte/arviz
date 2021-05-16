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
    
      
      
    
      var element = document.getElementById("20c085d6-9d95-467a-847e-e8ad0261566f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '20c085d6-9d95-467a-847e-e8ad0261566f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f0b0a041-eb4e-4c36-858e-e8a94223f764":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18317","type":"BasicTicker"},{"attributes":{},"id":"18355","type":"BasicTickFormatter"},{"attributes":{},"id":"18362","type":"Selection"},{"attributes":{"children":[[{"id":"18303"},0,0]]},"id":"18366","type":"GridBox"},{"attributes":{"text":"mu"},"id":"18350","type":"Title"},{"attributes":{},"id":"18364","type":"Selection"},{"attributes":{"source":{"id":"18345"}},"id":"18347","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18328","type":"BoxAnnotation"},{"attributes":{},"id":"18323","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18341","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18329","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"18312"}],"center":[{"id":"18315"},{"id":"18319"}],"height":500,"left":[{"id":"18316"}],"output_backend":"webgl","renderers":[{"id":"18342"},{"id":"18346"},{"id":"18348"},{"id":"18349"}],"title":{"id":"18350"},"toolbar":{"id":"18330"},"toolbar_location":null,"width":500,"x_range":{"id":"18304"},"x_scale":{"id":"18308"},"y_range":{"id":"18306"},"y_scale":{"id":"18310"}},"id":"18303","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"18358"},"major_label_policy":{"id":"18356"},"ticker":{"id":"18313"}},"id":"18312","type":"LinearAxis"},{"attributes":{"data_source":{"id":"18345"},"glyph":{"id":"18344"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18347"}},"id":"18346","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"18329"}},"id":"18324","type":"LassoSelectTool"},{"attributes":{"toolbar":{"id":"18367"},"toolbar_location":"above"},"id":"18368","type":"ToolbarBox"},{"attributes":{},"id":"18320","type":"ResetTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18362"},"selection_policy":{"id":"18361"}},"id":"18339","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18339"}},"id":"18343","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18340","type":"Circle"},{"attributes":{"toolbars":[{"id":"18330"}],"tools":[{"id":"18320"},{"id":"18321"},{"id":"18322"},{"id":"18323"},{"id":"18324"},{"id":"18325"},{"id":"18326"},{"id":"18327"}]},"id":"18367","type":"ProxyToolbar"},{"attributes":{},"id":"18361","type":"UnionRenderers"},{"attributes":{},"id":"18353","type":"AllLabels"},{"attributes":{"callback":null},"id":"18327","type":"HoverTool"},{"attributes":{"children":[{"id":"18368"},{"id":"18366"}]},"id":"18369","type":"Column"},{"attributes":{},"id":"18356","type":"AllLabels"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"18344","type":"Scatter"},{"attributes":{},"id":"18313","type":"BasicTicker"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"18348","type":"Span"},{"attributes":{"data_source":{"id":"18339"},"glyph":{"id":"18340"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18341"},"view":{"id":"18343"}},"id":"18342","type":"GlyphRenderer"},{"attributes":{},"id":"18321","type":"PanTool"},{"attributes":{},"id":"18308","type":"LinearScale"},{"attributes":{},"id":"18306","type":"DataRange1d"},{"attributes":{},"id":"18326","type":"SaveTool"},{"attributes":{"axis":{"id":"18312"},"ticker":null},"id":"18315","type":"Grid"},{"attributes":{},"id":"18310","type":"LinearScale"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"18355"},"major_label_policy":{"id":"18353"},"ticker":{"id":"18317"}},"id":"18316","type":"LinearAxis"},{"attributes":{},"id":"18363","type":"UnionRenderers"},{"attributes":{},"id":"18304","type":"DataRange1d"},{"attributes":{"active_multi":null,"tools":[{"id":"18320"},{"id":"18321"},{"id":"18322"},{"id":"18323"},{"id":"18324"},{"id":"18325"},{"id":"18326"},{"id":"18327"}]},"id":"18330","type":"Toolbar"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18349","type":"Span"},{"attributes":{},"id":"18325","type":"UndoTool"},{"attributes":{"axis":{"id":"18316"},"dimension":1,"ticker":null},"id":"18319","type":"Grid"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"18364"},"selection_policy":{"id":"18363"}},"id":"18345","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"18328"}},"id":"18322","type":"BoxZoomTool"},{"attributes":{},"id":"18358","type":"BasicTickFormatter"}],"root_ids":["18369"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"f0b0a041-eb4e-4c36-858e-e8a94223f764","root_ids":["18369"],"roots":{"18369":"20c085d6-9d95-467a-847e-e8ad0261566f"}}];
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