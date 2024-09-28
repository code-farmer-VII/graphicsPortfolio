import { Send, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h1 className='px-24 text-5xl pb-20 text-yellow-400 font-bold'>Contact Me</h1>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-8">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <p className="text-center mb-12">I&apos;d love to hear from you! Please fill out the form below.</p>
          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="mb-2">Phone: <a href="tel:+251924900514" className="text-yellow-400">+251924900514</a></p>
            <p className="mb-2">Email: <a href="mailto:temesgengonfa72127@example.com" className="text-yellow-400">temesgengonfa72127@example.com</a></p>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://telegram.me/yourusername" target="_blank" rel="noopener noreferrer">
              <Send className="text-2xl text-blue-500 hover:text-blue-700" />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-2xl text-pink-500 hover:text-pink-700" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-2xl text-blue-700 hover:text-blue-900" />
            </a>
          </div>
          <div className="text-gray-400 rounded-lg hover:bg-black opacity-50 hover:opacity-100 transition-all ease-in-out duration-700">
            <iframe
              src= "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1439.2182242232286!2d38.69501683143233!3d9.017381358619994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1721299013963!5m2!1sen!2set" 
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
              <p className="hover:text-accent transition-colors py-3 text-center">Kolfa Keraniyo</p>

          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="lg:w-1/2">
          <form action="https://formspree.io/f/xjkbnkrg" method="POST" className="max-w-lg mx-auto shadow-md rounded-lg p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="mt-1 block w-full border border-gray-300 text-black rounded-md shadow-sm p-2 focus:ring focus:ring-blue-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
