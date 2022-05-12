const Formulario = () => {
  return (
    <div className="md:w-1/2 ls:w-2/5">
      <h2 className="font-black text-3xl text-center">Segumiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form action="" className="bg-white shadow-md rounded-lg px-10 py-5 mb-10">
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota{" "}
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario{" "}
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email{" "}
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta{" "}
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas{" "}
          </label>
         <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"

         />
        </div>

        <input 
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 w-full p-3
         text-white font-bold uppercase rounded-lg cursor-pointer transition-colors"
        value="Agregar Paciente"
        
        
        />
      </form>
    </div>
  );
};

export default Formulario;
