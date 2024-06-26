import * as functions from "firebase-functions";
import { applyCORSpolicy } from "../../constants/corsFunc";
import { ResponseObject, transportOptions } from "../../constants/emailCons";
import { generateInvoiceID } from "../../constants/utils";
import { postOrderToDB } from "./dbEmail";
import { emailAuth } from "../../constants/credentials";
import { renderClientMail } from "./templates/clientOrderTemplate";
import { renderAdminTemplate } from "./templates/admOrderConf";
import { getDateAndHour } from "./../../constants/utils";

const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport(transportOptions);

export const sendEmail = functions.https.onRequest(async (request, response) => {
  try {

    applyCORSpolicy(response);

    const data = JSON.parse(request.body);


    const invoiceNumberID = generateInvoiceID();


    functions.logger.info("Received email request:", { data });


    let ResponseData: ResponseObject = {
      EMAILTO_ADMIN: "EMPTY",
      EMAILTO_CLIENT: "EMPTY",
    };


    await postOrderToDB(invoiceNumberID, data, getDateAndHour());


    const emailClientResponse = await transport.sendMail({
      from: emailAuth.email,
      to: data.emailAddress,
      subject: "Formular trimis",
      html: renderClientMail(data),
    });
    ResponseData.EMAILTO_CLIENT = emailClientResponse;


    functions.logger.info("Email sent to client:", { emailClientResponse });

  
    const adminResponse = await transport.sendMail({
      from: data.emailAddress,
      to: emailAuth.email,
      subject: "Formular completat de " + data.name,
      html: renderAdminTemplate(data),
    });
    ResponseData.EMAILTO_ADMIN = adminResponse;

 
    functions.logger.info("Email sent to admin:", { adminResponse });

    response.status(200).send(ResponseData);

  } catch (error) {

    functions.logger.error("Error occurred in sendEmail function:", error);
    response.status(500).send("An error occurred: ");
  }
});