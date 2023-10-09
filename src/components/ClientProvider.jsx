import { Toaster } from "react-hot-toast";
const ClientProvider = ({ children }) => {
  return (
    <>
      <Toaster position="bottom-center" />

      {children}
    </>
  );
};

export default ClientProvider;
