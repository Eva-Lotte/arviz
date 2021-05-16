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
    
      
      
    
      var element = document.getElementById("4d80ca94-2229-4197-8a44-2bf50821b34f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4d80ca94-2229-4197-8a44-2bf50821b34f' but no matching script tag was found.")
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
                    
                  var docs_json = '{"90868979-6d80-40ff-8105-58ef63468b3b":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21055","type":"Title"},{"attributes":{},"id":"21025","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21027","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"21011"}],"center":[{"id":"21014"},{"id":"21018"}],"height":500,"left":[{"id":"21015"}],"output_backend":"webgl","renderers":[{"id":"21041"},{"id":"21046"},{"id":"21051"}],"title":{"id":"21055"},"toolbar":{"id":"21029"},"toolbar_location":null,"width":500,"x_range":{"id":"21053"},"x_scale":{"id":"21007"},"y_range":{"id":"21054"},"y_scale":{"id":"21009"}},"id":"21002","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"21059"},"major_label_policy":{"id":"21057"},"ticker":{"id":"21016"}},"id":"21015","type":"LinearAxis"},{"attributes":{"toolbars":[{"id":"21029"}],"tools":[{"id":"21019"},{"id":"21020"},{"id":"21021"},{"id":"21022"},{"id":"21023"},{"id":"21024"},{"id":"21025"},{"id":"21026"}]},"id":"21073","type":"ProxyToolbar"},{"attributes":{"end":6.565748810065194,"start":-2.46515922776476},"id":"21054","type":"Range1d"},{"attributes":{},"id":"21068","type":"Selection"},{"attributes":{},"id":"21069","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"21027"}},"id":"21021","type":"BoxZoomTool"},{"attributes":{"toolbar":{"id":"21073"},"toolbar_location":"above"},"id":"21074","type":"ToolbarBox"},{"attributes":{},"id":"21057","type":"AllLabels"},{"attributes":{"source":{"id":"21038"}},"id":"21042","type":"CDSView"},{"attributes":{"children":[{"id":"21074"},{"id":"21072"}]},"id":"21075","type":"Column"},{"attributes":{"axis":{"id":"21011"},"grid_line_color":null,"ticker":null},"id":"21014","type":"Grid"},{"attributes":{},"id":"21060","type":"AllLabels"},{"attributes":{},"id":"21062","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"21015"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"21018","type":"Grid"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21044","type":"Patch"},{"attributes":{},"id":"21020","type":"PanTool"},{"attributes":{},"id":"21012","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"oKfRkNXhsj8aR+0yk2OtP/nuZJkCBKg/SN8MOMPlpD9dqEALhIeiPyph8UHA06E/6JMRx+zzpD//ksqOjJWpP7CRjSx/660/+Foxd7smsj8AcOAkxZW2P2C2oNwfebg/ekkVwCRsuz/TPREygU/AP/DfrglBmcM/0O2ZkLsqxj9xSVY59MnIP3PjOe+a2s4/OMBxmXMM0D8CMQtoB7XRP4nrIPptUtM/iImWaokD1T91Z+6fQDvVP8BpowXh9Nc/2FK7O5/62T8ki5Tt+VzbP8VMxPMo294/KBzgDLXx3j/9vTBRwyvhP7xyAm9l9OE/7u6W3f4L4z9g15RX8G/kP/KaqfH5BeU/CDwnQHvr5j9wDn8KlCXnP4qtUlwEQ+k/sKC5KAZn6T+cdRt7d37rP1gFTBGR4us/kLnEEIv87T8Aat75G17uP9xmMADTNvA/VGc4cdNs8D8o0yMSgG7xP6iZgeWYqvE/LUbYvXHC8j/8y8pZXujyP1D+E84jJvQ/aMNpeaQ39D+kMF1C6WP1P3uRBHhjHPY/+GKmtq6h9j9Mle8qdN/3P01VUbehTPg/oMc4nzkd+T9dOefaWi36P/T5gRP/Wvo/SCzLh8SY+z/OSuCCk3f8P5xeFPyJ1vw/8JBdcE8U/j8CQ0dLoZT+P0TDpuQUUv8/zPp3LO1HAEC3P+c1HFUAQPaTnObP5gBAIC3BoLKFAUBHEjuXvv8BQErG5VqVJAJAdF8KFXjDAkCe+C7PWmIDQMiRU4k9AQRAl6wLolZXBEDyKnhDIKAEQBzEnP0CPwVARl3Bt+XdBUBw9uVxyHwGQJqPCiyrGwdAxCgv5o26B0DuwVOgcFkIQBhbeFpT+AhAQvScFDaXCUBsjcHOGDYKQFS7tW/5ggpAlibmiPvUCkDAvwpD3nMLQMT6oSxY8QtA6lgv/cASDEAU8lO3o7EMQIHUwKaI/QxAPot4cYZQDUBaj2plBbkNQGgknStp7w1AsiWYBwxlDkCSvcHlS44OQHisKf4I6Q5AvFbmny4tD0ClWhgg20UPQHZ1FH1eoA9A5u8KWhHMD0BqBE/sCOQPQA+POjjnARBAznXr3IwLEEBlZiWbOBgQQDDezEo/JhBA+mlNnIsxEECIxBcKejUQQEYUbDv1LxBApCWRTOIiEECPvCtHaQ8QQM4CUKAh9Q9AzuIm/NvND0Dm7wpaEcwPQDDn1pwHqA9AGnqfCsmAD0AI+rCqy1YPQLxW5p8uLQ9AhoAQsygnD0AwGbsT0vIOQIjKVB1ttw5Akr3B5UuODkAAiPm9cW0OQNyWXnv0EA5AaCSdK2nvDUCQDFtjbKcNQD6LeHGGUA1AcE2g35ZADUAmc1l2wecMQBTyU7ejsQxAPUJxOPiKDEA49QRmBxoMQOtYL/3AEgxAvmSy7U+PC0DAvwpD3nMLQHCNOGosBQtAlibmiPvUCkDWewN5cYcKQGyNwc4YNgpA37c/sgMFCkBC9JwUNpcJQB5KuUNcbglAGFt4WlP4CEDsIlHEL8YIQO7BU6BwWQhAREPuGoMbCEDEKC/mjboHQLRs7DRBbAdAmo8KLKsbB0D/XBG41bAGQHD25XHIfAZAeIAY2K/0BUBGXcG35d0FQBzEnP0CPwVAZlSoZBYtBUDyKnhDIKAEQFYg7G4OEwRAyJFTiT0BBECe+C7PWmIDQPIQHLmxHANAdF8KFXjDAkBKxuValSQCQNM1Wi5oGQJAIC3BoLKFAUAj7Lhrr/gAQPaTnObP5gBAzPp3LO1HAEBEw6bkFFL/P77taMj4df4/8JBdcE8U/j+cXhT8idb8P0gsy4fEmPs/L6NPUKCf+j/1+YET/1r6P6DHOJ85Hfk/TJXvKnTf9z/4Yqa2rqH2P6QwXULpY/U/NDJUfhks9D9P/hPOIyb0P/zLylle6PI/qJmB5Ziq8T/S5lC3zlzxP1RnOHHTbPA/AGre+Rte7j9YBUwRkeLrP7CguSgGZ+k//NRg1RYw5z8IPCdAe+vmP2DXlFfwb+Q/vHICb2X04T85EO6Z8PbgPygc4Ay18d4/O1y9MlWW2j/YUrs7n/rZP4iJlmqJA9U/652/gDWG1D/VOgIE2UXQPzjAcZlzDNA/YKOJh+M5yj/Q7ZmQuyrGPz5zv6HFc8U/6I/8/1DSwD/x1l04BlS5P2C2oNwfebg/oKfRkNXhsj+omYHlmKrxP2pplpivT/I//MvKWV7o8j8LicCboe/zP1D+E84jJvQ/pDBdQulj9T/1lADW03v1P/hiprauofY/TJXvKnTf9z+gxzifOR35P/T5gRP/Wvo/SCzLh8SY+z+cXhT8idb8PxJ/WquWn/0/8JBdcE8U/j9Ew6bkFFL/P8z6dyztRwBAZA83wGF7AED2k5zmz+YAQCAtwaCyhQFAwMZJjC6uAUBKxuValSQCQI/kBG5YjgJAdF8KFXjDAkB+Xoq2TFkDQJ74Ls9aYgNAyJFTiT0BBECUwCFOmRoEQPIqeEMgoARAVPaChybFBEAcxJz9Aj8FQFvHpYvlVAVA1xtx+inTBUBGXcG35d0FQBBePEibSQZAcPblcch8BkAV0vEKM7YGQKVs0/e8EQdAmo8KLKsbB0BktN+hfFwHQKewhUFUoQdAxCgv5o26B0Bs4SyYAd8HQEQHB/YhDwhAP3ySvwArCEB4D84AOjYIQGgXtmAzOQhAUSqlVNU1CEBIKeEPayUIQHRKYy2vCAhAV4uDHt3SB0DEKC/mjboHQA6iDkKiMQdAmo8KLKsbB0Bw9uVxyHwGQJ3Cg4XeEAZARl3Bt+XdBUAcxJz9Aj8FQPIqeEMgoARAx5FTiT0BBECe+C7PWmIDQHRfChV4wwJASsblWpUkAkAgLcGgsoUBQImYud6e+gBA9pOc5s/mAEDM+ncs7UcAQETDpuQUUv8/KFop+KUr/z/wkF1wTxT+P80I4aXp+fw/nF4U/InW/D9ILMuHxJj7P22c7hUiAfs/9PmBE/9a+j/GaVuEvHn5P5/HOJ85Hfk/apoo4ndH+D9Mle8qdN/3PwaLnFYSKPc/+GKmtq6h9j+qHGGUmRL2P6QwXULpY/U/qmbRlIsO9T9Q/hPOIyb0P22rK/NCYvM//MvKWV7o8j9fmy+t1KTyP6Dom1t/BPI/qJmB5Ziq8T+/FLPFvYjxP5R5J6QPK/E/attGvara8D+JUSm17pfwPwcgj6s/fPA/FMLh0Y2H8D9eviUCBKDwP+YwIqq90PA/53XOg1RE8T+omYHlmKrxPw==","dtype":"float64","order":"little","shape":[305]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[305]}},"selected":{"id":"21068"},"selection_policy":{"id":"21067"}},"id":"21043","type":"ColumnDataSource"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21049","type":"Patch"},{"attributes":{"children":[[{"id":"21002"},0,0]]},"id":"21072","type":"GridBox"},{"attributes":{},"id":"21007","type":"LinearScale"},{"attributes":{},"id":"21066","type":"Selection"},{"attributes":{"data_source":{"id":"21048"},"glyph":{"id":"21049"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21050"},"view":{"id":"21052"}},"id":"21051","type":"GlyphRenderer"},{"attributes":{},"id":"21059","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21050","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21040","type":"Patch"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21028","type":"PolyAnnotation"},{"attributes":{},"id":"21024","type":"UndoTool"},{"attributes":{"overlay":{"id":"21028"}},"id":"21023","type":"LassoSelectTool"},{"attributes":{"end":6.7675543367069855,"start":-3.085218079140989},"id":"21053","type":"Range1d"},{"attributes":{},"id":"21070","type":"Selection"},{"attributes":{"callback":null},"id":"21026","type":"HoverTool"},{"attributes":{},"id":"21009","type":"LinearScale"},{"attributes":{"data_source":{"id":"21038"},"glyph":{"id":"21039"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21040"},"view":{"id":"21042"}},"id":"21041","type":"GlyphRenderer"},{"attributes":{"source":{"id":"21043"}},"id":"21047","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"53XOg1RE8T/mMCKqvdDwP16+JQIEoPA/FMLh0Y2H8D8HII+rP3zwP4lRKbXul/A/adtGvara8D+TeSekDyvxP78Us8W9iPE/qJmB5Ziq8T+g6JtbfwTyP1+bL63UpPI//MvKWV7o8j9tqyvzQmLzP1D+E84jJvQ/qmbRlIsO9T+kMF1C6WP1P6ocYZSZEvY/+GKmtq6h9j8Gi5xWEij3P0yV7yp03/c/apoo4ndH+D+gxzifOR35P8ZpW4S8efk/9PmBE/9a+j9tnO4VIgH7P0gsy4fEmPs/nF4U/InW/D/MCOGl6fn8P/CQXXBPFP4/KVop+KUr/z9Ew6bkFFL/P8z6dyztRwBA9pOc5s/mAECJmLnenvoAQCAtwaCyhQFASsblWpUkAkB0XwoVeMMCQJ74Ls9aYgNAyJFTiT0BBEDyKnhDIKAEQBzEnP0CPwVARl3Bt+XdBUCdwoOF3hAGQHD25XHIfAZAmo8KLKsbB0AOog5CojEHQMQoL+aNugdAV4uDHt3SB0B0SmMtrwgIQEgp4Q9rJQhAUCqlVNU1CEBoF7ZgMzkIQHgPzgA6NghAP3ySvwArCEBEBwf2IQ8IQGvhLJgB3wdAxCgv5o26B0CnsIVBVKEHQGS036F8XAdAmo8KLKsbB0CkbNP3vBEHQBXS8QoztgZAcPblcch8BkAQXjxIm0kGQEZdwbfl3QVA1htx+inTBUBbx6WL5VQFQBzEnP0CPwVAVPaChybFBEDyKnhDIKAEQJTAIU6ZGgRAyJFTiT0BBECe+C7PWmIDQH5eirZMWQNAdF8KFXjDAkCO5ARuWI4CQErG5VqVJAJAwcZJjC6uAUAgLcGgsoUBQPaTnObP5gBAYw83wGF7AEDM+ncs7UcAQETDpuQUUv8/8JBdcE8U/j8Sf1qrlp/9P5xeFPyJ1vw/SCzLh8SY+z/0+YET/1r6P6DHOJ85Hfk/TJXvKnTf9z/4Yqa2rqH2P/SUANbTe/U/pDBdQulj9T9Q/hPOIyb0PwqJwJuh7/M//MvKWV7o8j9qaZaYr0/yP6iZgeWYqvE/53XOg1RE8T8=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"nCtDf/7+9T/8PpI5QiL3P1xS4fOFRfg/vGUwrslo+T8ceX9oDYz6P3yMziJRr/s/2J8d3ZTS/D84s2yX2PX9P5jGu1EcGf8/W8vCEJZo/z/8bAUGMB4AQKz2LOPRrwBA1IdKSY/lAEBcgFTAc0EBQAwKfJ0V0wFAvJOjerdkAkDCGCvMzJMCQGwdy1dZ9gJAulez2Uo/A0Aap/I0+4cDQA7SsF+J5ANAyjAaEp0ZBEAUKbRIZIMEQHq6Qe8+qwRABDcAqsAHBUAqRGnM4DwFQPMd1iPaawVAVPnk4s/EBUDazZCpgs4FQMwiqCS+HAZAile4hiRgBkC2Yu4u7WkGQMlkcPNHrgZAWbQfdmbqBkA64d9jxvEGQJpe1v4DJQdABtodkKpQB0CvqtWhcmsHQLseOLUCewdARf2OquZ9B0AuCxLIb2MHQPhCb/duNgdA6MccbrMHB0A64d9jxvEGQE2cEV9ZxQZAaZ185sdtBkCKV7iGJGAGQHwMq4bF6wVA2s2QqYLOBUAqRGnM4DwFQHq6Qe8+qwRAyjAaEp0ZBEAap/I0+4cDQGwdy1dZ9gJAvJOjerdkAkAMCnydFdMBQFyAVMBzQQFAEXnSc7DrAECs9izj0a8AQPxsBQYwHgBAQvM4wk4+/z+YxrtRHBn/PzizbJfY9f0/Tk7FzMBa/T/Ynx3dlNL8P0S6rjh+yvs/fIzOIlGv+z8ceX9oDYz6P7rmCA4hXfo/vGUwrslo+T8k1qU22yP5P1xS4fOFRfg/Ej0h7v8b+D8l+ngb3C73P/w+kjlCIvc/2v8iMjtK9j+cK0N//v71P3bPiaujb/U/Phj0xLrb9D+kol5g4qz0P51/U7BNEfQ/3gSlCne48z9IncKVCZDzP1nKegL/F/M/70anCYmt8j9+8VVQM5XyP2J+PZCGa/I/EnbVzWhH8j8ml7LDzSXyPz4/PbuoAPI/FhUkipHq8T80Z3GdkRHyP37xVVAzlfI/24mD3P6h8j93AesSlozzP94EpQp3uPM/oeKzel5w9D8+GPTEutv0P6S+HDmSdvU/nCtDf/7+9T8=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"21070"},"selection_policy":{"id":"21069"}},"id":"21048","type":"ColumnDataSource"},{"attributes":{},"id":"21016","type":"BasicTicker"},{"attributes":{},"id":"21022","type":"WheelZoomTool"},{"attributes":{},"id":"21019","type":"ResetTool"},{"attributes":{"formatter":{"id":"21062"},"major_label_policy":{"id":"21060"},"ticker":{"id":"21012"}},"id":"21011","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[517]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[517]}},"selected":{"id":"21066"},"selection_policy":{"id":"21065"}},"id":"21038","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"21043"},"glyph":{"id":"21044"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21045"},"view":{"id":"21047"}},"id":"21046","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21045","type":"Patch"},{"attributes":{},"id":"21067","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"21019"},{"id":"21020"},{"id":"21021"},{"id":"21022"},{"id":"21023"},{"id":"21024"},{"id":"21025"},{"id":"21026"}]},"id":"21029","type":"Toolbar"},{"attributes":{},"id":"21065","type":"UnionRenderers"},{"attributes":{"source":{"id":"21048"}},"id":"21052","type":"CDSView"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21039","type":"Patch"}],"root_ids":["21075"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"90868979-6d80-40ff-8105-58ef63468b3b","root_ids":["21075"],"roots":{"21075":"4d80ca94-2229-4197-8a44-2bf50821b34f"}}];
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