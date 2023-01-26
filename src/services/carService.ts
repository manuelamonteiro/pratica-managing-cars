import notFoundError from "../errors/notFoundError.js";
import conflictError from "../errors/conflictError.js";
import carRepository from "../repository/carRepository.js";

async function getCars() {
  const cars = await carRepository.getCars();
  return cars;
}

async function getCar(id: number) {
  const car = await carRepository.getCar(id);
  if (!car) {
    throw notFoundError();
  }

  return car;
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  const car = await carRepository.getCarWithLicensePlate(licensePlate);
  if (car) {
    throw conflictError(`Car with license plate ${licensePlate} already registered.`)
  }

  await carRepository.createCar(model, licensePlate, year, color);
}

async function deleteCar(id: number) {
  await getCar(id);
  await carRepository.deleteCar(id);
}

type CarUpdate = {
  model?: string,
  licensePlate?: string,
  year?: string,
  color?: string
}

async function updateCar(id: number, car: CarUpdate) {
  if ({ car }) throw { name: "empty_payload_error", message: "não foi especificada nenhuma mudança" };
  await carRepository.updateCar(id, car)

}

const carService = {
  getCars,
  getCar,
  createCar,
  deleteCar,
  updateCar
}

export default carService;