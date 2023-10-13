const Expertise = (expertiseChoice) => {

    return(
        <div class="w-11/12 mx-auto py-20 my-20">
            <h3 class="text-darkblue uppercase tracking-widest font-semibold text-5xl mb-8">{expertiseChoice.title}</h3>
            <p class="text-xl font-normal mb-6">{expertiseChoice.description}</p>
        </div>
    )
}

export default Expertise