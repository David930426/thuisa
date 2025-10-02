export function Title() {
  return (
    <div className="w-full text-white bg-red-600 text-center py-15 md:py-25">
      <h1 className="text-4xl md:text-7xl font-bold pb-2 md:pb-4">
        Contact THUISA
      </h1>
      <p className="md:text-2xl text-md">
        Have questions or need support? <br />
        Contact us, we are happy to help
      </p>
    </div>
  );
}

export function Information() {
  return (
    <div className="md:max-w-5xl mx-10 md:mx-auto mt-10 md:mt-20 md:flex gap-10 text-center mb-10">
      <div className="md:w-1/2 px-10 md:pb-20 pb-10 pt-10 rounded-3xl shadow-md">
        <h1 className="text-red-600 md:text-5xl text-3xl font-bold mb-10">
          Contacts
        </h1>
        <h3 className="text-red-600 md:text-2xl text-xl mb-1">
          Contact Our Line:
        </h3>
        <p className="mb-5 md:mb-8 md:text-xl text-md">lineId thuisa</p>
        <h3 className="text-red-600 md:text-2xl text-xl mb-1">
          Find Our Latest Update:
        </h3>
        <p className="md:text-xl text-md">Tiktok: @thuisa_official</p>
        <p className="mb-5 md:mb-8 md:text-xl text-md">
          Instagram: thuisa_official
        </p>
        <h3 className="text-red-600 md:text-2xl text-xl mb-1">Email Us: </h3>
        <p className="md:text-xl text-md">thuisa2025@gmail.com</p>
      </div>
      <div className="md:w-1/2 rounded-3xl shadow-md px-10 md:pb-20 pb-10 pt-10">
        <h1 className="text-red-600 md:text-5xl text-3xl font-bold mb-7">
          Our Location:
        </h1>
        <div>
          <iframe
            title="Tunghai Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.693668951489!2d120.59997247606017!3d24.182473772050418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693e1c3a406707%3A0xd43d01bc4fb2806a!2sUniversitas%20Tunghai!5e0!3m2!1sid!2sid!4v1755167301397!5m2!1sid!2sid"
            allowFullScreen
            className="w-full md:min-h-100 min-h-75"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
