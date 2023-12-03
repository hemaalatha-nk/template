


// JavaScript for handling the navigation bar

// Get all the links with the class 'navbar'
// const links = document.getElementsByClassName('navbar')[0].getElementsByTagName('a');

// // Loop through all the links and add an 'active' class to the current/clicked link
// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', function() {
//     const current = document.getElementsByClassName('active');
//     current[0].className = current[0].className.replace(' active', '');
//     this.className += ' active';
//   });
// }


const spec1 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Stock prices of 5 Tech Companies over Time.",
  data: {
    url: "graph_1.csv",
  },
  "mark": "bar",
  "encoding": {     
"x": {
      "timeUnit": "year",
      "field": "CRASH_DATE",
      "type": "ordinal",
      "title": "Year"
    },
    "y": {"field": "CRASH_NUM", "type": "quantitative"}
  },
};
vegaEmbed("#vis1", spec1);

const spec2= {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  // description: "Stock prices of 5 Tech Companies over Time.",
  data: {
    url: "graph_2.csv",
  },
  "mark": {
    "type": "line"
  },
  "encoding": {
    "x": {"type": "nominal", "field": "YEAR"},
    "y": {"aggregate":"mean", "field": "COUNT", "type": "quantitative"},
    "color": {"field": "WEATHER_CONDITION", "type": "nominal"}
  },
};
vegaEmbed("#vis2", spec2);

const spec3= {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  // description: "Stock prices of 5 Tech Companies over Time.",
  data: {
    url: "graph_4.csv",
  },
  "mark": "circle",
  "encoding": {
    "y": {
      "field": "YEAR",
      "type": "nominal",
    },
    "x": {
      "field": "ROAD_DEFECT",
      "type": "nominal",
    },
    "size": {
      "field": "INJURIES_FATAL",
      "type": "quantitative",
        "aggregate": "sum"
    }
  },
};
vegaEmbed("#vis3", spec3);


const spec4= {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  // description: "Stock prices of 5 Tech Companies over Time.",
  data: {
    url: "graph_5.csv",
  },
  "mark": "rect",
  "encoding": {
    "opacity": {
      "condition": {
        "test": "test(regexp(search_input,'i'),datum.WEATHER_CONDITION)",
        "value": 0.2
      },
      "value": 0.1
    },
    "tooltip": {"field": "WEATHER_CONDITION", "type": "nominal"},
    "y": {"field": "INJURIES_TOTAL", "type": "quantitative"},
    "x": {"field": "CRASH_HOUR", "type": "nominal"}
  },
  "params": [
    {
      "name": "search_input",
      "bind": {
        "input": "search",
        "placeholder": "WEATHER_CONDITION",
        "name": "Search"
      },
      "value": ""
    }
  ],
};
vegaEmbed("#vis4", spec4);

const spec5= {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  // description: "Stock prices of 5 Tech Companies over Time.",
  data: {
    url: "graph_6.csv",
  },  
  "transform": [{
    "filter": {"and": [
      {"field": "WEATHER_CONDITIONg", "valid": false},
      {"field": "TRAFFICWAY_TYPE", "valid": false}
    ]}
  }],
  "mark": "rect",
  "width": 300,
  "height": 200,
  "encoding": {
    "x": {
      "field": "WEATHER_CONDITION",
      "type": "nominal"
    },
    "y": {
      "field": "TRAFFICWAY_TYPE",
      "type": "nominal"
    },
    "color": {
      "aggregate": "count",
      "type": "quantitative"
    }
  },
  "config": {
    "view": {
      "stroke": "transparent"
    }
  },
};
vegaEmbed("#vis5", spec5);


// const spec6= {
//   $schema: "https://vega.github.io/schema/vega-lite/v5.json",
//   // description: "Stock prices of 5 Tech Companies over Time.",
//   data: {
//     url: "graph_7.csv",
//   },  
//   "mark": {"type": "arc", "tooltip": false},
//   "encoding": {
//     "facet": {
//       "field": "YEAR",
//       "type": "ordinal",
//       "columns": 5,
//       "sort": {"op": "median", "field": "YEAR"},
//     },
//     "theta": {"field": "COUNT", "type": "quantitative", "stack": "normalize"},
//     "color": {"field": "PRIM_CONTRIBUTORY_CAUSE", "type": "nominal"}
//   },
// };
// vegaEmbed("#vis11", spec6);

