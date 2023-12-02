<script>
  export let name,description,link,image;
</script>
<a href={link}>
<div class="card max-w-96 bg-base-200 shadow-xl hover:bg-base-100 ">
        <figure><img src="images/{image}" alt="Christmas" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          
        </div>
      </div>
      </a>