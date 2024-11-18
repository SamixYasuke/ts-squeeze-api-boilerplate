<<<<<<< HEAD
import { Squeeze } from "../models/sqeeze.model";

export const getAllSqueezes = async () => {
  return await Squeeze.find();
};

export const createSqueeze = async (data: any) => {
  const squeeze = Squeeze.create(data);
  return await squeeze.save();
};

export const getSqueezeById = async (id: string) => {
  return await Squeeze.findOne({ where: { id } });
};
=======
import { Squeeze } from "../models/sqeeze.model";

export const getAllSqueezes = async () => {
  return await Squeeze.find();
};

export const createSqueeze = async (data: any) => {
  const squeeze = Squeeze.create(data);
  return await squeeze.save();
};

export const getSqueezeById = async (id: string) => {
  return await Squeeze.findOne({ where: { id } });
};
>>>>>>> c354b41d65e97ce570f3e20585d41ef4ad1c1639