const spec7= {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "graph_8.csv"},
  "vconcat": [
    {
      "layer": [
        {
        "mark": "rect",
        "encoding": {
          "x": {
            "field": "YEAR"
          },
          "y": {
            "bin": {"maxbins": 10},
            "field": "INJURIES_TOTAL"
          },
          "color": {
            "aggregate": "count",
            "legend": {
              "title": "Total Records",
              "direction": "horizontal",
              "gradientLength": 120
            }
          }
        }
      }, {
        "transform": [{
          "filter": {"param": "pts"}
        }],
        "mark": "point",
        "encoding": {
          "x": {
      
            "field": "YEAR"
          },
          "y": {
            "bin": {"maxbins": 10},
            "field": "INJURIES_TOTAL"
          },
          "size": {
            "aggregate": "count",
            "legend": {"title": "Selected Category Count"}
          },
          "color": {
            "value": "#666"
          }
        }
      }]
    }, {
      "width": 330,
      "height": 120,
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "WEATHER_CONDITION", "axis": {"labelAngle": -40}},
        "y": {"aggregate": "count"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      }
    }
  ],
  "resolve": {
    "legend": {
      "color": "independent",
      "size": "independent"
    }
  }
};
vegaEmbed("#vis7", spec7);

const spec8= {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  // description: "Stock prices of 5 Tech Companies over Time.",
  data: {
    url: "graph_9.csv",
  },  
  "vconcat": [
    {
      "encoding": {
        "color": {
          "condition": {
            "param": "brush",
            "title": "DEVICE_CONDITION",
            "field": "DEVICE_CONDITION",
            "type": "nominal",
          },
          "value": "lightgray"
        },
        "x": {
          "field": "WEATHER_CONDITION",
          "title": "WEATHER_CONDITION",
          // "axis": {"format": "%b"}
        },
        "y": {
          // "title": "Maximum Daily Temperature (C)",
          "field": "INJURIES_FATAL",
          "type": "quantitative",
          "aggregate":"mean"
        }
      },
      "width": 600,
      "height": 300,
      "mark": {"type": "area", "clip": true, "orient": "vertical", "opacity": 0.6},
      "params": [{
        "name": "brush",
        "select": {"type": "interval", "encodings": ["x"]}
      }],
      "transform": [{"filter": {"param": "click"}}]
    },
    {
      "encoding": {
        "color": {
          "condition": {
            "param": "click",
            "field": "DEVICE_CONDITION",
          },
          "value": "lightgray"
        },
        "x": {"aggregate": "count"},
        "y": {"title": "DEVICE_CONDITION", "field": "DEVICE_CONDITION"}
      },
      "width": 600,
      "mark": "bar",
      "params": [{
        "name": "click",
        "select": {"type": "point", "encodings": ["color"]}
      }],
      "transform": [{"filter": {"param": "brush"}}]
    }
  ],
};
vegaEmbed("#vis8", spec8);



const spec9={
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Drag the sliders to highlight points.",
  "data": {"url": "graph_10.csv"},
  "layer": [
    {
      "params": [
        {
          "name": "year",
          // "value": [{"YEAR": 2020}],
          "select": {
            "type": "point",
            "fields": ["YEAR"]
          },
          "bind": {
            "Year": {"input": "range", "min": 1969, "max": 1981, "step": 1}
          }
        }
    ],
    //  "transform": [{"filter": {"param": "year"}}],
    "mark": "bar",
    "encoding": {
      "x": {"field": "LIGHTING_CONDITION", "type": "nominal"},
      "y": {"aggregate":"mean", "field": "INJURIES_FATAL", "type": "quantitative"},
      "color": {
        "condition": {"param": "year", "field": "LIGHTING_CONDITION", "type": "nominal"},
        "value": "grey"
      }
    }
  }, 
  {
    "transform": [{"filter": {"param": "year"}}],
    "mark": "bar",
    "encoding": {
      "x": {"field": "LIGHTING_CONDITION", "type": "nominal"},
      "y": {"aggregate":"mean", "field": "INJURIES_FATAL", "type": "quantitative"},
      // "y": {"field": "INJURIES_FATAL", "type": "quantitative"},
      "color": {"field": "LIGHTING_CONDITION", "type": "nominal"},
      // "size": {"value": 100}
    }
  }
  // {
  //   // "transform": [{"filter": {"param": "CylYr"}}],
  //   "mark": "bar",
  //   "encoding": {
  //     "x": {"field": "LIGHTING_CONDITION", "type": "nominal"},
  //     "y": {"field": "INJURIES_FATAL", "type": "quantitative"},
  //     // "color": {"field": "Horsepower", "type": "quantitative"},
  //     // "size": {"value": 100}
  //   }
  // }
]

};
vegaEmbed("#vis6", spec9);





