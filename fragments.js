let actions = [
  {
    kind: "int",
    index: 1,
    action: (svg) => {
      let interval = 50;
      let data = Array(8).fill().map((item, index) => {
        return index * interval;
      });
      svg
        .append("g")
        .selectAll("line")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", d => d)
        .attr("y1", 0)
        .attr("x2", d => d)
        .attr("y2", interval*(data.length-1))
        .attr("stroke", "grey")
        .attr("stroke-width", 1);
      svg
        .append("g")
        .selectAll("line")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", 0)
        .attr("y1", d => d)
        .attr("x2", interval*(data.length-1))
        .attr("y2", d => d)
        .attr("stroke", "grey")
        .attr("stroke-width", 1);
    }
  },
  {
    kind: "int",
    index: 2,
    action: (svg) => {
      let interval = 50;
      let data = [
        {p: [0, 0, 7, 0], c: "black"},
        {p: [7, 0, 7, 7], c: "black"},
        {p: [7, 7, 0, 7], c: "black"},
        {p: [0, 7, 0, 0], c: "black"},
        {p: [1, 1, 6, 1], c: "red"},
        {p: [6, 1, 6, 6], c: "red"},
        {p: [6, 6, 1, 6], c: "red"},
        {p: [1, 6, 1, 1], c: "red"},
        {p: [2, 2, 5, 2], c: "green"},
        {p: [5, 2, 5, 5], c: "green"},
        {p: [5, 5, 2, 5], c: "green"},
        {p: [2, 5, 2, 2], c: "green"},
        {p: [3, 3, 4, 3], c: "blue"},
        {p: [4, 3, 4, 4], c: "blue"},
        {p: [4, 4, 3, 4], c: "blue"},
        {p: [3, 4, 3, 3], c: "blue"}
      ];

      svg
        .append("g")
        .selectAll("line")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", d => d.p[0]*interval)
        .attr("y1", d => d.p[1]*interval)
        .attr("x2", d => d.p[2]*interval)
        .attr("y2", d => d.p[3]*interval)
        .attr("stroke", d => d.c)
        .attr("stroke-width", 5)
    }
  },
  {
    kind: "int",
    index: 3,
    action: (svg) => {
      svg.selectAll("*").remove();
      execute({id: "int-2", svg: svg, previous: true})
      let interval = 50;
      let data = [
        {p: [0, 0, 7, 0], c: "black"},
        {p: [7, 0, 7, 7], c: "black"},
        {p: [7, 7, 0, 7], c: "black"},
        {p: [0, 7, 0, 0], c: "black"},
        {p: [1, 1, 6, 1], c: "red"},
        {p: [6, 1, 6, 6], c: "red"},
        {p: [6, 6, 1, 6], c: "red"},
        {p: [1, 6, 1, 1], c: "red"},
        {p: [2, 2, 5, 2], c: "green"},
        {p: [5, 2, 5, 5], c: "green"},
        {p: [5, 5, 2, 5], c: "green"},
        {p: [2, 5, 2, 2], c: "green"},
        {p: [3, 3, 4, 3], c: "blue"},
        {p: [4, 3, 4, 4], c: "blue"},
        {p: [4, 4, 3, 4], c: "blue"},
        {p: [3, 4, 3, 3], c: "blue"}
      ];

      svg
        .append("g")
        .attr("id", "int-3-points")
        .selectAll("circle")
        .data(points(data))
        .enter()
        .append("circle")
        .attr("cx", d => d.p[0]*interval)
        .attr("cy", d => d.p[1]*interval)
        .attr("r", 10)
        .attr("fill", d => d.c)
    }
  },
  {
    kind: "int",
    index: 4,
    action: (svg, pass) => {
      let duration = 1;
      if(pass) {
        svg
          .attr("transform", "translate(25, 25) scale(0.5, 0.5)");
      } else {
        svg
          .append("animateTransform")
          .attr("attributeName", "transform")
          .attr("attributeType", "XML")
          .attr("type", "scale")
          .attr("values", "1,1;0.5,0.5;")
          .attr("dur", "1s")
          .attr("repeatCount", "1")
          .attr("fill", "freeze")
          .attr("additive", "sum");
      }
    }
  },
  {
    kind: "int",
    index: 5,
    action: (svg) => {
      let interval = 50;
      let data = Array(17).fill().map((item, index) => {
        return index * interval;
      });
      svg
        .selectAll("line")
        .remove();
      svg
        .append("g")
        .selectAll("line")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", d => d)
        .attr("y1", 0)
        .attr("x2", d => d)
        .attr("y2", interval*(data.length-1))
        .attr("stroke", "grey")
        .attr("stroke-width", 1);
      svg
        .append("g")
        .selectAll("line")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", 0)
        .attr("y1", d => d)
        .attr("x2", interval*(data.length-1))
        .attr("y2", d => d)
        .attr("stroke", "grey")
        .attr("stroke-width", 1);
    }
  },
  {
    kind: "int",
    index: 6,
    action: (svg, pass) => {
      let ratio = 16/7;
      let originalPoints = svg
        .select("#int-3-points");
      if(pass) {
        originalPoints
          .attr("transform", `scale(${ratio},${ratio})`);
      } else {
        originalPoints
          .append("animateTransform")
          .attr("attributeName", "transform")
          .attr("attributeType", "XML")
          .attr("type", "scale")
          .attr("values", `1,1;${ratio},${ratio}`)
          .attr("dur", "1s")
          .attr("repeatCount", "1")
          .attr("fill", "freeze")
          .attr("additive", "sum");
      }
      svg
        .selectAll("circle")
        .attr("r", "5");
    }
  },
  {
    kind: "int",
    index: 7,
    action: (svg, pass) => {
      if(pass) return;
      svg
        .append("animateTransform")
        .attr("attributeName", "transform")
        .attr("attributeType", "XML")
        .attr("type", "scale")
        .attr("values", "0.5,0.5;2.5,2.5")
        .attr("dur", "1s")
        .attr("repeatCount", "1")
        .attr("fill", "freeze")
        .attr("additive", "sum");
      svg
        .attr("transform", "translate(-200, -200)");
    }
  }
];

let points = data => data.reduce((r, e) => {
  let p = e.p;
  let dx = p[2]-p[0];
  let dy = p[3]-p[1];
  let modify;
  if(dx != 0) {
    modify = c => [c[0]+Math.sign(dx), c[1]].slice();
  } else {
    modify = (i, j) => [c[0], c[1]+Math.sign(dy)].slice();
  }
  let c = [p[0], p[1]];
  r.push({p:c, c:e.c});
  while(c[0] != p[2] || c[1] != p[3]) {
    c = modify(c);
    r.push({p:c, c:e.c});
  };
  return r;
}, []);

let execute = props => {
  let svg = props.svg;
  let id = props.id;
  let previous = props.previous;
  let [kind, index] = id.split("-");
  if(previous) {
    index--;
  }
  let todos = actions.filter(action => {
    return action.kind == kind && action.index <= Number(index);
  });
  todos.forEach((todo, i) => {
    // Do not execute a pass unless it is the last one
    todo.action(svg, i < todos.length-1);
  });
};
let render = props => {
  let element = props.element;
  let kind = element.id;
  let todos = actions.filter(action => {
    return action.kind = kind;
  });
  d3
    .select(element)
    .selectAll("i")
    .data(todos)
    .enter()
    .append("i")
    .attr("id", d => `${d.kind}-${d.index}`)
    .attr("class", "fragment");
};
export { actions, execute, render };
