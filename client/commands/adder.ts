import {World, Model, Vector3, Game, VehicleSeat} from '@nativewrappers/client';

RegisterCommand(
  'adder',
  async (source: number, args: string[]) => {
    const vehicle = await World.createVehicle(
      new Model('adder'),
      new Vector3(1, 2, 3),
      4,
    );
    if(vehicle) Game.PlayerPed.setIntoVehicle(vehicle, VehicleSeat.Driver);
  },
  false,
);