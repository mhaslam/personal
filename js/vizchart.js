
new roughViz.BarH({
    element: '#progSkills', // container selection
    data: 'data/skills.csv',
    labels: 'Technology',
    values: 'Level',
    interactive:false,
    title: 'Programming Skills',
    titleFontSize: '1.5rem',
    labelFontSize:'1.5rem',
    tooltipFontSize:'1.5rem',
    axisFontSize:'1.5rem',
    stroke:'#dc612c',
    roughness:2,
    color:'#4ab19a',
    font: 'sketch_rockwellregular',
    fillStyle: 'zigzag',
    padding:0.3,
    margin:{top: 50, right: 20, bottom: 70, left: 150}

});



  new roughViz.BarH({
    element: '#languages', // container selection
    data: 'data/languages.csv',
    labels: 'Language',
    values: 'Level',
    title: 'Languages',
    interactive:false,
    titleFontSize: '1.5rem',
    labelFontSize:'1.5rem',
    tooltipFontSize:'1.5rem',
    axisFontSize:'1.5rem',
    stroke:'#dc612c',
    roughness:2,
    color:'#4ab19a',
    font: 'sketch_rockwellregular',
    fillStyle: 'zigzag',
    padding:0.3,
    margin:{top: 50, right: 20, bottom: 70, left: 150},

});

new roughViz.Pie({
    element: '#experience', // container selection
    data: 'data/experience.csv',
    labels: 'Experience',
    fillStyle: 'zigzag',
    values: 'Level',
    title: 'Experience',
    titleFontSize: '1.5rem',
    font: 'sketch_rockwellregular',
    margin: {top: 50, bottom: 100, left: 40, right: 100},
    roughness: 2,
    strokeWidth: 1,
    innerStrokeWidth: 2,
    colors:["#dc612c","#194e6d","#4ab19a","#48302b"]
    });

/**
 * Utility function to add CSS in multiple passes.
 * @param {string} styleString
 */
function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }
  
  addStyle(`
    g.xAxisprogSkills, g.xAxislanguages {
        display: none;
    }
    g.yAxisprogSkills, g.yAxislanguages {
        color: #1c1c1b;
    }
      
  `);





      