import { useContactForm } from '../../hooks/useContactForm';

const Contact = ({ darkMode }) => {
  const { formStatus, handleSubmit } = useContactForm();

  return (
    <section className="space-y-8 animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Let's discuss opportunities and collaborations
        </p>
      </div>
      
      <div className={`${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } shadow-lg rounded-xl p-8 max-w-2xl mx-auto border`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                    : 'bg-white border-gray-300 focus:border-blue-500'
                } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                    : 'bg-white border-gray-300 focus:border-blue-500'
                } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 focus:border-blue-500'
              } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
              placeholder="What's this about?"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              data-gramm='false'
              required
              rows="5"
              className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                  : 'bg-white border-gray-300 focus:border-blue-500'
              } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
              placeholder="Tell me about your project, opportunity, or just say hello!"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={formStatus === 'sending'}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
              formStatus === 'sending'
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg transform hover:scale-[1.02]'
            }`}
          >
            {formStatus === 'sending' ? 'Sending Message...' : 'Send Message'}
          </button>
          
          {formStatus === 'success' && (
            <div className="p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg text-center">
              <strong>Message sent successfully!</strong> I'll get back to you soon.
            </div>
          )}
          {formStatus === 'error' && (
            <div className="p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg text-center">
              <strong>Failed to send message.</strong> Please try again or contact me directly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;