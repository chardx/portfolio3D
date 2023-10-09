import { Toaster } from "react-hot-toast";
const ClientProvider = ({ children }) => {
  return (
    <>
      <Toaster />

      {children}
    </>
  );
};

export default ClientProvider;
