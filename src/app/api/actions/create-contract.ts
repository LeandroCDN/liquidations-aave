// import POOL_ABI from "@/../ABI/pool.json"
import { ethers } from "ethers";

export default async function createContract({
  contractAddress,
  url,
  ABI,
}: any) {
  console.log("Create contract");

  const provider = new ethers.JsonRpcProvider(url);
  try {
    const abiArray = JSON.parse(ABI);
    // Crear una instancia del contrato utilizando el ABI y la dirección del contrato
    if (!contractAddress) {
      throw new Error(
        "La dirección del contrato no está definida en el archivo .env"
      );
    }
    const contract = new ethers.Contract(contractAddress, abiArray, provider);
    return contract; // Devuelve la instancia del contrato
  } catch (error) {
    console.error("Error al crear la instancia del contrato:", error);
    throw error; // Propaga el error hacia arriba
  }
}
