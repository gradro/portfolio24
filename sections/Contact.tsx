"use client"
import AnimatedHeading from "@/components/AnimatedHeading"
import Button from "@/components/Button"
import Form from "@/components/Form/Form"

const Contact = () => {

  return (
    <section className="container">
      <AnimatedHeading
        text="Let's Create Something Great Together"
        topline="Drop me a Line"
        id="contact"
        highlightWords={["Create"]}
        className="text-center"
      />
      <p className="opacity-80 text-center mb-14">Get in touch! Whether you have a project in mind, a question, or just want to say hello, feel free to reach out.</p>
      <div className="text-center">
        <Button 
          variant="outline"
          href="mailto:contact@gdrozdek.com"
        >
          Contact me
        </Button>
      </div>
      {/* <Form submit={submitForm}/> */}
    </section>
  )
}

export default Contact