const spec10=
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 300,
  "data": {
    "url": "result.json",
    "format": {"type": "json", "property": "features"}
  },
  
  "mark": "geoshape",
  "projection": {"type": "albersUsa"},
  "encoding": {
    "tooltip": {"field": "properties.crash_count"},
    "color": {
      "field": "properties.crash_count",
      "type": "quantitative"
    }
  }

}

vegaEmbed("#vis9", spec10);

// const spec11={
//   "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
//   "description": "the population per state, engineers per state, and hurricanes per state",
//   "repeat": {"row": "DAMAGE"},
//   "resolve": {
//     "scale": {
//       "color": "independent"
//     }
//   },
//   "spec": {
//     "width": 500,
//     "height": 300,
//     "data": {
//       "url": "result2.json",
//       "format": {"type": "json", "property": "features"}
//     },
//     "projection": {"type": "albersUsa"},
//     "mark": "geoshape",
//     "encoding": {
//       "color": {
//         "field": "properties.DAMAGE",
//         "type": "nominal"
//       }
//     }
//   }
// }

// vegaEmbed("#vis10", spec11);

// const spec12=
// {
//   "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
//   "width": 500,
//   "height": 300,
//   "data": {
//     "url": "result2.json",
//     "format": {"type": "json", "property": "features"}
//   },
  
//   "mark": "geoshape",
//   "projection": {"type": "albersUsa"},
//   "encoding": {
//     "shape": {"field": "geometry.coordinates", "type": "geojson"},
//     // "tooltip": {"field": "properties.DAMAGE"},
//     "row": {"field": "properties.DAMAGE"},
//     "color": {
//       "field": "properties.INJURIES_FATAL",
//       "type": "quantitative",
//     }
//   }

// }

// vegaEmbed("#vis11", spec12);


const spec13=
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 300,
  "data": {
    "url": "result3.json",
    "format": {"type": "json", "property": "features"}
  },
  "vconcat": [
    { 
    
    "mark": "geoshape",
    "projection": {"type": "albersUsa"},
    "encoding": {
      "color": {
        "condition": {
          "param": "brush",
          "title": "Total INJURIES_FATAL",
          "field": "properties.INJURIES_FATAL",
          "type": "quantitative",
        },
        "value": "lightgray"
      },
      "tooltip": {"field": "properties.INJURIES_FATAL"},
      // "color": {
      //   "field": "properties.INJURIES_FATAL",
      //   "type": "quantitative"
      // }
    },
    "params": [{
      "name": "brush",
      "select": {"type": "interval", "encodings": ["x"]}
    }],
    "transform": [{"filter": {"param": "click"}}]
  },
    {
      "encoding": {
        "color": {
          "condition": {
            "param": "click",
            "field": "properties.YEAR",
            "value": "lightgray"
          },
        },
        "x": {"field":"properties.YEAR"},
        // "y": {"title": "Weather", "field": "properties.INJURIES_FATAL"}
        "y": {"aggregate":"mean", "field": "properties.INJURIES_FATAL", "type": "quantitative"},

      },
      "width": 600,
      "mark": "bar",
      "params": [{
        "name": "click",
        "select": {"type": "point", "encodings": ["color"]}
      }],
      "transform": [{"filter": {"param": "brush"}}]
    }
  ],

 

}

vegaEmbed("#vis11", spec13);

