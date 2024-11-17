import { Request, Response } from "express";
import {
  createSqueeze,
  getAllSqueezes,
  getSqueezeById,
} from "../services/squeeze.service";
import { asyncHandler } from "../utils/asyncHandler";

export const getAllSqueezesController = asyncHandler(
  async (req: Request, res: Response) => {
    const squeezes = await getAllSqueezes();

    res.status(200).json({
      status_code: 200,
      message: "Squeezes Retrieved successfully",
      data: {
        squeezes,
      },
    });
  }
);

export const createSqueezeController = asyncHandler(
  async (req: Request, res: Response) => {
    const {
      email,
      first_name,
      last_name,
      phone,
      location,
      job_title,
      company,
      interests,
      referral_source,
    } = req.body;

    const squeeze = await createSqueeze({
      email,
      first_name,
      last_name,
      phone,
      location,
      job_title,
      company,
      interests,
      referral_source,
    });

    res.status(201).json({
      status_code: 201,
      message: "Squeeze Created successfully",
      data: {
        squeeze,
      },
    });
  }
);

export const getSqueezeByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const squeeze = await getSqueezeById(id);

    if (!squeeze) {
      return res
        .status(404)
        .json({ status_code: 404, message: "Squeeze not found" });
    }

    res.status(200).json({
      status_code: 200,
      message: "Squeeze Retrieved successfully",
      data: {
        squeeze,
      },
    });
  }
);
