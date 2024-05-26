"use client"
import Button from "@/components/Button"
import Form from "@/components/Form/Form"

const Contact = () => {

  const submitForm = () => {
    // Submit
  }

  return (
    <section className="container">
      <p className="uppercase text-center font-medium opacity-80 pb-1">Drop me a Line</p>
      <h2 className="text-center">Let's <span className="text-highlight">Create</span> Something Great Together</h2>
      <div className="text-center">
        <Button 
          variant="outline"
          href="mailto:drozdek.gracjan@gmail.com"
        >
          Contact me
        </Button>
      </div>
      {/* <Form submit={submitForm}/> */}
    </section>
  )
}

export default Contact