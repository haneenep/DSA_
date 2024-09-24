class Graph{
    constructor(){
        this.adjacentList = {}
    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = new Set();
        }
    }

    addEdges(vertex1,vertex2){
        if(!this.adjacentList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacentList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacentList[vertex1].add(vertex2)
        this.adjacentList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        return (
            this.adjacentList[vertex1].has(vertex2) && 
            this.adjacentList[vertex2].has(vertex1)
        )
    }

    removeVertex(vertex){
        if(!this.adjacentList[vertex]){
            return;
        }
        for(let adjj of this.adjacentList[vertex]){
            this.removeEdge(adjj,vertex)
        }
        delete this.adjacentList[vertex];
    }

    removeEdge(vertex1,vertex2){
        this.adjacentList[vertex1].delete(vertex2)
        this.adjacentList[vertex2].delete(vertex1)
    }
    

    Bfs(start){
        const queu = [start];
        const visited = new Set();
        visited.add(start)

        while(queu.length > 0){
            let curr = queu.shift();
            console.log(curr);
            for(let neigbor of this.adjacentList[curr]){
                if(!visited.has(neigbor)){
                    queu.push(neigbor);
                    visited.add(neigbor)
                }
            }
        }
    }

    dfs(start){
        const visited = new Set()
        this.dfsHelper(start,visited)
    }

    dfsHelper(vertex,visited){
        if(visited.has(vertex)){
            return;
        }
        visited.add(vertex)
        console.log(vertex);

        for(let neighbor of this.adjacentList[vertex]){
            this.dfsHelper(neighbor,visited);
        }
    }

    display(){
        for(let vertex in this.adjacentList){
            console.log(vertex + ' => ' + [...this.adjacentList[vertex]]);
        }
    }
}

const gg = new Graph();

gg.addVertex('A')
gg.addVertex('D')

gg.addEdges('V','A');
gg.addEdges('D','A');
gg.addEdges('B','A');
gg.addEdges('B','V');

gg.display()

console.log(gg.hasEdge('A','B'));
console.log(gg.hasEdge('V','B'));
console.log(gg.hasEdge('V','D'));

// gg.removeEdge('B','A');

gg.display()

console.log(gg.hasEdge('A','B'));
console.log(gg.hasEdge('V','B'));
console.log(gg.hasEdge('V','D'));

// gg.removeVertex('A')

gg.display()

console.log("----------------------");

gg.Bfs('B')

console.log("----------------------");

gg.dfs('A')