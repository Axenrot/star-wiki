const Background = ({ children }) => {
  return (
    <div className="w-[100%] min-h-[100vh] h-fit bg-sw bg-fixed overflow-hidden">
      {children}
    </div>
  );
};

export default Background;
