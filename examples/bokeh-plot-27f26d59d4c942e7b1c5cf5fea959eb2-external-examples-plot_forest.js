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
    
      
      
    
      var element = document.getElementById("5d1a1d96-d0ec-4e2f-92ea-14c6a16754d5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5d1a1d96-d0ec-4e2f-92ea-14c6a16754d5' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6efeb557-f299-4ba5-9aa1-cdf70286fc80":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18744","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18579","type":"Line"},{"attributes":{"source":{"id":"18667"}},"id":"18671","type":"CDSView"},{"attributes":{},"id":"18739","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"18573","type":"Circle"},{"attributes":{"source":{"id":"18602"}},"id":"18606","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"18604","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18664","type":"Circle"},{"attributes":{"source":{"id":"18622"}},"id":"18626","type":"CDSView"},{"attributes":{"source":{"id":"18567"}},"id":"18571","type":"CDSView"},{"attributes":{},"id":"18737","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18613","type":"Line"},{"attributes":{"source":{"id":"18647"}},"id":"18651","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18629","type":"Line"},{"attributes":{"source":{"id":"18592"}},"id":"18596","type":"CDSView"},{"attributes":{},"id":"18531","type":"LinearScale"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18578","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18644","type":"Line"},{"attributes":{"source":{"id":"18577"}},"id":"18581","type":"CDSView"},{"attributes":{},"id":"18717","type":"UnionRenderers"},{"attributes":{},"id":"18738","type":"Selection"},{"attributes":{},"id":"18746","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"18574","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18628","type":"Line"},{"attributes":{"source":{"id":"18632"}},"id":"18636","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18648","type":"Circle"},{"attributes":{},"id":"18745","type":"UnionRenderers"},{"attributes":{"source":{"id":"18627"}},"id":"18631","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"18746"},"selection_policy":{"id":"18745"}},"id":"18677","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18612"},"glyph":{"id":"18613"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18614"},"view":{"id":"18616"}},"id":"18615","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18678","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18614","type":"Line"},{"attributes":{"data_source":{"id":"18567"},"glyph":{"id":"18568"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18569"},"view":{"id":"18571"}},"id":"18570","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18624","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18674","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18633","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18609","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18654","type":"Line"},{"attributes":{},"id":"18721","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"18714"},"selection_policy":{"id":"18713"}},"id":"18597","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"18726"},"selection_policy":{"id":"18725"}},"id":"18627","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"18738"},"selection_policy":{"id":"18737"}},"id":"18657","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18642"}},"id":"18646","type":"CDSView"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"18732"},"selection_policy":{"id":"18731"}},"id":"18642","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18652"}},"id":"18656","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18649","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18598","type":"Line"},{"attributes":{},"id":"18742","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"18619","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18638","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18669","type":"Line"},{"attributes":{},"id":"18741","type":"UnionRenderers"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"18565"},{"id":"18570"},{"id":"18575"},{"id":"18580"},{"id":"18585"},{"id":"18590"},{"id":"18595"},{"id":"18600"},{"id":"18605"},{"id":"18610"},{"id":"18615"},{"id":"18620"}]},"id":"18689","type":"LegendItem"},{"attributes":{"data_source":{"id":"18597"},"glyph":{"id":"18598"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18599"},"view":{"id":"18601"}},"id":"18600","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"18702"},"selection_policy":{"id":"18701"}},"id":"18567","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18662"},"glyph":{"id":"18663"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18664"},"view":{"id":"18666"}},"id":"18665","type":"GlyphRenderer"},{"attributes":{},"id":"18718","type":"Selection"},{"attributes":{},"id":"18743","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18647"},"glyph":{"id":"18648"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18649"},"view":{"id":"18651"}},"id":"18650","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18607"}},"id":"18611","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18653","type":"Line"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"18736"},"selection_policy":{"id":"18735"}},"id":"18652","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18663","type":"Circle"},{"attributes":{"children":[[{"id":"18526"},0,0]]},"id":"18748","type":"GridBox"},{"attributes":{},"id":"18699","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"18722"},"selection_policy":{"id":"18721"}},"id":"18617","type":"ColumnDataSource"},{"attributes":{},"id":"18700","type":"Selection"},{"attributes":{"data_source":{"id":"18632"},"glyph":{"id":"18633"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18634"},"view":{"id":"18636"}},"id":"18635","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18572"}},"id":"18576","type":"CDSView"},{"attributes":{"data_source":{"id":"18602"},"glyph":{"id":"18603"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18604"},"view":{"id":"18606"}},"id":"18605","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18672"},"glyph":{"id":"18673"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18674"},"view":{"id":"18676"}},"id":"18675","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18718"},"selection_policy":{"id":"18717"}},"id":"18607","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18637"},"glyph":{"id":"18638"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18639"},"view":{"id":"18641"}},"id":"18640","type":"GlyphRenderer"},{"attributes":{},"id":"18722","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18569","type":"Line"},{"attributes":{"source":{"id":"18597"}},"id":"18601","type":"CDSView"},{"attributes":{"data_source":{"id":"18677"},"glyph":{"id":"18678"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18679"},"view":{"id":"18681"}},"id":"18680","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18612"}},"id":"18616","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"18728"},"selection_policy":{"id":"18727"}},"id":"18632","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18623","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18658","type":"Line"},{"attributes":{"data_source":{"id":"18617"},"glyph":{"id":"18618"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18619"},"view":{"id":"18621"}},"id":"18620","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18668","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18716"},"selection_policy":{"id":"18715"}},"id":"18602","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18677"}},"id":"18681","type":"CDSView"},{"attributes":{"toolbars":[{"id":"18553"}],"tools":[{"id":"18543"},{"id":"18544"},{"id":"18545"},{"id":"18546"},{"id":"18547"},{"id":"18548"},{"id":"18549"},{"id":"18550"}]},"id":"18749","type":"ProxyToolbar"},{"attributes":{"click_policy":"hide","items":[{"id":"18689"},{"id":"18690"}],"location":"top_left"},"id":"18688","type":"Legend"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"18724"},"selection_policy":{"id":"18723"}},"id":"18622","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"18744"},"selection_policy":{"id":"18743"}},"id":"18672","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18657"},"glyph":{"id":"18658"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18659"},"view":{"id":"18661"}},"id":"18660","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"18625"},{"id":"18630"},{"id":"18635"},{"id":"18640"},{"id":"18645"},{"id":"18650"},{"id":"18655"},{"id":"18660"},{"id":"18665"},{"id":"18670"},{"id":"18675"},{"id":"18680"}]},"id":"18690","type":"LegendItem"},{"attributes":{},"id":"18720","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"18618","type":"Circle"},{"attributes":{"source":{"id":"18672"}},"id":"18676","type":"CDSView"},{"attributes":{},"id":"18736","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18679","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18568","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18740"},"selection_policy":{"id":"18739"}},"id":"18662","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18639","type":"Line"},{"attributes":{"data_source":{"id":"18622"},"glyph":{"id":"18623"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18624"},"view":{"id":"18626"}},"id":"18625","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18673","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18643","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18734"},"selection_policy":{"id":"18733"}},"id":"18647","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18599","type":"Line"},{"attributes":{"source":{"id":"18657"}},"id":"18661","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18659","type":"Line"},{"attributes":{},"id":"18719","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18608","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"18603","type":"Circle"},{"attributes":{"source":{"id":"18637"}},"id":"18641","type":"CDSView"},{"attributes":{"source":{"id":"18662"}},"id":"18666","type":"CDSView"},{"attributes":{"data_source":{"id":"18572"},"glyph":{"id":"18573"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18574"},"view":{"id":"18576"}},"id":"18575","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18642"},"glyph":{"id":"18643"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18644"},"view":{"id":"18646"}},"id":"18645","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18720"},"selection_policy":{"id":"18719"}},"id":"18612","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"18742"},"selection_policy":{"id":"18741"}},"id":"18667","type":"ColumnDataSource"},{"attributes":{},"id":"18735","type":"UnionRenderers"},{"attributes":{},"id":"18740","type":"Selection"},{"attributes":{"data_source":{"id":"18667"},"glyph":{"id":"18668"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18669"},"view":{"id":"18671"}},"id":"18670","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"18704"},"selection_policy":{"id":"18703"}},"id":"18572","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18634","type":"Circle"},{"attributes":{"ticks":[1.275]},"id":"18686","type":"FixedTicker"},{"attributes":{"axis":{"id":"18539"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"18542","type":"Grid"},{"attributes":{"overlay":{"id":"18551"}},"id":"18545","type":"BoxZoomTool"},{"attributes":{},"id":"18694","type":"AllLabels"},{"attributes":{},"id":"18708","type":"Selection"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"18712"},"selection_policy":{"id":"18711"}},"id":"18592","type":"ColumnDataSource"},{"attributes":{},"id":"18533","type":"LinearScale"},{"attributes":{"toolbar":{"id":"18749"},"toolbar_location":"above"},"id":"18750","type":"ToolbarBox"},{"attributes":{},"id":"18715","type":"UnionRenderers"},{"attributes":{},"id":"18731","type":"UnionRenderers"},{"attributes":{"text":"94.0% HDI"},"id":"18682","type":"Title"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"18700"},"selection_policy":{"id":"18699"}},"id":"18562","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"18535"},"ticker":null},"id":"18538","type":"Grid"},{"attributes":{"data_source":{"id":"18582"},"glyph":{"id":"18583"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18584"},"view":{"id":"18586"}},"id":"18585","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18562"}},"id":"18566","type":"CDSView"},{"attributes":{"data_source":{"id":"18592"},"glyph":{"id":"18593"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18594"},"view":{"id":"18596"}},"id":"18595","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"18706"},"selection_policy":{"id":"18705"}},"id":"18577","type":"ColumnDataSource"},{"attributes":{},"id":"18709","type":"UnionRenderers"},{"attributes":{"bounds":"auto","min_interval":1},"id":"18684","type":"DataRange1d"},{"attributes":{},"id":"18730","type":"Selection"},{"attributes":{},"id":"18713","type":"UnionRenderers"},{"attributes":{},"id":"18546","type":"WheelZoomTool"},{"attributes":{},"id":"18723","type":"UnionRenderers"},{"attributes":{"children":[{"id":"18750"},{"id":"18748"}]},"id":"18751","type":"Column"},{"attributes":{"data_source":{"id":"18627"},"glyph":{"id":"18628"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18629"},"view":{"id":"18631"}},"id":"18630","type":"GlyphRenderer"},{"attributes":{},"id":"18734","type":"Selection"},{"attributes":{},"id":"18710","type":"Selection"},{"attributes":{"above":[{"id":"18688"}],"below":[{"id":"18535"}],"center":[{"id":"18538"},{"id":"18542"}],"height":348,"left":[{"id":"18539"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"18565"},{"id":"18570"},{"id":"18575"},{"id":"18580"},{"id":"18585"},{"id":"18590"},{"id":"18595"},{"id":"18600"},{"id":"18605"},{"id":"18610"},{"id":"18615"},{"id":"18620"},{"id":"18625"},{"id":"18630"},{"id":"18635"},{"id":"18640"},{"id":"18645"},{"id":"18650"},{"id":"18655"},{"id":"18660"},{"id":"18665"},{"id":"18670"},{"id":"18675"},{"id":"18680"}],"title":{"id":"18682"},"toolbar":{"id":"18553"},"toolbar_location":null,"width":450,"x_range":{"id":"18684"},"x_scale":{"id":"18531"},"y_range":{"id":"18685"},"y_scale":{"id":"18533"}},"id":"18526","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18701","type":"UnionRenderers"},{"attributes":{},"id":"18706","type":"Selection"},{"attributes":{},"id":"18707","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"18550","type":"HoverTool"},{"attributes":{"formatter":{"id":"18693"},"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"18692"},"ticker":{"id":"18686"}},"id":"18539","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"18588","type":"Circle"},{"attributes":{},"id":"18702","type":"Selection"},{"attributes":{},"id":"18733","type":"UnionRenderers"},{"attributes":{},"id":"18544","type":"PanTool"},{"attributes":{},"id":"18725","type":"UnionRenderers"},{"attributes":{},"id":"18703","type":"UnionRenderers"},{"attributes":{},"id":"18705","type":"UnionRenderers"},{"attributes":{"source":{"id":"18617"}},"id":"18621","type":"CDSView"},{"attributes":{},"id":"18716","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18563","type":"Line"},{"attributes":{"formatter":{"id":"18696"},"major_label_policy":{"id":"18694"},"ticker":{"id":"18536"}},"id":"18535","type":"LinearAxis"},{"attributes":{},"id":"18726","type":"Selection"},{"attributes":{},"id":"18711","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"18552"}},"id":"18547","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18551","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18584","type":"Line"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18552","type":"PolyAnnotation"},{"attributes":{},"id":"18724","type":"Selection"},{"attributes":{"data_source":{"id":"18577"},"glyph":{"id":"18578"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18579"},"view":{"id":"18581"}},"id":"18580","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18583","type":"Line"},{"attributes":{},"id":"18692","type":"AllLabels"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"18685","type":"DataRange1d"},{"attributes":{"data_source":{"id":"18587"},"glyph":{"id":"18588"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18589"},"view":{"id":"18591"}},"id":"18590","type":"GlyphRenderer"},{"attributes":{},"id":"18728","type":"Selection"},{"attributes":{"data_source":{"id":"18562"},"glyph":{"id":"18563"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18564"},"view":{"id":"18566"}},"id":"18565","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"18710"},"selection_policy":{"id":"18709"}},"id":"18587","type":"ColumnDataSource"},{"attributes":{},"id":"18549","type":"SaveTool"},{"attributes":{},"id":"18536","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18564","type":"Line"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"18730"},"selection_policy":{"id":"18729"}},"id":"18637","type":"ColumnDataSource"},{"attributes":{},"id":"18714","type":"Selection"},{"attributes":{},"id":"18693","type":"BasicTickFormatter"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"18708"},"selection_policy":{"id":"18707"}},"id":"18582","type":"ColumnDataSource"},{"attributes":{},"id":"18543","type":"ResetTool"},{"attributes":{"data_source":{"id":"18607"},"glyph":{"id":"18608"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18609"},"view":{"id":"18611"}},"id":"18610","type":"GlyphRenderer"},{"attributes":{},"id":"18696","type":"BasicTickFormatter"},{"attributes":{},"id":"18548","type":"UndoTool"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18593","type":"Line"},{"attributes":{"data_source":{"id":"18652"},"glyph":{"id":"18653"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18654"},"view":{"id":"18656"}},"id":"18655","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18594","type":"Line"},{"attributes":{},"id":"18727","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"18543"},{"id":"18544"},{"id":"18545"},{"id":"18546"},{"id":"18547"},{"id":"18548"},{"id":"18549"},{"id":"18550"}]},"id":"18553","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"18589","type":"Circle"},{"attributes":{"source":{"id":"18587"}},"id":"18591","type":"CDSView"},{"attributes":{},"id":"18704","type":"Selection"},{"attributes":{},"id":"18732","type":"Selection"},{"attributes":{"source":{"id":"18582"}},"id":"18586","type":"CDSView"},{"attributes":{},"id":"18712","type":"Selection"},{"attributes":{},"id":"18729","type":"UnionRenderers"}],"root_ids":["18751"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"6efeb557-f299-4ba5-9aa1-cdf70286fc80","root_ids":["18751"],"roots":{"18751":"5d1a1d96-d0ec-4e2f-92ea-14c6a16754d5"}}];
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