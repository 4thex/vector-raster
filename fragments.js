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
        {p: [0, 0], c: "black"},
        {p: [1, 0], c: "black"},
        {p: [2, 0], c: "black"},
        {p: [3, 0], c: "black"},
        {p: [4, 0], c: "black"},
        {p: [5, 0], c: "black"},
        {p: [6, 0], c: "black"},
        {p: [7, 0], c: "black"},
        {p: [7, 0], c: "black"},
        {p: [7, 1], c: "black"},
        {p: [7, 2], c: "black"},
        {p: [7, 3], c: "black"},
        {p: [7, 4], c: "black"},
        {p: [7, 5], c: "black"},
        {p: [7, 6], c: "black"},
        {p: [7, 7], c: "black"},
        {p: [0, 0], c: "black"},
        {p: [1, 7], c: "black"},
        {p: [2, 7], c: "black"},
        {p: [3, 7], c: "black"},
        {p: [4, 7], c: "black"},
        {p: [5, 7], c: "black"},
        {p: [6, 7], c: "black"},
        {p: [7, 7], c: "black"},
        {p: [0, 0], c: "black"},
        {p: [0, 1], c: "black"},
        {p: [0, 2], c: "black"},
        {p: [0, 3], c: "black"},
        {p: [0, 4], c: "black"},
        {p: [0, 5], c: "black"},
        {p: [0, 6], c: "black"},
        {p: [0, 7], c: "black"},
        {p: [1, 1], c: "red"},
        {p: [2, 1], c: "red"},
        {p: [3, 1], c: "red"},
        {p: [4, 1], c: "red"},
        {p: [5, 1], c: "red"},
        {p: [6, 1], c: "red"},
        {p: [6, 2], c: "red"},
        {p: [6, 3], c: "red"},
        {p: [6, 4], c: "red"},
        {p: [6, 5], c: "red"},
        {p: [6, 6], c: "red"},
        {p: [1, 6], c: "red"},
        {p: [2, 6], c: "red"},
        {p: [3, 6], c: "red"},
        {p: [4, 6], c: "red"},
        {p: [5, 6], c: "red"},
        {p: [6, 6], c: "red"},
        {p: [1, 1], c: "red"},
        {p: [1, 2], c: "red"},
        {p: [1, 3], c: "red"},
        {p: [1, 4], c: "red"},
        {p: [1, 5], c: "red"},
        {p: [1, 6], c: "red"},
        {p: [2, 2], c: "green"},
        {p: [3, 2], c: "green"},
        {p: [4, 2], c: "green"},
        {p: [5, 2], c: "green"},
        {p: [5, 3], c: "green"},
        {p: [5, 4], c: "green"},
        {p: [5, 5], c: "green"},
        {p: [2, 5], c: "green"},
        {p: [2, 4], c: "green"},
        {p: [2, 3], c: "green"},
        {p: [2, 5], c: "green"},
        {p: [3, 5], c: "green"},
        {p: [4, 5], c: "green"},
        {p: [3, 3], c: "blue"},
        {p: [4, 3], c: "blue"},
        {p: [4, 4], c: "blue"},
        {p: [3, 4], c: "blue"}
      ];

      // expand the data into single points
      // let data = data.map(d => {
      //
      // });
      svg
        .append("g")
        .selectAll("circle")
        .data(data)
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
    action: (svg) => {

    svg
      .append("animateTransform")
      .attr("attributeName", "transform")
      .attr("type", "scale")
      .attr("values", "1,1;0.25,0.25")
      .attr("dur", "3s")
      .attr("repeatCount", "1")
    svg
      .append("animateTransform")
      .attr("attributeName", "transform")
      .attr("type", "translate")
      .attr("values", "25,25;25,25")
      .attr("dur", "3s")
      .attr("repeatCount", "1")
    }
  }
];
let execute = props => {
  let svg = props.svg;
  let id = props.id;
  let previous = props.previous;
  let [kind, index] = id.split("-");
  if(previous) {
    index--;
  }
  let todos = actions.filter(action => {
    return action.kind = kind && action.index <= Number(index);
  });
  todos.forEach(todo => {
    todo.action(svg);
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
