const Error = ({ children}) => {
  return (
    <div>
      <div
        className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Error;
