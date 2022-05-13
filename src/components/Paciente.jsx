const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase ">
        Nombre: <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase ">
        Propietario:{" "}
        <span className="font-normal normal-case">Henry Tene Torres</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase ">
        Email: <span className="font-normal normal-case">email@email.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase ">
        Fecha alta:{" "}
        <span className="font-normal normal-case">10 de noviembre de 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase ">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, modi
          eligendi et consequuntur, beatae enim nostrum illum ea numquam
          assumenda quos. Quia, modi iure nostrum maiores asperiores reiciendis
          accusantium incidunt?
        </span>
      </p>
    </div>
  );
};

export default Paciente;
