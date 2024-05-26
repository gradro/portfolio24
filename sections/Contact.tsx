"use client"
import Button from "@/components/Button"
import Form from "@/components/Form/Form"

const Contact = () => {

  const submitForm = () => {
    // Submit
  }

  return (
    <section className="container" id="contact">
      <p className="uppercase text-center font-medium opacity-80 pb-1">Drop me a Line</p>
      <h2 className="text-center">Let's <span className="text-highlight">Create</span> Something Great Together</h2>
      <p className="opacity-80 text-center mb-14">Get in touch! Whether you have a project in mind, a question, or just want to say hello, feel free to reach out.</p>
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