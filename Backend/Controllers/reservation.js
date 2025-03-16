import ErrorHandler from "../Error/error.js";
import { reservation } from "../Models/reservationschema.js";

export const sendreservation = async (req, res, next) => {
  const { firstname, lastname, email, phone, date, time } = req.body;
  if (!firstname || !lastname || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill in all the fields", 400));
  }
  try {
    await reservation.create({firstname, lastname, email, phone, date, time});
    res.status(200).json({
      success: true,
      message: "Reservation sent successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationerros = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationerros.join(" , "), 400));
    }
    return next({error})
  }
};
