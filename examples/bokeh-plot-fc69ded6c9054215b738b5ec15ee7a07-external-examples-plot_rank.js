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
    
      
      
    
      var element = document.getElementById("a26a4d08-7881-479c-8597-a011832628d0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a26a4d08-7881-479c-8597-a011832628d0' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ffde0a36-9e33-46df-a122-1edfca631863":{"defs":[],"roots":{"references":[{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43179","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43217"},"selection_policy":{"id":"43216"}},"id":"43171","type":"ColumnDataSource"},{"attributes":{},"id":"43100","type":"LinearScale"},{"attributes":{"below":[{"id":"43070"}],"center":[{"id":"43073"},{"id":"43077"},{"id":"43136"},{"id":"43142"},{"id":"43148"},{"id":"43154"}],"height":331,"left":[{"id":"43074"}],"output_backend":"webgl","renderers":[{"id":"43134"},{"id":"43140"},{"id":"43146"},{"id":"43152"}],"title":{"id":"43157"},"toolbar":{"id":"43088"},"toolbar_location":null,"width":496,"x_range":{"id":"43062"},"x_scale":{"id":"43066"},"y_range":{"id":"43064"},"y_scale":{"id":"43068"}},"id":"43061","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"43120","type":"BoxAnnotation"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"43170","type":"Span"},{"attributes":{"axis_label":"Chain","formatter":{"id":"43189"},"major_label_policy":{"id":"43188"},"ticker":{"id":"43155"}},"id":"43074","type":"LinearAxis"},{"attributes":{"source":{"id":"43165"}},"id":"43169","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43166","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43172","type":"VBar"},{"attributes":{"data_source":{"id":"43165"},"glyph":{"id":"43166"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43167"},"view":{"id":"43169"}},"id":"43168","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"43061"},0,0],[{"id":"43097"},0,1]]},"id":"43221","type":"GridBox"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43215"},"selection_policy":{"id":"43214"}},"id":"43165","type":"ColumnDataSource"},{"attributes":{},"id":"43197","type":"UnionRenderers"},{"attributes":{},"id":"43216","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"43159"},"glyph":{"id":"43160"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43161"},"view":{"id":"43163"}},"id":"43162","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"43164","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43167","type":"VBar"},{"attributes":{},"id":"43217","type":"Selection"},{"attributes":{},"id":"43205","type":"AllLabels"},{"attributes":{},"id":"43198","type":"Selection"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"43176","type":"Span"},{"attributes":{},"id":"43206","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"43086","type":"BoxAnnotation"},{"attributes":{"ticks":[0,1,2,3]},"id":"43155","type":"FixedTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"43121","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"43149"},"glyph":{"id":"43150"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43151"},"view":{"id":"43153"}},"id":"43152","type":"GlyphRenderer"},{"attributes":{},"id":"43071","type":"BasicTicker"},{"attributes":{},"id":"43207","type":"AllLabels"},{"attributes":{},"id":"43209","type":"BasicTickFormatter"},{"attributes":{},"id":"43218","type":"UnionRenderers"},{"attributes":{},"id":"43199","type":"UnionRenderers"},{"attributes":{},"id":"43188","type":"AllLabels"},{"attributes":{},"id":"43189","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"43070"},"ticker":null},"id":"43073","type":"Grid"},{"attributes":{},"id":"43219","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"43087","type":"PolyAnnotation"},{"attributes":{},"id":"43200","type":"Selection"},{"attributes":{"callback":null},"id":"43085","type":"HoverTool"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"43192"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"43190"},"ticker":{"id":"43071"}},"id":"43070","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43196"},"selection_policy":{"id":"43195"}},"id":"43131","type":"ColumnDataSource"},{"attributes":{},"id":"43062","type":"DataRange1d"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43139","type":"VBar"},{"attributes":{},"id":"43190","type":"AllLabels"},{"attributes":{"active_multi":null,"tools":[{"id":"43078"},{"id":"43079"},{"id":"43080"},{"id":"43081"},{"id":"43082"},{"id":"43083"},{"id":"43084"},{"id":"43085"}]},"id":"43088","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43133","type":"VBar"},{"attributes":{},"id":"43192","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"43131"}},"id":"43135","type":"CDSView"},{"attributes":{},"id":"43084","type":"SaveTool"},{"attributes":{},"id":"43201","type":"UnionRenderers"},{"attributes":{},"id":"43078","type":"ResetTool"},{"attributes":{"data_source":{"id":"43131"},"glyph":{"id":"43132"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43133"},"view":{"id":"43135"}},"id":"43134","type":"GlyphRenderer"},{"attributes":{"source":{"id":"43137"}},"id":"43141","type":"CDSView"},{"attributes":{"axis":{"id":"43074"},"dimension":1,"ticker":null},"id":"43077","type":"Grid"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43160","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43138","type":"VBar"},{"attributes":{},"id":"43202","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43198"},"selection_policy":{"id":"43197"}},"id":"43137","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"43142","type":"Span"},{"attributes":{},"id":"43081","type":"WheelZoomTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43144","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43150","type":"VBar"},{"attributes":{"data_source":{"id":"43137"},"glyph":{"id":"43138"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43139"},"view":{"id":"43141"}},"id":"43140","type":"GlyphRenderer"},{"attributes":{},"id":"43068","type":"LinearScale"},{"attributes":{"axis":{"id":"43104"},"ticker":null},"id":"43107","type":"Grid"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"43148","type":"Span"},{"attributes":{"overlay":{"id":"43086"}},"id":"43080","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"43119","type":"HoverTool"},{"attributes":{"source":{"id":"43143"}},"id":"43147","type":"CDSView"},{"attributes":{"below":[{"id":"43104"}],"center":[{"id":"43107"},{"id":"43111"},{"id":"43164"},{"id":"43170"},{"id":"43176"},{"id":"43182"}],"height":331,"left":[{"id":"43108"}],"output_backend":"webgl","renderers":[{"id":"43162"},{"id":"43168"},{"id":"43174"},{"id":"43180"}],"title":{"id":"43185"},"toolbar":{"id":"43122"},"toolbar_location":null,"width":496,"x_range":{"id":"43062"},"x_scale":{"id":"43100"},"y_range":{"id":"43064"},"y_scale":{"id":"43102"}},"id":"43097","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Chain","formatter":{"id":"43206"},"major_label_policy":{"id":"43205"},"ticker":{"id":"43183"}},"id":"43108","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43200"},"selection_policy":{"id":"43199"}},"id":"43143","type":"ColumnDataSource"},{"attributes":{},"id":"43102","type":"LinearScale"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"43209"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"43207"},"ticker":{"id":"43105"}},"id":"43104","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43145","type":"VBar"},{"attributes":{},"id":"43105","type":"BasicTicker"},{"attributes":{"data_source":{"id":"43143"},"glyph":{"id":"43144"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43145"},"view":{"id":"43147"}},"id":"43146","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"43136","type":"Span"},{"attributes":{},"id":"43212","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43178","type":"VBar"},{"attributes":{"axis":{"id":"43108"},"dimension":1,"ticker":null},"id":"43111","type":"Grid"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43173","type":"VBar"},{"attributes":{},"id":"43079","type":"PanTool"},{"attributes":{"text":"mu"},"id":"43185","type":"Title"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43202"},"selection_policy":{"id":"43201"}},"id":"43149","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43132","type":"VBar"},{"attributes":{},"id":"43213","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43151","type":"VBar"},{"attributes":{"overlay":{"id":"43120"}},"id":"43114","type":"BoxZoomTool"},{"attributes":{},"id":"43064","type":"DataRange1d"},{"attributes":{},"id":"43113","type":"PanTool"},{"attributes":{"source":{"id":"43177"}},"id":"43181","type":"CDSView"},{"attributes":{},"id":"43112","type":"ResetTool"},{"attributes":{"source":{"id":"43171"}},"id":"43175","type":"CDSView"},{"attributes":{"text":"tau"},"id":"43157","type":"Title"},{"attributes":{"ticks":[0,1,2,3]},"id":"43183","type":"FixedTicker"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"43182","type":"Span"},{"attributes":{},"id":"43118","type":"SaveTool"},{"attributes":{"data_source":{"id":"43171"},"glyph":{"id":"43172"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43173"},"view":{"id":"43175"}},"id":"43174","type":"GlyphRenderer"},{"attributes":{},"id":"43115","type":"WheelZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43219"},"selection_policy":{"id":"43218"}},"id":"43177","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"43121"}},"id":"43116","type":"LassoSelectTool"},{"attributes":{},"id":"43117","type":"UndoTool"},{"attributes":{"data_source":{"id":"43177"},"glyph":{"id":"43178"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43179"},"view":{"id":"43181"}},"id":"43180","type":"GlyphRenderer"},{"attributes":{},"id":"43083","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"43112"},{"id":"43113"},{"id":"43114"},{"id":"43115"},{"id":"43116"},{"id":"43117"},{"id":"43118"},{"id":"43119"}]},"id":"43122","type":"Toolbar"},{"attributes":{},"id":"43066","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43161","type":"VBar"},{"attributes":{},"id":"43214","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"43154","type":"Span"},{"attributes":{"toolbars":[{"id":"43088"},{"id":"43122"}],"tools":[{"id":"43078"},{"id":"43079"},{"id":"43080"},{"id":"43081"},{"id":"43082"},{"id":"43083"},{"id":"43084"},{"id":"43085"},{"id":"43112"},{"id":"43113"},{"id":"43114"},{"id":"43115"},{"id":"43116"},{"id":"43117"},{"id":"43118"},{"id":"43119"}]},"id":"43222","type":"ProxyToolbar"},{"attributes":{"children":[{"id":"43223"},{"id":"43221"}]},"id":"43224","type":"Column"},{"attributes":{"overlay":{"id":"43087"}},"id":"43082","type":"LassoSelectTool"},{"attributes":{},"id":"43195","type":"UnionRenderers"},{"attributes":{"source":{"id":"43159"}},"id":"43163","type":"CDSView"},{"attributes":{"toolbar":{"id":"43222"},"toolbar_location":"above"},"id":"43223","type":"ToolbarBox"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43213"},"selection_policy":{"id":"43212"}},"id":"43159","type":"ColumnDataSource"},{"attributes":{},"id":"43215","type":"Selection"},{"attributes":{},"id":"43196","type":"Selection"},{"attributes":{"source":{"id":"43149"}},"id":"43153","type":"CDSView"}],"root_ids":["43224"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"ffde0a36-9e33-46df-a122-1edfca631863","root_ids":["43224"],"roots":{"43224":"a26a4d08-7881-479c-8597-a011832628d0"}}];
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