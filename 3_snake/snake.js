function Snake() {
    this.body = [{x:1,y:4},{x:1,y:3},{x:2,y:3}];
    this.body.unshift({x:2,y:4});
    let tail = this.body.pop();
}