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
    
      
      
    
      var element = document.getElementById("c85c4c9c-7a8f-4301-a69c-1c8b4684e922");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c85c4c9c-7a8f-4301-a69c-1c8b4684e922' but no matching script tag was found.")
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
                    
                  var docs_json = '{"18f31545-8fe0-498b-8d4a-84a30869aed4":{"defs":[],"roots":{"references":[{"attributes":{"callback":null},"id":"36993","type":"HoverTool"},{"attributes":{},"id":"37092","type":"UnionRenderers"},{"attributes":{},"id":"37093","type":"Selection"},{"attributes":{},"id":"37070","type":"AllLabels"},{"attributes":{},"id":"37072","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"37030","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"37031","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"37050"},"glyph":{"id":"37049"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"37052"}},"id":"37051","type":"GlyphRenderer"},{"attributes":{},"id":"37094","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"36969"},0,0],[{"id":"37005"},0,1]]},"id":"37097","type":"GridBox"},{"attributes":{},"id":"37073","type":"AllLabels"},{"attributes":{},"id":"37075","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"36994","type":"BoxAnnotation"},{"attributes":{},"id":"37095","type":"Selection"},{"attributes":{},"id":"37084","type":"AllLabels"},{"attributes":{},"id":"37086","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"37046","type":"Span"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"36995","type":"PolyAnnotation"},{"attributes":{"source":{"id":"37041"}},"id":"37045","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"37047","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"37081"},"selection_policy":{"id":"37080"}},"id":"37050","type":"ColumnDataSource"},{"attributes":{"text":"tau"},"id":"37053","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37057","type":"Circle"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"37048","type":"Span"},{"attributes":{},"id":"37087","type":"AllLabels"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"37049","type":"Scatter"},{"attributes":{},"id":"37089","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"37050"}},"id":"37052","type":"CDSView"},{"attributes":{"source":{"id":"37064"}},"id":"37066","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"37060","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37056","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"37093"},"selection_policy":{"id":"37092"}},"id":"37055","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"37099"},{"id":"37097"}]},"id":"37100","type":"Column"},{"attributes":{"data_source":{"id":"37064"},"glyph":{"id":"37063"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"37066"}},"id":"37065","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"36978"}],"center":[{"id":"36981"},{"id":"36985"}],"height":500,"left":[{"id":"36982"}],"output_backend":"webgl","renderers":[{"id":"37044"},{"id":"37046"},{"id":"37047"},{"id":"37048"},{"id":"37051"}],"title":{"id":"37053"},"toolbar":{"id":"36996"},"toolbar_location":null,"width":500,"x_range":{"id":"36970"},"x_scale":{"id":"36974"},"y_range":{"id":"36972"},"y_scale":{"id":"36976"}},"id":"36969","subtype":"Figure","type":"Plot"},{"attributes":{"active_multi":null,"tools":[{"id":"36986"},{"id":"36987"},{"id":"36988"},{"id":"36989"},{"id":"36990"},{"id":"36991"},{"id":"36992"},{"id":"36993"}]},"id":"36996","type":"Toolbar"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"37061","type":"Span"},{"attributes":{"data_source":{"id":"37055"},"glyph":{"id":"37056"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37057"},"view":{"id":"37059"}},"id":"37058","type":"GlyphRenderer"},{"attributes":{"source":{"id":"37055"}},"id":"37059","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37043","type":"Circle"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"37095"},"selection_policy":{"id":"37094"}},"id":"37064","type":"ColumnDataSource"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"37089"},"major_label_policy":{"id":"37087"},"ticker":{"id":"37015"}},"id":"37014","type":"LinearAxis"},{"attributes":{"below":[{"id":"37014"}],"center":[{"id":"37017"},{"id":"37021"}],"height":500,"left":[{"id":"37018"}],"output_backend":"webgl","renderers":[{"id":"37058"},{"id":"37060"},{"id":"37061"},{"id":"37062"},{"id":"37065"}],"title":{"id":"37067"},"toolbar":{"id":"37032"},"toolbar_location":null,"width":500,"x_range":{"id":"37006"},"x_scale":{"id":"37010"},"y_range":{"id":"37008"},"y_scale":{"id":"37012"}},"id":"37005","subtype":"Figure","type":"Plot"},{"attributes":{"end":1,"start":-0.05},"id":"37008","type":"DataRange1d"},{"attributes":{},"id":"37078","type":"UnionRenderers"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"37086"},"major_label_policy":{"id":"37084"},"ticker":{"id":"37019"}},"id":"37018","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37042","type":"Circle"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"37072"},"major_label_policy":{"id":"37070"},"ticker":{"id":"36983"}},"id":"36982","type":"LinearAxis"},{"attributes":{},"id":"37010","type":"LinearScale"},{"attributes":{"text":"mu"},"id":"37067","type":"Title"},{"attributes":{},"id":"37012","type":"LinearScale"},{"attributes":{},"id":"37079","type":"Selection"},{"attributes":{"toolbars":[{"id":"36996"},{"id":"37032"}],"tools":[{"id":"36986"},{"id":"36987"},{"id":"36988"},{"id":"36989"},{"id":"36990"},{"id":"36991"},{"id":"36992"},{"id":"36993"},{"id":"37022"},{"id":"37023"},{"id":"37024"},{"id":"37025"},{"id":"37026"},{"id":"37027"},{"id":"37028"},{"id":"37029"}]},"id":"37098","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"37029","type":"HoverTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"37079"},"selection_policy":{"id":"37078"}},"id":"37041","type":"ColumnDataSource"},{"attributes":{},"id":"36970","type":"DataRange1d"},{"attributes":{},"id":"37015","type":"BasicTicker"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"37062","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"37063","type":"Scatter"},{"attributes":{"axis":{"id":"37014"},"ticker":null},"id":"37017","type":"Grid"},{"attributes":{"end":1,"start":-0.05},"id":"36972","type":"DataRange1d"},{"attributes":{},"id":"36976","type":"LinearScale"},{"attributes":{"toolbar":{"id":"37098"},"toolbar_location":"above"},"id":"37099","type":"ToolbarBox"},{"attributes":{},"id":"36974","type":"LinearScale"},{"attributes":{"axis":{"id":"37018"},"dimension":1,"ticker":null},"id":"37021","type":"Grid"},{"attributes":{"axis":{"id":"36982"},"dimension":1,"ticker":null},"id":"36985","type":"Grid"},{"attributes":{},"id":"37019","type":"BasicTicker"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"37075"},"major_label_policy":{"id":"37073"},"ticker":{"id":"36979"}},"id":"36978","type":"LinearAxis"},{"attributes":{"data_source":{"id":"37041"},"glyph":{"id":"37042"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37043"},"view":{"id":"37045"}},"id":"37044","type":"GlyphRenderer"},{"attributes":{},"id":"36992","type":"SaveTool"},{"attributes":{"overlay":{"id":"37030"}},"id":"37024","type":"BoxZoomTool"},{"attributes":{},"id":"36987","type":"PanTool"},{"attributes":{},"id":"37023","type":"PanTool"},{"attributes":{},"id":"37080","type":"UnionRenderers"},{"attributes":{},"id":"36979","type":"BasicTicker"},{"attributes":{},"id":"37022","type":"ResetTool"},{"attributes":{},"id":"37028","type":"SaveTool"},{"attributes":{},"id":"37025","type":"WheelZoomTool"},{"attributes":{},"id":"36983","type":"BasicTicker"},{"attributes":{"overlay":{"id":"37031"}},"id":"37026","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"36978"},"ticker":null},"id":"36981","type":"Grid"},{"attributes":{},"id":"37027","type":"UndoTool"},{"attributes":{},"id":"37081","type":"Selection"},{"attributes":{},"id":"37006","type":"DataRange1d"},{"attributes":{"active_multi":null,"tools":[{"id":"37022"},{"id":"37023"},{"id":"37024"},{"id":"37025"},{"id":"37026"},{"id":"37027"},{"id":"37028"},{"id":"37029"}]},"id":"37032","type":"Toolbar"},{"attributes":{"overlay":{"id":"36994"}},"id":"36988","type":"BoxZoomTool"},{"attributes":{},"id":"36991","type":"UndoTool"},{"attributes":{},"id":"36986","type":"ResetTool"},{"attributes":{},"id":"36989","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"36995"}},"id":"36990","type":"LassoSelectTool"}],"root_ids":["37100"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"18f31545-8fe0-498b-8d4a-84a30869aed4","root_ids":["37100"],"roots":{"37100":"c85c4c9c-7a8f-4301-a69c-1c8b4684e922"}}];
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