const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h1>This is Contact Page...</h1>
      <div className="grid lg:grid-cols-2 ">
        <div className="bg-gray-700"></div>
        <div className="p-10">
          <h3 className="text-2xl text-gray-600 font-semibold ">Contact Us</h3>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
