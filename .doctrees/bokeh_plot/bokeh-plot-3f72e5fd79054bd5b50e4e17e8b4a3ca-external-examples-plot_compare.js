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
    
      
      
    
      var element = document.getElementById("ea19783c-d513-4ca2-b7fb-441546e7305b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ea19783c-d513-4ca2-b7fb-441546e7305b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"0c458c88-260f-407a-8c80-993bed833771":{"defs":[],"roots":{"references":[{"attributes":{"overlay":{"id":"15623"}},"id":"15618","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15646","type":"Circle"},{"attributes":{},"id":"15617","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15675"},"selection_policy":{"id":"15674"}},"id":"15645","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"15640"},"glyph":{"id":"15641"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15642"},"view":{"id":"15644"}},"id":"15643","type":"GlyphRenderer"},{"attributes":{"source":{"id":"15640"}},"id":"15644","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15657","type":"Circle"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15677"},"selection_policy":{"id":"15676"}},"id":"15650","type":"ColumnDataSource"},{"attributes":{},"id":"15604","type":"LinearScale"},{"attributes":{"toolbar":{"id":"15682"},"toolbar_location":"above"},"id":"15683","type":"ToolbarBox"},{"attributes":{"axis":{"id":"15606"},"ticker":null},"id":"15609","type":"Grid"},{"attributes":{"below":[{"id":"15606"}],"center":[{"id":"15609"},{"id":"15613"}],"height":500,"left":[{"id":"15610"}],"output_backend":"webgl","renderers":[{"id":"15638"},{"id":"15643"},{"id":"15648"},{"id":"15653"},{"id":"15658"},{"id":"15660"}],"title":{"id":"15661"},"toolbar":{"id":"15624"},"toolbar_location":null,"width":500,"x_range":{"id":"15598"},"x_scale":{"id":"15602"},"y_range":{"id":"15600"},"y_scale":{"id":"15604"}},"id":"15597","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"15623","type":"PolyAnnotation"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"15633","type":"FixedTicker"},{"attributes":{},"id":"15620","type":"SaveTool"},{"attributes":{},"id":"15661","type":"Title"},{"attributes":{"axis":{"id":"15610"},"dimension":1,"ticker":null},"id":"15613","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15642","type":"MultiLine"},{"attributes":{"source":{"id":"15645"}},"id":"15649","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15652","type":"MultiLine"},{"attributes":{"toolbars":[{"id":"15624"}],"tools":[{"id":"15614"},{"id":"15615"},{"id":"15616"},{"id":"15617"},{"id":"15618"},{"id":"15619"},{"id":"15620"},{"id":"15621"}]},"id":"15682","type":"ProxyToolbar"},{"attributes":{"formatter":{"id":"15664"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15663"},"ticker":{"id":"15633"}},"id":"15610","type":"LinearAxis"},{"attributes":{},"id":"15619","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"15614"},{"id":"15615"},{"id":"15616"},{"id":"15617"},{"id":"15618"},{"id":"15619"},{"id":"15620"},{"id":"15621"}]},"id":"15624","type":"Toolbar"},{"attributes":{},"id":"15678","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"15635"},"glyph":{"id":"15636"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15637"},"view":{"id":"15639"}},"id":"15638","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15671"},"selection_policy":{"id":"15670"}},"id":"15635","type":"ColumnDataSource"},{"attributes":{},"id":"15664","type":"BasicTickFormatter"},{"attributes":{},"id":"15673","type":"Selection"},{"attributes":{"callback":null},"id":"15621","type":"HoverTool"},{"attributes":{"data_source":{"id":"15650"},"glyph":{"id":"15651"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15652"},"view":{"id":"15654"}},"id":"15653","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15647","type":"Circle"},{"attributes":{},"id":"15607","type":"BasicTicker"},{"attributes":{},"id":"15671","type":"Selection"},{"attributes":{},"id":"15602","type":"LinearScale"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15641","type":"MultiLine"},{"attributes":{},"id":"15663","type":"AllLabels"},{"attributes":{},"id":"15614","type":"ResetTool"},{"attributes":{},"id":"15667","type":"BasicTickFormatter"},{"attributes":{},"id":"15615","type":"PanTool"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15673"},"selection_policy":{"id":"15672"}},"id":"15640","type":"ColumnDataSource"},{"attributes":{},"id":"15670","type":"UnionRenderers"},{"attributes":{},"id":"15598","type":"DataRange1d"},{"attributes":{},"id":"15675","type":"Selection"},{"attributes":{"end":0.5,"start":-1.5},"id":"15600","type":"DataRange1d"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15660","type":"Span"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15656","type":"Circle"},{"attributes":{},"id":"15672","type":"UnionRenderers"},{"attributes":{"source":{"id":"15635"}},"id":"15639","type":"CDSView"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15651","type":"MultiLine"},{"attributes":{},"id":"15665","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15637","type":"Scatter"},{"attributes":{},"id":"15674","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15636","type":"Scatter"},{"attributes":{},"id":"15677","type":"Selection"},{"attributes":{},"id":"15676","type":"UnionRenderers"},{"attributes":{"children":[{"id":"15683"},{"id":"15681"}]},"id":"15684","type":"Column"},{"attributes":{"data_source":{"id":"15655"},"glyph":{"id":"15656"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15657"},"view":{"id":"15659"}},"id":"15658","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"15622"}},"id":"15616","type":"BoxZoomTool"},{"attributes":{"axis_label":"Log","formatter":{"id":"15667"},"major_label_policy":{"id":"15665"},"ticker":{"id":"15607"}},"id":"15606","type":"LinearAxis"},{"attributes":{"children":[[{"id":"15597"},0,0]]},"id":"15681","type":"GridBox"},{"attributes":{"source":{"id":"15650"}},"id":"15654","type":"CDSView"},{"attributes":{},"id":"15679","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"15622","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15679"},"selection_policy":{"id":"15678"}},"id":"15655","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"15645"},"glyph":{"id":"15646"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15647"},"view":{"id":"15649"}},"id":"15648","type":"GlyphRenderer"},{"attributes":{"source":{"id":"15655"}},"id":"15659","type":"CDSView"}],"root_ids":["15684"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"0c458c88-260f-407a-8c80-993bed833771","root_ids":["15684"],"roots":{"15684":"ea19783c-d513-4ca2-b7fb-441546e7305b"}}];
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