import { BsArrowRight } from "react-icons/bs";

const Contact = () => {


	const handleSubmit = event => {
		event.preventDefault()
		const form=event.target
		console.log(form)
	}

  return (
    <section className="max-w-6xl mx-auto my-12">
      <div className="grid lg:grid-cols-2 ">
        <div className="lg:ml-10  bg-red-400 h-full rounded-lg overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/qM5LLDZ/map.png"
            alt=""
          />
        </div>
        <div className="lg:p-10 p-5">
          <h3 className="text-2xl text-gray-600 font-semibold mb-4 ">
            Contact Us
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="uppercase text-gray-700 font-semibold text-sm">
                  Frist Name
                </label>
                <input
                  className=" border border-t-0 border-x-0 border-b-gray-600 outline-none w-full text-sm pb-1"
                  type="text"
                  name="firstName"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div>
                <label className="uppercase text-gray-700 font-semibold text-sm">
                  Last Name
                </label>
                <input
                  className=" border border-t-0 border-x-0 border-b-gray-600 outline-none w-full text-sm pb-1"
                  type="text"
                  name="lastName"
                  placeholder="Enter Your Last Name"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-2">
              <div>
                <label className="uppercase text-gray-700 font-semibold text-sm">
                  Email
                </label>
                <input
                  className=" border border-t-0 border-x-0 border-b-gray-600 outline-none w-full text-sm pb-1"
                  type="email"
                  name="firstName"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div>
                <label className="uppercase text-gray-700 font-semibold text-sm">
                  Phone Number
                </label>
                <input
                  className=" border border-t-0 border-x-0 border-b-gray-600 outline-none w-full text-sm pb-1"
                  type="number"
                  name="lastName"
                  placeholder="Enter Your Phone Nuber"
                />
              </div>
            </div>
            <div className="mt-2">
              <label className="uppercase text-gray-700 font-semibold text-sm">
                Message
              </label>
              <textarea
                name="message"
                rows={1}
                className="border border-t-0 border-x-0 border-b-gray-600 outline-none w-full text-sm pb-1"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <input
              className="my-2 text-gray-700 font-semibold cursor-pointer"
              type="submit"
              value="Submit"
            />
            <BsArrowRight className="inline-block ml-2" />
          </form>
          <div className="mt-3">
            <p className="text-xs uppercase text-gray-500 font-semibold">
              Email Us
            </p>
            <p className="text-sm text-gray-700 mt-1 font-semibold">
              typhoon@gamil.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
