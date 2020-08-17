let actions = [
  {
    kind: "int",
    index: 1,
    action: (svg) => {
      let w = 50;
      let h = 50;
      for (let i = 0; i < 5; i++) {
        svg
          .append("rect")
          .attr("x", i*w)
          .attr("y", h)
          .attr("width", w)
          .attr("height", h)
          .attr("stroke", "white")
          .attr("stroke-width", 2)
      }
    }
  },
  {
    kind: "int",
    index: 2,
    action: (svg) => {
      svg
        .append("rect")
        .attr("x", 50)
        .attr("y", 50)
        .attr("width", 50)
        .attr("height", 50)
        .attr("stroke", "white")
        .attr("stroke-width", 2)
        .attr("fill", "white")      
    }
  }

];
let execute = props => {
  let svg = props.svg;
  let id = props.id;
  let [kind, index] = id.split("-");
  let todos = actions.filter(action => {
    return action.kind = kind && action.index <= Number(index);
  });
  todos.forEach(todo => {
    todo.action(svg);
  });

};
export { actions, execute };
