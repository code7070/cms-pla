import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import ServiceSection from "../../components/serviceSection";

const WaterService = () => {
  const [number, setNumber] = useState("");

  const onChangeNumber = (e) => setNumber(e.target.value || "");

  return (
    <ServiceSection title="Layanan Pembayaran PDAM">
      <div className="mb-10 py-4 mx-auto">
        <div className="text-center px-4 py-4 flex mx-auto">
          <input
            className="rounded-lg border-2 border-gray-300 p-3 w-9/12 outline-0"
            value={number}
            onChange={onChangeNumber}
            placeholder="Masukkan ID Pelanggan PDAM Anda"
          />
        </div>
        <div className="p-4">
          <Button>Beli</Button>
        </div>
      </div>
    </ServiceSection>
  );
};

export default WaterService;
