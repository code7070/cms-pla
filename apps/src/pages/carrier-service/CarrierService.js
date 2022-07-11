import { useState } from "react";
import Button from "../../components/button";
import ServiceSection from "../../components/serviceSection";

const CarrierService = () => {
  const [phone, setPhone] = useState("");

  const onChangePhone = (e) => setPhone(e.target.value || "");

  return (
    <ServiceSection title="Pulsa dan Internet">
      <div className="mb-10 py-4 mx-auto">
        <div className="text-center px-4 py-4 flex mx-auto">
          <span className="rounded-l-lg bg-gray-300 p-3 font-bold">+62</span>
          <input
            className="rounded-r-lg border-2 border-gray-300 p-3 w-9/12 outline-0"
            value={phone}
            onChange={onChangePhone}
            placeholder="Masukkan No.Telepon Anda"
          />
        </div>
        <div className="p-4">
          <Button>Beli</Button>
        </div>
      </div>
    </ServiceSection>
  );
};

export default CarrierService;
