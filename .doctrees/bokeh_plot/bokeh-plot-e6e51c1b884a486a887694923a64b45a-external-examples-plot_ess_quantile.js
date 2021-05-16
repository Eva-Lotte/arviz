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
    
      
      
    
      var element = document.getElementById("1a581dee-c6b6-48e8-8081-c274ebfb0ac4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1a581dee-c6b6-48e8-8081-c274ebfb0ac4' but no matching script tag was found.")
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
                    
                  var docs_json = '{"7d7d186d-0fda-486c-a700-199bc6f30fad":{"defs":[],"roots":{"references":[{"attributes":{"text":"sigma"},"id":"18464","type":"Title"},{"attributes":{"toolbars":[{"id":"18449"}],"tools":[{"id":"18439"},{"id":"18440"},{"id":"18441"},{"id":"18442"},{"id":"18443"},{"id":"18444"},{"id":"18445"},{"id":"18446"}]},"id":"18479","type":"ProxyToolbar"},{"attributes":{},"id":"18469","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18447","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"18458"},"glyph":{"id":"18459"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18460"},"view":{"id":"18462"}},"id":"18461","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"18446","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"18439"},{"id":"18440"},{"id":"18441"},{"id":"18442"},{"id":"18443"},{"id":"18444"},{"id":"18445"},{"id":"18446"}]},"id":"18449","type":"Toolbar"},{"attributes":{"overlay":{"id":"18448"}},"id":"18443","type":"LassoSelectTool"},{"attributes":{},"id":"18442","type":"WheelZoomTool"},{"attributes":{},"id":"18429","type":"LinearScale"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"18472"},"major_label_policy":{"id":"18470"},"ticker":{"id":"18432"}},"id":"18431","type":"LinearAxis"},{"attributes":{"children":[[{"id":"18422"},0,0]]},"id":"18478","type":"GridBox"},{"attributes":{"source":{"id":"18458"}},"id":"18462","type":"CDSView"},{"attributes":{"children":[{"id":"18480"},{"id":"18478"}]},"id":"18481","type":"Column"},{"attributes":{"toolbar":{"id":"18479"},"toolbar_location":"above"},"id":"18480","type":"ToolbarBox"},{"attributes":{},"id":"18445","type":"SaveTool"},{"attributes":{},"id":"18439","type":"ResetTool"},{"attributes":{},"id":"18475","type":"UnionRenderers"},{"attributes":{},"id":"18423","type":"DataRange1d"},{"attributes":{},"id":"18436","type":"BasicTicker"},{"attributes":{},"id":"18425","type":"DataRange1d"},{"attributes":{},"id":"18470","type":"AllLabels"},{"attributes":{},"id":"18440","type":"PanTool"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18463","type":"Span"},{"attributes":{"below":[{"id":"18431"}],"center":[{"id":"18434"},{"id":"18438"}],"height":500,"left":[{"id":"18435"}],"output_backend":"webgl","renderers":[{"id":"18461"},{"id":"18463"}],"title":{"id":"18464"},"toolbar":{"id":"18449"},"toolbar_location":null,"width":500,"x_range":{"id":"18423"},"x_scale":{"id":"18427"},"y_range":{"id":"18425"},"y_scale":{"id":"18429"}},"id":"18422","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18460","type":"Circle"},{"attributes":{"overlay":{"id":"18447"}},"id":"18441","type":"BoxZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18476"},"selection_policy":{"id":"18475"}},"id":"18458","type":"ColumnDataSource"},{"attributes":{},"id":"18427","type":"LinearScale"},{"attributes":{},"id":"18472","type":"BasicTickFormatter"},{"attributes":{},"id":"18476","type":"Selection"},{"attributes":{},"id":"18444","type":"UndoTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18448","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18459","type":"Circle"},{"attributes":{},"id":"18432","type":"BasicTicker"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"18469"},"major_label_policy":{"id":"18467"},"ticker":{"id":"18436"}},"id":"18435","type":"LinearAxis"},{"attributes":{},"id":"18467","type":"AllLabels"},{"attributes":{"axis":{"id":"18431"},"ticker":null},"id":"18434","type":"Grid"},{"attributes":{"axis":{"id":"18435"},"dimension":1,"ticker":null},"id":"18438","type":"Grid"}],"root_ids":["18481"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"7d7d186d-0fda-486c-a700-199bc6f30fad","root_ids":["18481"],"roots":{"18481":"1a581dee-c6b6-48e8-8081-c274ebfb0ac4"}}];
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