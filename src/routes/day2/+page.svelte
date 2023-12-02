  <script>
    let puzzle2input=""
   $:puzzle2total=puzzle2(puzzle2input)
   let puzzle1input=""
   $: puzzle1total=puzzle1(puzzle1input)

   let thresholds={"red":12,"green":13,"blue":14}

   function puzzle1(lines){
       let sum = 0
       let gameList = lines.split(/\r\n|\r|\n/)
       if(!lines){
        return 0
       }
       for (let game = 0;game<gameList.length;game++) {
           if(checkGameValid(gameList[game])){
            console.log("invalid game: "+parseInt(parseInt(game)+1))
            sum += parseInt(game)+1
           }
           
       }
       return sum
   }
   function checkGameValid(game){
    let gameData = game.split(":")[1]
      if(gameData){
        let hands = gameData.split(";")
        for (let hand of hands){
          let cubes = hand.split(",")
          for(let cube of cubes){
            let noOfCubes = cube.split(" ")[1]
            let cubeColour = cube.split(" ")[2]
            if(noOfCubes > thresholds[cubeColour]){
              return false
            }
          }
        }
        return true
        
      }else{
        return true
      }
           
   }
   function puzzle2(lines){
    let sum = 0
  
       let gameList = lines.split(/\r\n|\r|\n/)
       if(!lines){
        return 0
       }
       
       for (let game = 0;game<gameList.length;game++) {
        let mins = {"red":0,"green":0,"blue":0}
        let gameData = gameList[game].split(":")[1]
        if(gameData){
        let hands = gameData.split(";")
        for (let hand of hands){
          let cubes = hand.split(",")
          for(let cube of cubes){
            let noOfCubes = cube.split(" ")[1]
            let cubeColour = cube.split(" ")[2]
            console.log(noOfCubes)
            if(parseInt(noOfCubes) > mins[cubeColour]){
              mins[cubeColour] = parseInt(noOfCubes)
            }
          }
        }
        console.log(mins)
        
        
      }
           sum+= mins["red"] * mins["green"] * mins["blue"]
       }
       return sum
   }
</script>

<div class="text-sm breadcrumbs p-5">
    <ul>
      <li class="text-2xl"><a href="/">Home</a></li> 
      <li class="text-2xl">Day 2 - Cube Conundrum</li> 
    </ul>
  </div>


 <div class="flex flex-col w-full lg:flex-row px-3">
   <div class="grid flex-grow  card bg-base-200 rounded-box place-items-center pt-5 shadow-lg">
       <h1 class="text-xl w-full pl-5">Puzzle 1</h1>
       <label class="form-control p-5 w-full">
           <div class="label">
             <span class="label-text text-md">Input games:</span>
           </div>
           <textarea class="textarea textarea-bordered h-32" placeholder="List" bind:value={puzzle1input}></textarea>
           <div class="label">
               <span class="label-text-alt"></span>
               <span class="label-text-alt text-xl"> Total: <span class="text-blue-500">{puzzle1total}</span></span>
             </div>
         </label>

   </div> 
   <div class="divider lg:divider-horizontal"></div> 
   <div class="grid flex-grow  card bg-base-200 rounded-box place-items-center pt-5 shadow-lg">
       <h1 class="text-xl w-full pl-5">Puzzle 2</h1>
       <label class="form-control p-5 w-full">
           <div class="label">
             <span class="label-text text-md">Input games:</span>
           </div>
           <textarea class="textarea textarea-bordered h-32" placeholder="List" bind:value={puzzle2input} ></textarea>
           <div class="label">
               <span class="label-text-alt"></span>
               <span class="label-text-alt text-xl">Total: <span class="text-blue-500">{puzzle2total}</span></span>
             </div>
         </label>

   </div> 
 </div>


