QUnit.module('NN.find', function() {
  QUnit.test('Should find nearest neighbor', function(assert) {
    let nn = NN(
      // Scaling up from 4 to 5
      {x: 5/4, y: 5/4}
    );

    let points = [
      ["#404040", "#400000", "#004000", "#000040"],
      ["#808080", "#800000", "#008000", "#000080"],
      ["#C0C0C0", "#C00000", "#00C000", "#0000C0"],
      ["#FFFFFF", "#FF0000", "#00FF00", "#0000FF"]
    ];

    input = {x: 0, y: 0};
    p = nn.find(input);
    assert.equal(p.x, 0);
    assert.equal(p.y, 0);
    assert.equal(points[p.y][p.x], "#404040");

    input = {x: 1, y: 1};
    p = nn.find(input);
    assert.equal(p.x, 1);
    assert.equal(p.y, 1);
    assert.equal(points[p.y][p.x], "#800000");

    input = {x: 2, y: 2};
    p = nn.find(input);
    assert.equal(p.x, 2);
    assert.equal(p.y, 2);
    assert.equal(points[p.y][p.x], "#00C000");

    input = {x: 3, y: 3};
    p = nn.find(input);
    assert.equal(p.x, 2);
    assert.equal(p.y, 2);
    assert.equal(points[p.y][p.x], "#00C000");

    input = {x: 4, y: 4};
    p = nn.find(input);
    assert.equal(p.x, 3);
    assert.equal(p.y, 3);
    assert.equal(points[p.y][p.x], "#0000FF");
  });
});
