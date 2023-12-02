<script>
    import DayCard from "../lib/dayCard.svelte";
    let days=[
        {name:"Day 1",description:"Trebuchet?!",link:"/day1", image:"day1.png"},
        {name:"Day 2",description:"Cube Conundrum",link:"/day2", image:"day2.png"}
        ]
</script>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-5 gap-5">

    {#each days as day}
  
        <DayCard name={day.name} link={day.link} description={day.description} image={day.image}/>
	{/each}

    

</div>

