<script>
     let puzzle2input=""
    $:puzzle2total=puzzle2(puzzle2input)
    let puzzle1input=""
    $: puzzle1total=puzzle1(puzzle1input)

    function puzzle1(lines){
        let sum = 0
        let coordList = lines.split(/\r\n|\r|\n/)
        for (let coord of coordList) {
            coord= coord.replace(/[^0-9]/g, '');
            if (coord!==''){
                sum += parseInt(coord[0]+ coord[coord.length-1])
            }
        }
        return sum
    }
    function puzzle2(lines){
        let sum = 0
        let coordList = lines.split(/\r\n|\r|\n/)
        for (let coord of coordList) {
            let starter=coord.substring(0,2)
            for (let character of coord){
                starter += character
                starter= starter
                    .replace('one',"o1e")
                    .replace("two","t2o")
                    .replace("three","t3e")
                    .replace("four","f4r")
                    .replace("five","f5e")
                    .replace("six","s6x")
                    .replace("seven","s7n")
                    .replace("eight","e8t")
                    .replace("nine","n9e")
            }
            starter= starter.replace(/[^0-9]/g, '')
            if (coord!==''){
                sum += parseInt(starter[0]+ starter[starter.length-1])
            }
        }
        return sum
    }
</script>


<div class="text-sm breadcrumbs p-5">
    <ul>
      <li class="text-2xl"><a href="/">Home</a></li> 
      <li class="text-2xl">Day 1 - Trebuchet?!</li> 
    </ul>
  </div>

  <div class="flex flex-col w-full lg:flex-row px-3">
    <div class="grid flex-grow  card bg-base-200 rounded-box place-items-center pt-5 shadow-lg">
        <h1 class="text-xl w-full pl-5">Puzzle 1</h1>
        <label class="form-control p-5 w-full">
            <div class="label">
              <span class="label-text text-md">Input calibration document:</span>
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
              <span class="label-text text-md">Input calibration document:</span>
            </div>
            <textarea class="textarea textarea-bordered h-32" placeholder="List" bind:value={puzzle2input} ></textarea>
            <div class="label">
                <span class="label-text-alt"></span>
                <span class="label-text-alt text-xl">Total: <span class="text-blue-500">{puzzle2total}</span></span>
              </div>
          </label>

    </div> 
  </div>


